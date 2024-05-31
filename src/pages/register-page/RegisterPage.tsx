import React from 'react';
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
// import { useRegisterUserMutation, useLazyLoginUserQuery } from 'src/services/auth/authApi';
import { IRegisterUserForm } from 'src/models/models';
import {
	Button,
	Flex,
	Divider,
	Form,
	Input,
	Layout,
	Typography,
	Alert,
	Card,
	theme
} from 'antd';
import LogoNav from 'src/shared/ui/LogoNav';

// const { Title, Text, Link } = Typography
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

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
	const navigate = useNavigate();
	// const [registerUser, { data: registerData, isLoading: isRegisterLoading, isError: isRegisterError }] = useRegisterUserMutation()
	// const [loginUser, { data: loginData, isLoading: isLoginLoading, isError: isLoginError }] = useLazyLoginUserQuery()
	// const { token } = useToken();

	const handleOnLogin = () => {
		navigate("/login")
	}

	// const onFinish = async (userData: IRegisterUserForm) => {
	// 	await registerUser(userData)
	// 	const hashData: string = btoa(userData.email + ':' + userData.password)
	// 	await loginUser(hashData)
	// 	navigate("/")
	// };

	return (
		<>
			<Layout css={mainWrapperStyle}>
				{/**<Card>
					<Flex justify="space-between" align="center" vertical wrap="wrap" css={formWrapperStyle(token.paddingXL)}>
						<LogoNav size='large' />
						<Divider style={{ marginTop: 0 }}>
							<Title level={5} css={subtitleStyle}>Sign Up</Title>
						</Divider>
						<Form
							name="normal_register"
							className="register-form"
							onFinish={onFinish}
							layout="vertical"
							requiredMark="optional"
							style={{ width: '100%' }}
							size='large'
						>
							<Form.Item
								name="name"
								rules={[
									{
										required: true,
										message: "Please input your name!",
									},
								]}
							>
								<Input
									placeholder="Name"
								/>
							</Form.Item>

							<Form.Item
								name="surname"
								rules={[
									{
										required: true,
										message: "Please input your surname!",
									},
								]}
							>
								<Input
									placeholder="Surname"
								/>
							</Form.Item>

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
										loading={isRegisterLoading || isLoginLoading}
									>
										Sign up
									</Button>
									<div>
										<Text type="secondary">Already have an account?</Text>{" "}
										<Link onClick={handleOnLogin}>Sign in</Link>
									</div>
								</Flex>
							</Form.Item>
						</Form>
					</Flex>
					// isRegisterError || isLoginError && <Alert
					// 	message="Something went wrong, please try again."
					// 	type="error"
					// 	showIcon
					// 	style={{ marginTop: token.paddingMD }}
					// />
							</Card> **/}
			</Layout>
		</>
	)
};

export default Register;
