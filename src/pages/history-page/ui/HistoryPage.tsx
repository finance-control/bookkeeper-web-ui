import { useState } from 'react';
import { css } from '@emotion/react';
import PageWrapper from 'src/entities/ui/PageWrapper'
import { BlockContent } from 'src/shared/ui'
import { Tabs, Skeleton, Select, DatePicker, Flex, Typography, Space } from 'antd';
import type { TabsProps } from 'antd';
import { lazy, Suspense } from 'react';
const SpendingsTableView = lazy(() => import('src/shared/ui/SpendingsTableView'));

const { RangePicker } = DatePicker;
const { Title } = Typography

const getItems = (dates: string[] = ['']): TabsProps['items'] => [
  {
    key: '1',
    label: 'All transactions',
    children: 'Still in dev ;(',
  },
  // {
  //   key: '2',
  //   label: 'Transfers',
  //   children: 'Content of Tab Pane 2',
  // },
  {
    key: '3',
    label: 'Spendings',
    children:
      <Suspense fallback={<Skeleton active />}>
        <SpendingsTableView selectedDates={dates} />
      </Suspense>,
  },
]

enum SelectPeriods {
  Today = 'today',
  LastDay = 'last_day',
  LastWeek = 'last_week',
  LastMonth = 'last_month',
  LastYear = 'last_year',
  AllTime = 'all_time'
}

const selectPeriodOptions: { value: string, label: string }[] = [
  {
    value: SelectPeriods.Today,
    label: 'Today'
  },
  {
    value: SelectPeriods.LastDay,
    label: 'Last day'
  },
  {
    value: SelectPeriods.LastWeek,
    label: 'Last week'
  },
  {
    value: SelectPeriods.LastMonth,
    label: 'Last month'
  },
  {
    value: SelectPeriods.LastYear,
    label: 'Last year'
  },
  {
    value: SelectPeriods.AllTime,
    label: 'All time'
  }
]

interface IHistoryPageProps {
}

export const HistoryPage: React.FC<IHistoryPageProps> = (props) => {
  const [selectedDates, setSelectedDates] = useState<string[]>([''])

  const onChange = (key: string) => {
    // console.log(key);
  };

  const handleOnSelectedDatesChange = (date: any, dates: string[]) => setSelectedDates(dates)

  const handleOnSelectedPeriodChange = (value: string) => {
    switch (value) {
      case SelectPeriods.Today:

        break;
      case SelectPeriods.LastDay:

        break;
      case SelectPeriods.LastWeek:

        break;
      case SelectPeriods.LastMonth:

        break;
      case SelectPeriods.LastYear:

        break;
      case SelectPeriods.AllTime:

        break;

      default:
        break;
    }
  }

  return (
    <>
      <PageWrapper>
        <BlockContent>
          <Flex align='center' justify='space-between'>
            <Title level={4}>History</Title>
            <Space>
              {/* <Select
                defaultValue="3439489384"
                style={{ width: 200, marginRight: 8 }}
                options={[
                  { value: '34394893343', label: 'Default account: 17284376' },
                  { value: '3439489384', label: 'Main account: 1728437643' },
                  { value: '84594851', label: 'Secondary account: 4954985498' },
                  { value: '8459485', label: 'All accounts' },
                ]}
              /> */}
              <RangePicker
                onChange={handleOnSelectedDatesChange}
                renderExtraFooter={() =>
                  <Select
                    onChange={handleOnSelectedPeriodChange}
                    defaultValue={SelectPeriods.LastDay}
                    css={css`
                    width: 100%;
                    margin-top: 8px;
                    margin-bottom: 8px;
                  `}
                    options={selectPeriodOptions}
                  />}
              />
            </Space>
          </Flex>
          <Tabs defaultActiveKey="1" items={getItems(selectedDates)} onChange={onChange} />
        </BlockContent>
      </PageWrapper>
    </>
  )
};
