import React from 'react';
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { useLazyLoginUserQuery } from '../api/authApi';
import {
  Button,
  Flex,
  Divider,
  Form as AntForm,
  Input,
  Typography,
  theme,
  Card,
  Alert
} from 'antd';
import LogoNav from 'src/shared/ui/LogoNav';
import { ILoginUserForm } from 'src/models/models';

const { Title, Text, Link } = Typography
const { useToken } = theme;

const subtitleStyle = css`
	margin-bottom: 2px !important;
`

const formWrapperStyle = (padding: number | undefined) => css`
	padding: ${padding}px;
`

const formStyle = css`
	width: 100%;
	margin-bottom: 0;
`

interface IFormProps {
}

export const Form: React.FunctionComponent<IFormProps> = (props) => {
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
      <Card>
        <Flex justify="space-between" align="center" vertical wrap="wrap" css={formWrapperStyle(token.paddingXL)}>
          <LogoNav size='large' />
          <Divider style={{ marginTop: 0 }}>
            <Title level={5} css={subtitleStyle}>Sign In</Title>
          </Divider>
          <AntForm
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
            style={{ width: '100%' }}
            size='large'
          >
            <AntForm.Item
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
            </AntForm.Item>
            <AntForm.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!", }]}
            >
              <Input.Password
                type="password"
                placeholder="Password"
              />
            </AntForm.Item>
            <AntForm.Item css={formStyle}>
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
            </AntForm.Item>
          </AntForm>
          {isError && <Alert
            message="Something went wrong, please try again."
            type="error"
            showIcon
            style={{ marginTop: token.paddingMD }}
          />}
        </Flex>
      </Card>
    </>
  )
};
