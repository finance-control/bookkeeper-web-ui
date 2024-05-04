import * as React from 'react';
import { useGetUserQuery } from 'src/services/user/userApi'
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { Flex, Button } from 'antd';
import UserAvatar from 'src/components/shared/UserAvatar';

const buttonStyle = css`
	height: auto !important;
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
				{data && <Flex align='center' justify='center'>
					<UserAvatar />
					<h6 css={css`font-size: 16px; margin-right: 4px;`}>{data.name}</h6>
					<h6 css={css`font-size: 16px;`}>{data.surname}</h6>
				</Flex>}
				{isError && <p>No User Data</p>}
			</Button>
		</>
	)
};

export default UserLabel;
