import * as React from 'react';
import { Layout, Grid } from 'antd'
import { css } from '@emotion/react'

const { Content } = Layout
const { useBreakpoint } = Grid;

const contentStyle = (isXsBreakpoint: boolean | undefined) => css`
	margin: ${isXsBreakpoint ? '0px' : '16px'};
	padding: ${isXsBreakpoint ? '16px' : '24px'};
	background-color: white;
	border-radius: ${isXsBreakpoint ? '0' : '8px'};
`

interface IPageWrapperProps {
	children?: any;
}

const PageWrapper: React.FunctionComponent<IPageWrapperProps> = ({ children }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	return (
		<>
			<Layout>
				<Content css={contentStyle(isXsBreakpoint)}>
					{children}
				</Content>
			</Layout>
		</>
	)
};

export default PageWrapper;
