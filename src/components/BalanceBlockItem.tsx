import * as React from 'react';
import { css } from '@emotion/react';
import { Typography, Flex, theme, Card, Tag } from 'antd';

const { Title, Text } = Typography
const { useToken } = theme;

const currencyWidgetStyle = (
  padding: number | undefined
) => css`
  .ant-card-body{
    padding: ${padding}px !important;
  }
`

const incrementStyle = css`
  margin-inline-end: 0 !important;
`

interface IBalanceBlockItemProps {
}

const BalanceBlockItem: React.FC<IBalanceBlockItemProps> = (props) => {
  const { token } = useToken();
  return (
    <>
      <Card css={currencyWidgetStyle(token.paddingSM)}>
        <Flex vertical>
          <Title
            level={5}
            css={css`
              font-size: 12px !important;
              opacity: 60%;
              margin-bottom: 4px;
            `}
            ellipsis
          >
            Main Account
          </Title>
          <Title
            level={3}
            style={{ marginBottom: 24 }}
            ellipsis
          >
            1000000
          </Title>
          <Flex justify='space-between' align='center'>
            <Text ellipsis>
              US Dollars
            </Text>
            <Tag css={incrementStyle} color="green">+5.1%</Tag>
          </Flex>
        </Flex>
      </Card>
    </>
  )
};

export default BalanceBlockItem;
