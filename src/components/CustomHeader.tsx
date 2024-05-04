import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react"
import UserLabel from './labels/UserLabel';
import { Layout, Drawer, Grid } from 'antd';
import TimeCounter from './DateWidget';
import { Twirl as BurgerIcon } from 'hamburger-react'
import { IoClose } from "react-icons/io5";
import LogoNav from 'src/components/LogoNav';

const { useBreakpoint } = Grid;

const { Header } = Layout

const headerStyle = (isXsBreakpoint: boolean | undefined) => css`
	background-color: white;
	padding: ${isXsBreakpoint ? '0 16px' : '0 24px'} !important;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: ${isXsBreakpoint ? '0px' : '16px'};
	background-color: white;
	border-radius: ${isXsBreakpoint ? '0' : '8px'};
	border-bottom: ${isXsBreakpoint ? '1px solid rgba(0,0,0,0.05)' : 'none'};
`

const drawerStyle = css`
	.ant-drawer-close{
		width: 40px !important;
		height: 40px !important;
		font-size: 24px;
		margin-right: 0 !important;
	}
	.ant-drawer-header-title{
		flex-direction: row-reverse !important;
	}
`

interface ICustomHeaderProps {
	className?: string;
}

const CustomHeader: React.FunctionComponent<ICustomHeaderProps> = ({ className }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	const [isDrawerOpened, setIsDrawerOpened] = useState(false)

	const handleCloseDrawer = () => {
		setIsDrawerOpened(false)
	}

	return (
		<>
			<Header css={headerStyle(isXsBreakpoint)}>
				{!isXsBreakpoint && <TimeCounter />}
				{!isXsBreakpoint && <UserLabel />}

				{isXsBreakpoint && <LogoNav colorStyle='dark' />}
				{isXsBreakpoint && <BurgerIcon
					toggled={isDrawerOpened}
					toggle={setIsDrawerOpened}
					size={24}
					color="#ededed"
				/>}
				<Drawer
					title={<UserLabel />}
					placement="right"
					onClose={handleCloseDrawer}
					open={isDrawerOpened}
					closeIcon={<IoClose />}
					css={drawerStyle}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</Header>
		</>
	)
};

export default CustomHeader;
