import * as React from 'react';
import { Layout, Typography } from 'antd';
import { css } from '@emotion/react';

const { Text } = Typography;
const { Footer } = Layout;

const footerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface ICustomFooterProps {
}

const CustomFooter: React.FunctionComponent<ICustomFooterProps> = (props) => {
  return (
    <Footer css={footerStyle}>
      <Text type="secondary">2024 Finance Control</Text>
    </Footer>
  )
};

export default CustomFooter;
