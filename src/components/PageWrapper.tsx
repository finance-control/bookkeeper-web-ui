import * as React from 'react';
import { Layout, Grid } from 'antd'
import { css } from '@emotion/react'
import { useAppSelector } from 'src/hooks/redux';
import { mainDarkBg } from 'src/styles/theme';

const { Content } = Layout
const { useBreakpoint } = Grid

const contentStyle = (isXsBreakpoint: boolean | undefined, isDarkMode: boolean | undefined) => css`
	margin: ${isXsBreakpoint ? '0px' : '16px'};
	padding: 16px;
	background-color: ${isDarkMode ? mainDarkBg : 'white'};
	border-radius: ${isXsBreakpoint ? '0' : '8px'};
`

interface IPageWrapperProps {
	children?: any;
}

const PageWrapper: React.FunctionComponent<IPageWrapperProps> = ({ children }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	const { isDarkMode } = useAppSelector(state => state.commonReducer)
	return (
		<>
			<Layout>
				<Content css={contentStyle(isXsBreakpoint, isDarkMode)}>
					{children}
				</Content>
			</Layout>
		</>
	)
};

export default PageWrapper;
