import * as React from 'react';
import { useGetUserQuery } from 'src/shared/api'
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from 'antd';
import { UserAvatar } from 'src/shared/ui';

const { Title, Text } = Typography

const buttonStyle = css`
	height: 50px !important;
	border-radius: 0;
`

const nameStyle = css`
	font-size: 14px !important;
	margin-right: 4px;
	margin-bottom: 0 !important;
	font-weight: 500 !important;
`

const surnameStyle = css`
	font-size: 14px !important;
	font-weight: 500 !important;
	margin-top: 0 !important;
	margin-bottom: 0 !important;
`

const userDataStyle = css`
	margin-bottom: -4px;
	margin-right: 4px;
	width: 100%;
`

const emailStyle = css`
	font-size: 12px;
`

interface IUserLabelProps {
}

export const UserLabel: React.FunctionComponent<IUserLabelProps> = () => {
	const { data, isLoading, isError } = useGetUserQuery(null)
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/profile")
	}
	return (
		<>
			<Button
				type="text"
				loading={isLoading}
				onClick={handleOnClick}
				css={buttonStyle}
			>
				{data &&
					<Flex align='center' justify='center' >
						<UserAvatar size={32} css={css`margin-right: 8px;`} />
						<Flex align="start" style={{ maxWidth: '100px' }} vertical>
							<Flex css={userDataStyle}>
								<Title ellipsis css={nameStyle}>{data.name}</Title>
								<Title ellipsis css={surnameStyle}>{data.surname}</Title>
							</Flex>
							<Text ellipsis css={emailStyle}>{data.email}</Text>
						</Flex>
					</Flex>}
				{isError && <p>No User Data</p>}
			</Button>
		</>
	)
};
