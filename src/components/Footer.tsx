import * as React from 'react';
import { Layout, Typography } from 'antd';
import { css } from '@emotion/react';

const { Text } = Typography;
const { Footer: AntFooter } = Layout;

const footerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <AntFooter css={footerStyle}>
      <Text type="secondary">2024 Finance Control</Text>
    </AntFooter>
  )
};

export default Footer;
