import * as React from 'react';
import OperationCard from 'src/components/OperationCard';
import { Space } from 'antd';

interface IOperationCardsBlockProps {
  className?: string;
}

const OperationCardsBlock: React.FC<IOperationCardsBlockProps> = ({ className }) => {
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

export default OperationCardsBlock;
