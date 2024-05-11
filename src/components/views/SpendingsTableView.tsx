import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useLazyGetSpendingsQuery } from 'src/services/spendings/spendingsApi';
import { Tag, Table, Alert } from 'antd';
import type { TableProps } from 'antd';
import { ITableSpendings } from 'src/models/models'

const columns: TableProps<ITableSpendings>['columns'] = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => (
      <p>{amount.amount + ' ' + amount.currency}</p>
    )
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
    render: (categoryName) => (
      <Tag>
        {categoryName}
      </Tag>
    )
  },
];

interface ISpendingsTableViewProps {
  selectedDates: string[];
}

const SpendingsTableView: React.FC<ISpendingsTableViewProps> = ({ selectedDates }) => {
  const [getSpendings, { data, isLoading, isError, isFetching }] = useLazyGetSpendingsQuery<any>()

  useEffect(() => {
    getSpendings({ start_date: selectedDates[0], end_date: selectedDates[1] })
  }, [selectedDates])

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading || isFetching}
        // pagination={false}
        scroll={{ x: 600 }}
        sticky
      />
      {isError && <Alert message="Something went wrong, please try again" type="error" />}
    </>
  )
};

export default SpendingsTableView;
