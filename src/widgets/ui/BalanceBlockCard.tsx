import * as React from 'react';
import { css } from '@emotion/react';
import { Typography, Flex, theme, Card, Tag } from 'antd';

const { Title, Text } = Typography
const { useToken } = theme;

const currencyCardStyle = (
  padding: number | undefined
) => css`
  .ant-card-body{
    padding: ${padding}px !important;
  }
`

const incrementStyle = css`
  margin-inline-end: 8px !important;
`

interface IBalanceBlockItemProps {
}

const BalanceBlockItem: React.FC<IBalanceBlockItemProps> = () => {
  const { token } = useToken();
  return (
    <>
      <Card
        css={currencyCardStyle(token.paddingSM)}
      // hoverable
      >
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
            <Flex align='center'>
              <Tag css={incrementStyle} color="green">+5.1%</Tag>
              <Text css={css`
                opacity: 40%;
              `}>
                since last month
              </Text>
            </Flex>
            <Text ellipsis>
              US Dollars
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  )
};

export default BalanceBlockItem;
