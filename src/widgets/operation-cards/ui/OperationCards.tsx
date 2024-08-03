import * as React from 'react';
import { Space } from 'antd';
import { AddSpending } from 'src/features/add-spending';
import { AddSpendingModal } from 'src/pages/add-spending-modal';

interface IOperationCardsBlockProps {
  className?: string;
}

export const OperationCards: React.FC<IOperationCardsBlockProps> = ({ className }) => {
  return (
    <>
      <Space className={className}>
        <AddSpending />
        {/* <OperationCard title="Add Earning" />
        <OperationCard title="Add Spending" /> */}
        {/* <OperationCard title="Add Transfer" /> */}
        <AddSpendingModal />
      </Space>
    </>
  )
};
