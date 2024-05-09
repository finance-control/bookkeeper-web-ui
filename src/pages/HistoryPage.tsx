import * as React from 'react';
import PageWrapper from 'src/components/PageWrapper'
import PageHeader from 'src/components/PageHeader';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All transactions',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Transfers',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Spendings',
    children: 'Content of Tab Pane 3',
  },
];

interface IHistoryPageProps {
}

const HistoryPage: React.FC<IHistoryPageProps> = (props) => {
  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle='History' />
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </PageWrapper>
    </>
  )
};

export default HistoryPage;
