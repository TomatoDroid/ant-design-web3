"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[8678],{38678:function(Kn,x,t){t.d(x,{GU:function(){return kn},Du:function(){return R.Du},VN:function(){return Fn},MV:function(){return Tn},Yw:function(){return Qn},mg:function(){return R.mg},VX:function(){return On},gV:function(){return Dn},M6:function(){return T},hm:function(){return bn},be:function(){return Nn},$R:function(){return R.$R}});var q=t(77117),g=t.n(q),_=t(67855),L=t.n(_),nn=t(95530),X=t.n(nn),M=t(50959),R=t(85710),en=t(36993),rn=t(20434),an=t(31674),tn=t(27566),un=t.n(tn),ln=t(13448),i=t.n(ln),sn=t(74815),P=t.n(sn),cn=t(28152),Z=t.n(cn),k=t(61188),on=t(81489),dn=t(34945),vn=t(74707),fn=t(46196),hn=t(50305),mn=t(67042),Yn=t(98041),pn=t(67150),zn=function(e){return debug("antd-web3:wagmi:".concat(e))},Q=function(e){return!!(e.type===pn.L.type&&e.icon&&e.id&&e.name)},gn="EIP6963",Cn=function(e){return{connectors:[gn],create:function(u){var n=u==null?void 0:u[0],m={icon:n==null?void 0:n.icon,name:n.name,remark:"Wallet ".concat(n==null?void 0:n.name," detected"),key:n==null?void 0:n.id};return g()(g()({},m),{},{hasWalletReady:function(){var o=P()(i()().mark(function h(){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n==null?void 0:n.getProvider();case 2:return a.abrupt("return",!!a.sent);case 3:case"end":return a.stop()}},h)}));function f(){return o.apply(this,arguments)}return f}(),hasExtensionInstalled:function(){var o=P()(i()().mark(function h(){return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n==null?void 0:n.getProvider();case 2:return a.abrupt("return",!!a.sent);case 3:case"end":return a.stop()}},h)}));function f(){return o.apply(this,arguments)}return f}()},e)}}},yn=t(14198);function Wn(v,e,$){return F.apply(this,arguments)}function F(){return F=P()(i()().mark(function v(e,$,u){var n;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,yn.w)(e,{address:$.address,chainId:u});case 2:return n=o.sent,o.abrupt("return",g()(g()({},$),{},{name:n??void 0}));case 4:case"end":return o.stop()}},v)})),F.apply(this,arguments)}var wn=t(36208);function $n(v,e,$,u){return U.apply(this,arguments)}function U(){return U=P()(i()().mark(function v(e,$,u,n){var m,o;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,wn.L)(e,{address:(0,k.O_)($),args:[u],chainId:n,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return m=h.sent,h.next=5,(0,k.Xw)(m);case 5:return o=h.sent,h.abrupt("return",o);case 7:case"end":return h.stop()}},v)})),U.apply(this,arguments)}var D=t(11527),In=function(e){var $=e.children,u=e.chainAssets,n=e.walletFactorys,m=e.availableChains,o=e.availableConnectors,f=e.ens,h=e.balance,l=e.locale,a=e.eip6963,p=(0,on.m)(),I=p.address,c=p.isDisconnected,s=p.chain,b=(0,dn.Z)(),O=M.useState(),S=Z()(O,2),B=S[0],J=S[1],Un=(0,vn.$)(),Bn=Un.connectAsync,Vn=(0,fn.o)(),V=Vn.switchChain,Gn=(0,hn.q)(),Ln=Gn.disconnectAsync,Xn=M.useState(void 0),K=Z()(Xn,2),A=K[0],Y=K[1],Zn=(0,mn.K)({address:h&&B?(0,k.O_)(B.address):void 0}),E=Zn.data;M.useEffect(function(){if(!I||c){J(void 0);return}var C=function(){var d=P()(i()().mark(function r(){var y;return i()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(y={address:I},w.t0=J,!f){w.next=8;break}return w.next=5,Wn(b,y);case 5:w.t1=w.sent,w.next=9;break;case 8:w.t1=y;case 9:w.t2=w.t1,(0,w.t0)(w.t2);case 11:case"end":return w.stop()}},r)}));return function(){return d.apply(this,arguments)}}();C()},[I,c,s,f]);var z=function(d){var r=o.find(function(W){return W.name===d&&!Q(W)});if(!a)return r;var y=o.find(function(W){return W.name===d&&Q(W)});return y||r},Hn=M.useMemo(function(){var C=[];o.forEach(function(r){if(Q(r)){un()(a)==="object"&&a!==null&&a!==void 0&&a.autoAddInjectedWallets&&!n.find(function(W){return W.connectors.includes(r.name)})&&C.push(Cn().create([r]));return}var y=n.find(function(W){return W.connectors.includes(r.name)});y!=null&&y.create||console.error("Can not find wallet factory for ".concat(r.name,", you should config it in WagmiWeb3ConfigProvider 'wallets'."))});var d=n.map(function(r){var y=r.connectors.map(z).filter(function(W){return!!W});return y.length===0&&!a?(console.error("Can not find connector for ".concat(r.connectors.join(","),", ignore the wallet. Please config connectors or add eip6963 config in WagmiWeb3ConfigProvider.")),null):r.create(y)}).filter(function(r){return r!==null});return[].concat(L()(d),C)},[o,n,a]),Jn=M.useMemo(function(){return m.map(function(C){var d=u==null?void 0:u.find(function(r){return r.id===C.id});return d!=null&&d.id?{id:d.id,name:d.name,icon:d.icon}:(console.error("Can not find chain ".concat(C.id,", you should config it in WagmiWeb3ConfigProvider 'chains'.")),null)}).filter(function(C){return C!==null})},[m,u]);M.useEffect(function(){var C;if(!(!s&&A)){var d=s??m[0];if(d){var r=u==null?void 0:u.find(function(y){return y.id===(d==null?void 0:d.id)});(C=r)!==null&&C!==void 0&&C.id||(r={id:d.id,name:d.name}),Y(r)}}},[s,u,m,A]);var G=A==null?void 0:A.nativeCurrency;return(0,D.jsx)(k.BQ,{locale:l,availableChains:Jn,chain:A,account:B,balance:h?{symbol:E==null?void 0:E.symbol,value:E==null?void 0:E.value,decimals:E==null?void 0:E.decimals,icon:G==null?void 0:G.icon}:void 0,availableWallets:Hn,addressPrefix:"0x",connect:function(){var C=P()(i()().mark(function d(r){var y,W,w;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,r==null||(y=(W=r).getWagmiConnector)===null||y===void 0?void 0:y.call(W);case 2:if(w=j.sent,!w&&r&&(w=z(r.name)),w){j.next=6;break}throw new Error("Can not find connector for ".concat(r==null?void 0:r.name));case 6:return j.next=8,Bn({connector:w,chainId:A==null?void 0:A.id});case 8:case"end":return j.stop()}},d)}));return function(d){return C.apply(this,arguments)}}(),disconnect:P()(i()().mark(function C(){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Ln();case 2:case"end":return r.stop()}},C)})),switchChain:function(){var C=P()(i()().mark(function d(r){return i()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:s?V==null||V({chainId:r.id}):Y(r);case 1:case"end":return W.stop()}},d)}));return function(d){return C.apply(this,arguments)}}(),getNFTMetadata:function(){var C=P()(i()().mark(function d(r){var y,W;return i()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return y=r.address,W=r.tokenId,N.abrupt("return",$n(b,y,W,s==null?void 0:s.id));case 2:case"end":return N.stop()}},d)}));return function(d){return C.apply(this,arguments)}}(),children:$})},Pn=["children","wallets","chains","ens","locale","balance","config","queryClient","eip6963"];function bn(v){var e=v.children,$=v.wallets,u=$===void 0?[]:$,n=v.chains,m=n===void 0?[]:n,o=v.ens,f=v.locale,h=v.balance,l=v.config,a=v.queryClient,p=v.eip6963,I=X()(v,Pn),c=[].concat(L()(m),[R.ny]),s=M.useMemo(function(){return a??new en.S},[a]);return(0,D.jsx)(an.F,g()(g()({config:l},I),{},{children:(0,D.jsx)(rn.aH,{client:s,children:(0,D.jsx)(In,{locale:f,chainAssets:c,walletFactorys:u,availableChains:l.chains,availableConnectors:l.connectors,ens:o,balance:h,eip6963:p,children:e})})}))}var Rn=t(96345),An=t.n(Rn),En=t(15033),Mn=t.n(En),jn=t(21320),H=t.n(jn),T=An()(function v(e){var $=this;Mn()(this,v),H()(this,"connectors",[]),H()(this,"create",function(u){var n=u==null?void 0:u.find(function(l){return l.name==="WalletConnect"}),m=u==null?void 0:u.find(function(l){return l.name===$.wallet.name}),o=void 0,f=function(){var l=P()(i()().mark(function a(){var p;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n==null?void 0:n.getProvider();case 2:return p=c.sent,c.abrupt("return",new Promise(function(s){if(o){s({uri:o});return}p==null||p.on("display_uri",function(b){o=b,s({uri:b})})}));case 4:case"end":return c.stop()}},a)}));return function(){return l.apply(this,arguments)}}(),h=function(){var l=P()(i()().mark(function a(){var p,I;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m==null||(p=m.getProvider)===null||p===void 0?void 0:p.call(m);case 2:return I=s.sent,s.abrupt("return",!!I);case 4:case"end":return s.stop()}},a)}));return function(){return l.apply(this,arguments)}}();return g()(g()({},$.wallet),{},{getWagmiConnector:function(){var l=P()(i()().mark(function p(){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,h();case 2:if(!c.sent){c.next=4;break}return c.abrupt("return",m);case 4:return c.abrupt("return",n);case 5:case"end":return c.stop()}},p)}));function a(){return l.apply(this,arguments)}return a}(),hasExtensionInstalled:function(){var l=P()(i()().mark(function p(){return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",h());case 1:case"end":return c.stop()}},p)}));function a(){return l.apply(this,arguments)}return a}(),hasWalletReady:function(){var l=P()(i()().mark(function p(){var I;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,h();case 2:return I=s.sent,s.abrupt("return",!!(I||n));case 4:case"end":return s.stop()}},p)}));function a(){return l.apply(this,arguments)}return a}(),getQrCode:n?f:void 0})}),this.wallet=e,e.extensions&&this.connectors.push(e.name),e.app&&this.connectors.push("WalletConnect")}),Tn=function(e){return new T(g()(g()({},R.Zv),e))},Sn=["useWalletConnectOfficialModal"],Nn=function(e){var $=e||{},u=$.useWalletConnectOfficialModal,n=u===void 0?!1:u,m=X()($,Sn);return{connectors:["WalletConnect"],create:function(f){var h=void 0,l=function(){var a=P()(i()().mark(function p(){var I,c;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,f==null||(I=f[0])===null||I===void 0?void 0:I.getProvider();case 2:return c=b.sent,b.abrupt("return",new Promise(function(O){if(h){O({uri:h});return}c==null||c.on("display_uri",function(S){h=S,O({uri:S})})}));case 4:case"end":return b.stop()}},p)}));return function(){return a.apply(this,arguments)}}();return g()(g()({},R.Tl),{},{hasWalletReady:function(){var a=P()(i()().mark(function I(){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",!0);case 1:case"end":return s.stop()}},I)}));function p(){return a.apply(this,arguments)}return p}(),getQrCode:n?void 0:l},m)}}},kn=function(e){return{connectors:["Coinbase Wallet"],create:function(){return g()(g()({},R.p_),{},{hasWalletReady:function(){var u=P()(i()().mark(function m(){return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",!0);case 1:case"end":return f.stop()}},m)}));function n(){return u.apply(this,arguments)}return n}()},e)}}},Dn=function(e){return new T(g()(g()({},R.eu),e))},On=function(e){return{connectors:["Safeheron"],create:function(u){return g()(g()({},R.OJ),{},{hasWalletReady:function(){var n=P()(i()().mark(function o(){var f;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,u==null||(f=u[0])===null||f===void 0?void 0:f.getProvider();case 2:return l.abrupt("return",!!l.sent);case 3:case"end":return l.stop()}},o)}));function m(){return n.apply(this,arguments)}return m}(),hasExtensionInstalled:function(){var n=P()(i()().mark(function o(){var f;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,u==null||(f=u[0])===null||f===void 0?void 0:f.getProvider();case 2:return l.abrupt("return",!!l.sent);case 3:case"end":return l.stop()}},o)}));function m(){return n.apply(this,arguments)}return m}()},e)}}},Qn=function(e){return new T(g()(g()({},R.tw),e))},Fn=function(e){return new T(g()(g()({},R.o4),e))}}}]);
