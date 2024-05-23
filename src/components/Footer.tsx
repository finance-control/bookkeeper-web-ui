import * as React from 'react';
import { Layout, Typography } from 'antd';
import { css } from '@emotion/react';

const { Text } = Typography;
const { Footer: AntFooter } = Layout;

const footerStyle = css`
  display: flex;
  align-items: center;
  padding: 0 12px !important;
`

interface IFooterProps {
  className?: string;
}

const Footer: React.FunctionComponent<IFooterProps> = ({ className }) => {
  return (
    <AntFooter css={footerStyle} className={className}>
      <Text type="secondary" css={css`
        font-size: 12px;
      `}>2024 Finance Control</Text>
    </AntFooter>
  )
};

export default Footer;
