import React from 'react';
import { css } from '@emotion/react';
import { Table, DatePicker } from 'antd';
import PageWrapper from 'src/components/PageWrapper'
import PageHeader from 'src/components/PageHeader';
import { useLazyGetSpendingsQuery } from 'src/services/spendings/spendingsApi';
import { Tag } from 'antd';
import type { TableProps } from 'antd';
import { ITableSpendings } from 'src/models/models'

const { RangePicker } = DatePicker;

const columns: TableProps<ITableSpendings>['columns'] = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <p>{text}</p>,
  },
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

const tableWrapperStyle = css`
  overflow-x: scroll;
`

const rangePickerStyle = css`
  margin-bottom: 16px;
`

interface ISpendingsPageProps {
}

const SpendingsPage: React.FunctionComponent<ISpendingsPageProps> = (props) => {

  const [getSpendings, { data, isLoading, isError }] = useLazyGetSpendingsQuery<any>()

  const handleOnDateChange = (date: any, dateStrings: string[]) => {
    getSpendings({ start_date: dateStrings[0], end_date: dateStrings[1] })
  }

  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle='Spendings' />
        <RangePicker
          size='large'
          css={rangePickerStyle}
          onChange={handleOnDateChange}
        />
        <div css={tableWrapperStyle}>
          <Table
            columns={columns}
            dataSource={data}
            loading={isLoading}
            pagination={false}
            sticky
          />
        </div>
      </PageWrapper>
      {
        isError && <h4>Something went wrong</h4>
      }
    </>
  )
}

export default SpendingsPage;
