import * as React from 'react';
import { useGetUserQuery } from 'src/services/user/userApi'
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from 'antd';
import UserAvatar from 'src/components/shared/UserAvatar';

const { Title, Text } = Typography

const buttonStyle = css`
	height: auto !important;
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

const UserLabel: React.FunctionComponent<IUserLabelProps> = (props) => {
	const { data, isLoading, isError } = useGetUserQuery({})
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
							<Text ellipsis css={emailStyle}>test_name_11111surname@yandex.ru</Text>
						</Flex>
					</Flex>}
				{isError && <p>No User Data</p>}
			</Button>
		</>
	)
};

export default UserLabel;
