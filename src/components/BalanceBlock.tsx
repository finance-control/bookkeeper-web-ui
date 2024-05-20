import * as React from 'react';
import { css } from '@emotion/react';
import { Typography, Space, Flex, Select } from 'antd';
import BalanceBlockCard from 'src/components/BalanceBlockCard';

const { Title } = Typography

const widgetsWrapperStyle = css`
  /* padding: 12px 12px; */
  overflow-y: auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  .ant-space-item{
    width: 200px;
    flex-grow: 1;
    flex-shrink: 0;
  }
`

interface IBalanceBlockProps {
}

const BalanceBlock: React.FC<IBalanceBlockProps> = (props) => {
  return (
    <>
      <Title level={4} style={{ marginBottom: 0 }}>Balance</Title>
      <Space css={widgetsWrapperStyle} size={16}>
        <BalanceBlockCard />
        <BalanceBlockCard />
        <BalanceBlockCard />
        <BalanceBlockCard />
        <BalanceBlockCard />
      </Space>
    </>
  )
};

export default BalanceBlock;
