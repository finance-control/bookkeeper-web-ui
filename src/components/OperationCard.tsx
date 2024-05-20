import { Card, Flex, Typography } from 'antd';
import { css } from '@emotion/react';

const { Title } = Typography

const operationCardStyle = () => css`
  .ant-card-body{
    padding: 12px !important;
  }
`

interface IOperationCardProps {
  title: string;
}

const OperationCard: React.FC<IOperationCardProps> = ({ title }) => {
  return (
    <>
      <Card
        hoverable
        css={operationCardStyle}
      >
        <Flex vertical>
          <Title level={5}>
            {title}
          </Title>
        </Flex>
      </Card>
    </>
  )
};

export default OperationCard;
