import * as React from 'react';
import { css } from '@emotion/react';
import { Typography, Space, Flex, Select } from 'antd';
import BalanceBlockItem from './BalanceBlockItem';

const { Title } = Typography

const widgetsWrapperStyle = css`
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  .ant-space-item{
    width: 200px;
    flex-grow: 1;
    flex-shrink: 0
  }
`

interface IBalanceBlockProps {
}

const BalanceBlock: React.FC<IBalanceBlockProps> = (props) => {
  return (
    <>
      <Title level={4}>Balance</Title>
      <Space css={widgetsWrapperStyle} size={16}>
        <BalanceBlockItem />
        <BalanceBlockItem />
        <BalanceBlockItem />
        <BalanceBlockItem />
        <BalanceBlockItem />
      </Space>
    </>
  )
};

export default BalanceBlock;
