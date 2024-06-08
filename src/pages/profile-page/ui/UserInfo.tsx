import * as React from 'react';
import { Typography } from 'antd';
import { css } from '@emotion/react';
import { UserAvatar } from 'src/shared/ui';
import { useGetUserQuery } from 'src/services/user/userApi';

const { Title } = Typography

const nameStyle = css`
	margin-bottom: 4px !important;
`

const surnameStyle = css`
	margin-top: 0 !important;
	margin-bottom: 0 !important;
`

interface IUserInfoProps {
}

export const UserInfo: React.FC<IUserInfoProps> = (props) => {
  const { data, isLoading, isError } = useGetUserQuery({})
  return (
    <>
      <UserAvatar size={128} css={css`margin-right: 16px;`} />
      <div>
        <Title level={3} css={nameStyle}>
          {data?.name}
        </Title>
        <Title level={5} css={surnameStyle}>
          {data?.surname}
        </Title>
      </div>
    </>
  )
};
