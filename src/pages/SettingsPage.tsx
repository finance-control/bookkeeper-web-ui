import PageWrapper from 'src/components/PageWrapper'
import PageHeader from 'src/components/PageHeader';
import { List, Typography, Select, Button } from 'antd';
import { css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { changeColorMode } from 'src/store/reducers/RootSlice';

const { Text } = Typography

interface DataType {
  icon?: React.ReactNode;
  title: string;
  action?: React.ReactNode
}

const list: DataType[] = [
  {
    icon: '',
    title: 'Theme',
    action: ''
  }
]

interface ISettingsPageProps {
}

const SettingsPage: React.FC<ISettingsPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)

  return (
    <>
      <PageWrapper>
        <PageHeader pageTitle='Settings' />
        <List
          bordered
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          css={css`
            margin-bottom: 24px;
          `}
          renderItem={(item) => (
            <List.Item
              actions={[<Select
                defaultValue={isDarkMode ? "dark" : "light"}
                style={{ width: 120 }}
                onChange={() => dispatch(changeColorMode())}
                options={[
                  { value: 'light', label: 'Light' },
                  { value: 'dark', label: 'Dark' },
                ]}
              />]}
            >
              <Text>{item.title}</Text>
            </List.Item>
          )}
        />
        <Button danger disabled>
          Delete account
        </Button>
      </PageWrapper >
    </>
  )
};

export default SettingsPage;
