import * as React from 'react';
import { css } from '@emotion/react';
import { Typography, Space } from 'antd';
import BalanceBlockItem from './BalanceBlockItem';

const { Title } = Typography

const widgetsWrapperStyle = css`
  overflow: scroll;
  width: 100%;

  .ant-space-item{
    width: 20%;
    flex-grow: 1;
    flex-shrink: 0
  }
`

interface IBalanceBlockProps {
}

const BalanceBlock: React.FC<IBalanceBlockProps> = (props) => {
  return (
    <>
      <Title level={3}>Balance</Title>
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
