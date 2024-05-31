import React from 'react';
import { css } from '@emotion/react'
import { Layout } from 'antd';

import { LoginForm } from 'src/widgets/login-form';

const mainWrapperStyle = css`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Login: React.FunctionComponent = () => {
	return (
		<>
			<Layout css={mainWrapperStyle}>
				<LoginForm />
			</Layout>
		</>
	)
};

export default Login;
