import * as React from 'react';
import { css } from '@emotion/react'
import { Typography } from 'antd';

const { Title } = Typography

const pageHeaderStyle = css`
  margin-bottom: 20px;
`

interface IPageHeaderProps {
  pageTitle: string;
  children?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FunctionComponent<IPageHeaderProps> = ({ pageTitle, children, className }) => {
  return (
    <div css={pageHeaderStyle}>
      <Title level={2} style={{ marginBottom: 0 }}>{pageTitle}</Title>
      {children}
    </div>
  )
};

export default PageHeader;
