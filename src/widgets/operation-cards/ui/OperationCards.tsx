import * as React from 'react';
import OperationCard from './OperationCard';
import { Space } from 'antd';

interface IOperationCardsBlockProps {
  className?: string;
}

export const OperationCards: React.FC<IOperationCardsBlockProps> = ({ className }) => {
  return (
    <>
      <Space className={className}>
        <OperationCard title="Add Earning" />
        <OperationCard title="Add Spending" />
        <OperationCard title="Add Transfer" />
      </Space>
    </>
  )
};
