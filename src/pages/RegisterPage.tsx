import React from 'react';
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation, useLazyLoginUserQuery } from 'src/services/auth/authApi';
import { IRegisterUserForm } from 'src/models/models';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Flex, Divider, Form, Input, Layout, Typography } from 'antd';
import { mainColor } from 'src/styles/style-constants';
import LogoNav from 'src/components/LogoNav';
import { TbLetterN } from "react-icons/tb";
import { TbLetterS } from "react-icons/tb";

const { Title, Text, Link } = Typography

const subtitleStyle = css`
	margin-bottom: 2px !important;
	color: ${mainColor} !important;
`

const formWrapperStyle = css`
	background-color: white;
	padding: 32px 48px;
	border-radius: 12px;
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
	const [registerUser, { data: registerData, isLoading: isRegisterLoading }] = useRegisterUserMutation()
	const [loginUser, { data: loginData, isLoading: isLoginLoading }] = useLazyLoginUserQuery()

	const handleOnLogin = () => {
		navigate("/login")
	}

	const onFinish = async (userData: IRegisterUserForm) => {
		await registerUser(userData)
		const hashData: string = btoa(userData.email + ':' + userData.password)
		await loginUser(hashData)
		navigate("/")
	};

	return (
		<>
			<Layout css={mainWrapperStyle}>
				<Flex justify="space-between" align="center" vertical wrap="wrap" css={formWrapperStyle}>
					<Title>
						<LogoNav colorStyle='dark' size='large' />
					</Title>
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
								prefix={<TbLetterN style={{ opacity: '40%' }} />}
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
								prefix={<TbLetterS style={{ opacity: '40%' }} />}
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
								prefix={<MailOutlined style={{ opacity: '40%' }} />}
								placeholder="Email"
							/>
						</Form.Item>

						<Form.Item
							name="password"
							rules={[{ required: true, message: "Please input your Password!", }]}
						>
							<Input.Password
								prefix={<LockOutlined style={{ opacity: '40%' }} />}
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
			</Layout>
		</>
	)
};

export default Register;
