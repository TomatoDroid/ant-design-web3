import type { Account, Balance } from '@ant-design/web3-common';
import { AddressPurpose, getProviderById, request, type BitcoinProvider } from 'sats-connect';

import { getBalanceByMempool } from '../../helpers';
import type { BitcoinWallet } from '../useBitcoinWallet';

export class XverseBitcoinWallet implements BitcoinWallet {
  name: string;
  provider: BitcoinProvider | null;
  account?: Account;
  payment?: string;

  constructor(name: string, id = 'XverseProviders.BitcoinProvider') {
    this.name = name;
    this.provider = getProviderById(id);
  }

  connect = async (): Promise<void> => {
    if (!this.provider) return;
    const response = await request('getAccounts', {
      purposes: [AddressPurpose.Ordinals, AddressPurpose.Payment],
    });
    if (response.status === 'error') {
      throw new Error(response.error.message);
    }
    const [ordinals, payment] = response.result;
    this.account = { address: ordinals.address };
    this.payment = payment.address;
  };

  getBalance = async (): Promise<Balance | undefined> => {
    if (!this.payment) return;
    const balance = await getBalanceByMempool(this.payment);
    return balance;
  };

  signMessage = async (msg: string): Promise<string | undefined> => {
    if (!this.account?.address || !this.provider) return;
    const response = await request('signMessage', {
      address: this.account.address,
      message: msg,
    });
    if (response.status === 'success') {
      return response.result.signature;
    } else {
      throw new Error(response.error.message);
    }
  };

  sendTransfer = async (to: string, sats: number): Promise<string> => {
    let txid = '';
    try {
      const response = await request('sendTransfer', {
        recipients: [
          {
            address: to,
            amount: sats,
          },
        ],
      });
      if (response.status === 'success') {
        txid = response.result.txid;
      } else {
        throw new Error(response.error.message);
      }
    } catch (e) {
      throw e;
    }
    return txid;
  };
}
