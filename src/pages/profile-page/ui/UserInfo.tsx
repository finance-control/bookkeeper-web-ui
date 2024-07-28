import * as React from 'react';
import { Typography, Space } from 'antd';
import { css } from '@emotion/react';
import { UserAvatar } from 'src/shared/ui';
import { useGetUserQuery } from 'src/shared/api';

const { Title } = Typography

interface IUserInfoProps {
}

export const UserInfo: React.FC<IUserInfoProps> = () => {
  const { data } = useGetUserQuery(null)
  return (
    <>
      <UserAvatar size={128} css={css`
        margin-right: 16px;
      `} />
      <div>
        <Space wrap>
          <Title level={3} >
            {data?.name}
          </Title>
          <Title level={3}>
            {data?.surname}
          </Title>
        </Space>
        <Title level={5}>
          {data?.email}
        </Title>
      </div>
    </>
  )
};
