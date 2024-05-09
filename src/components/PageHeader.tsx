import * as React from 'react';
import { css } from '@emotion/react'
import { Typography, Space } from 'antd';
import ButtonBack from './shared/ButtonBack';

const { Title } = Typography

const pageHeaderStyle = css`
  margin-bottom: 20px;
  width: 100%;
`

interface IPageHeaderProps {
  pageTitle: string;
  children?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FunctionComponent<IPageHeaderProps> = ({ pageTitle, children, className }) => {
  return (
    <Space css={pageHeaderStyle} align='start'>
      <ButtonBack css={css`margin-top: 4px;`} />
      <Space direction='vertical' size={0}>
        <Title level={2}>{pageTitle}</Title>
        {children}
      </Space>
    </Space>
  )
};

export default PageHeader;
