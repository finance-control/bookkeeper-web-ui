import React from 'react';
import { css } from '@emotion/react'
import { RegisterForm } from 'src/widgets/register-form';
import { Layout } from 'antd';

const mainWrapperStyle = css`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

interface IRegisterProps {
}

export const RegisterPage: React.FunctionComponent<IRegisterProps> = (props) => {
	return (
		<>
			<Layout css={mainWrapperStyle}>
				<RegisterForm />
			</Layout>
		</>
	)
};
