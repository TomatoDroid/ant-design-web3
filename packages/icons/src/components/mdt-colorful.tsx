// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/mdt-colorful.svg';

/**![MdtColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1tZHQtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA3Ni43IDc1LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc2LjcgNzUuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHRpdGxlPk1EVDwvdGl0bGU+CjxnPgoJPGcgaWQ9ImFudC13ZWIzLWljb24tbWR0LWNvbG9yZnVsLUxheWVyXzEtMiI+CgkJPHBhdGggZD0iTTQwLjksMzMuNmwtMi41LDQuM2wtMi41LDQuM2wtNC43LTIuN0wxMi40LDI4Ljd2MjAuNGMtMy0yLjItNy0yLjItMTAsMFYyNi44YzMuNywyLjgsOSwyLDExLjctMS43CgkJCWMxLjEtMS40LDEuNy0zLjIsMS43LTVjMC0wLjMsMC0wLjYtMC4xLTFsMjAuNCwxMS44bDIuMiwxLjNMNDAuOSwzMy42eiIgc3R5bGU9ImZpbGw6ICM4QUNBRkY7Ii8+CgkJPHBhdGggZD0iTTcxLjUsNTQuNmMwLjIsMC40LDAuMywwLjgsMC4zLDEuMmgtNy41bDMuNy0yLjJDNjkuMyw1Myw3MC44LDUzLjQsNzEuNSw1NC42TDcxLjUsNTQuNnoiIHN0eWxlPSJmaWxsOiAjOEFDQUZGOyIvPgoJCTxwYXRoIGQ9Ik03NC4zLDI2Ljh2MjIuM2MtMy0yLjItNy0yLjItMTAsMFYyOC43TDQ1LjYsMzkuNWwtNC43LDIuN2wtMi41LTQuM2wtMi41LTQuM2wyLjUtMS40bDIuMi0xLjNMNjEsMTkuMQoJCQljMCwwLjMtMC4xLDAuNi0wLjEsMWMwLDQuNiwzLjgsOC40LDguNCw4LjRDNzEuMSwyOC41LDcyLjksMjcuOSw3NC4zLDI2Ljh6IiBzdHlsZT0iZmlsbDogIzhBQ0FGRjsiLz4KCQk8cGF0aCBkPSJNMzkuNywwLjFMMzkuNywwLjFDMzkuNiwwLDM5LjYsMCwzOS43LDAuMUwzOS43LDAuMUwzOS42LDBjMCwwLDAsMC0wLjEsMGMwLDAsMCwwLTAuMSwwbDAsMGMwLDAsMCwwLTAuMSwwCgkJCWwwLDBoLTAuMWwwLDBsMCwwbDAsMGgtMC4xbDAsMGwwLDBsMCwwbDAsMGwwLDBIMzloLTAuMWMtMC4xLDAtMC4yLDAtMC4yLDBjLTAuMSwwLTAuMiwwLTAuMiwwczAsMC0wLjEsMGgtMC4xaC0wLjFsMCwwbDAsMAoJCQljLTAuMSwwLTAuMSwwLTAuMiwwbDAsMGwwLDBsMCwwaC0wLjFoLTAuMWwwLDBsMCwwbDAsMGgtMC4xbDAsMGMwLDAsMCwwLTAuMSwwbDAsMGwwLDBsMCwwTDEzLjEsMTMuOWMxLjMsMS4yLDIuMSwyLjcsMi41LDQuMwoJCQlMMzUuOSw2LjV2MTVjMCwxLjQsMS4xLDIuNSwyLjUsMi41czIuNS0xLjEsMi41LTIuNXYtMTVsMCwwbDIwLjMsMTEuN2MwLjQtMS43LDEuMi0zLjIsMi41LTQuM0wzOS43LDAuMXoiIHN0eWxlPSJmaWxsOiAjOEFDQUZGOyIvPgoJCTxwYXRoIGQ9Ik03MS44LDU1LjhoLTcuNWwzLjctMi4yYzEuMi0wLjcsMi43LTAuMywzLjQsMC45QzcxLjcsNTQuOSw3MS44LDU1LjQsNzEuOCw1NS44eiIgc3R5bGU9ImZpbGw6ICM4QUNBRkY7Ii8+CgkJPHBhdGggZD0iTTYxLjEsNTcuN0w0MC45LDY5LjR2LTE1YzAtMS40LTEuMS0yLjUtMi41LTIuNXMtMi41LDEuMS0yLjUsMi41djE1TDE1LjYsNTcuN2MtMC40LDEuNy0xLjIsMy4yLTIuNSw0LjMKCQkJbDI0LDEzLjhsMCwwYzAsMCwwLDAsMC4xLDBoMC4xaDAuMWMwLDAsMCwwLDAuMSwwaDAuMWgwLjFoMC4xaDAuMUgzOGMwLjEsMCwwLjIsMCwwLjMsMGgwLjFoMC4xaDAuMWgwLjFjMC4xLDAsMC4yLDAsMC4zLDAKCQkJYzAsMCwwLDAsMC4xLDBsMCwwaDAuMWgwLjFjMC4xLDAsMC4yLTAuMSwwLjItMC4xczAsMCwwLjEsMGgwLjFjMCwwLDAsMCwwLjEsMGwwLDBsMjQtMTMuOEM2Mi40LDYwLjgsNjEuNSw1OS4zLDYxLjEsNTcuN3oiIHN0eWxlPSJmaWxsOiAjOEFDQUZGOyIvPgoJCTxjaXJjbGUgY3g9IjM4LjQiIGN5PSIzNy45IiByPSI3LjQiIHN0eWxlPSJmaWxsOiAjNDE4N0Y3OyIvPgoJCTxjaXJjbGUgY3g9IjcuNCIgY3k9IjIwLjEiIHI9IjcuNCIgc3R5bGU9ImZpbGw6ICM0MTg3Rjc7Ii8+CgkJPGNpcmNsZSBjeD0iNy40IiBjeT0iNTUuOCIgcj0iNy40IiBzdHlsZT0iZmlsbDogIzQxODdGNzsiLz4KCQk8Y2lyY2xlIGN4PSI2OS4zIiBjeT0iMjAuMSIgcj0iNy40IiBzdHlsZT0iZmlsbDogIzQxODdGNzsiLz4KCQk8Y2lyY2xlIGN4PSI2OS4zIiBjeT0iNTUuOCIgcj0iNy40IiBzdHlsZT0iZmlsbDogIzQxODdGNzsiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const MdtColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-mdt-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

MdtColorful.displayName = 'MdtColorful';