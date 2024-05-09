import React from 'react';
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { useLazyLoginUserQuery } from 'src/services/auth/authApi';
import {
	Button,
	Flex,
	Divider,
	Form,
	Input,
	Layout,
	Typography,
	theme,
	Card,
	Alert
} from 'antd';
import LogoNav from 'src/components/LogoNav';
import { ILoginUserForm } from 'src/models/models';

const { Title, Text, Link } = Typography
const { useToken } = theme;

const subtitleStyle = css`
	margin-bottom: 2px !important;
`

const formWrapperStyle = (padding: number | undefined) => css`
	padding: ${padding}px;
`

const mainWrapperStyle = css`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const formStyle = css`
	width: 100%;
	margin-bottom: 0;
`

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
	const navigate = useNavigate();
	const [loginUser, { data, isLoading, isError }] = useLazyLoginUserQuery()
	const { token } = useToken();

	const handleOnRegister = () => {
		navigate("/register")
	}

	const onFinish = async (userData: ILoginUserForm) => {
		const hashData: string = btoa(userData.email + ':' + userData.password)
		await loginUser(hashData)
		navigate("/")
	};

	return (
		<>
			<Layout css={mainWrapperStyle}>
				<Card>
					<Flex justify="space-between" align="center" vertical wrap="wrap" css={formWrapperStyle(token.paddingXL)}>
						<LogoNav size='large' />
						<Divider style={{ marginTop: 0 }}>
							<Title level={5} css={subtitleStyle}>Sign In</Title>
						</Divider>
						<Form
							name="normal_login"
							className="login-form"
							onFinish={onFinish}
							layout="vertical"
							requiredMark="optional"
							style={{ width: '100%' }}
							size='large'
						>
							<Form.Item
								name="email"
								rules={[
									{
										type: "email",
										required: true,
										message: "Please input your Email!",
									},
								]}
							>
								<Input
									placeholder="Email"
								/>
							</Form.Item>
							<Form.Item
								name="password"
								rules={[{ required: true, message: "Please input your Password!", }]}
							>
								<Input.Password
									type="password"
									placeholder="Password"
								/>
							</Form.Item>
							<Form.Item css={formStyle}>
								<Flex justify='center' align='center' vertical>
									<Button
										type="primary"
										htmlType="submit"
										size='large'
										style={{ marginBottom: '16px' }}
										loading={isLoading}
									>
										Sign in
									</Button>
									<div>
										<Text type="secondary">Don't have an account?</Text>{" "}
										<Link onClick={handleOnRegister}>Sign up now</Link>
									</div>
								</Flex>
							</Form.Item>
						</Form>
						{isError && <Alert
							message="Something went wrong, please try again."
							type="error"
							showIcon
							style={{ marginTop: token.paddingMD }}
						/>}
					</Flex>
				</Card>
			</Layout>
		</>
	)
};

export default Login;
