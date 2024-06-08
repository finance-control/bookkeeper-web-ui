import * as React from 'react';
import { Avatar } from 'antd';
import { AiOutlineUser } from "react-icons/ai";
import { css } from '@emotion/react'

const avatarStyle = css`
	background-color: #ced4ff;
	color: #5065F6;
`

interface IUserAvatarProps {
  size?: number;
  className?: string;
}

export const UserAvatar: React.FunctionComponent<IUserAvatarProps> = ({ size = 24, className }) => {
  return (
    <>
      <Avatar size={size} icon={<AiOutlineUser />} css={avatarStyle} className={className} />
    </>
  )
}
