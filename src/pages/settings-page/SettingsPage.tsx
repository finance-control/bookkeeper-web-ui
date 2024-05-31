import PageWrapper from 'src/entities/ui/PageWrapper'
import PageHeader from 'src/entities/ui/PageHeader';
import { List, Typography, Select, Button } from 'antd';
import { css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from 'src/app/appStore';
import { changeColorMode } from 'src/app';
import BlockContent from 'src/entities/ui/BlockContent'

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
        {/* <PageHeader pageTitle='Settings' /> */}
        <BlockContent>
          <List
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
        </BlockContent>

      </PageWrapper >
    </>
  )
};

export default SettingsPage;
