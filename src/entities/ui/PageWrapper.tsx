import * as React from 'react';
import { Layout, Grid } from 'antd'
import { css } from '@emotion/react'
import { useAppSelector } from 'src/app';
import { mainDarkBg } from 'src/app/styles/theme';

const { Content } = Layout
const { useBreakpoint } = Grid

const contentStyle = (isXsBreakpoint: boolean | undefined, isDarkMode: boolean | undefined) => css`
	margin: ${isXsBreakpoint ? '0 px 0px' : '16px 0px'};
	/* padding: 16px; */
`

interface IPageWrapperProps {
	children?: any;
}

const PageWrapper: React.FunctionComponent<IPageWrapperProps> = ({ children }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)
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