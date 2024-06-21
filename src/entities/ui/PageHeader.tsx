import * as React from 'react';
import { css } from '@emotion/react'
import { Typography, Flex } from 'antd';
import ButtonBack from '../../features/ButtonBack';

const { Title } = Typography

const pageHeaderStyle = css`
  margin-bottom: 24px;
  width: 100%;
`

interface IPageHeaderProps {
  pageTitle: string;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FunctionComponent<IPageHeaderProps> = ({ pageTitle, children, subtitle }) => {
  return (
    <Flex css={pageHeaderStyle} align='center'>
      <ButtonBack css={css`
        margin-right: 8px;
      `} />
      <div style={{ flexGrow: 1 }}>
        <Flex align='center' justify='space-between' wrap>
          <Title level={2}>{pageTitle}</Title>
          {children}
        </Flex>
        {subtitle}
      </div>
    </Flex>
  )
};

export default PageHeader;
