import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react"
import UserLabel from './labels/UserLabel';
import { Layout, Drawer, Grid, Flex, Button, Divider, Space } from 'antd';
import { Twirl as BurgerIcon } from 'hamburger-react'
import { IoClose } from "react-icons/io5";
import LogoNav from 'src/components/LogoNav';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import DateWidget from 'src/components/widgets/DateWidget';
import GreetingWidget from 'src/components/widgets/GreetingWidget';

const { useBreakpoint } = Grid;
const { Header: AntHeader } = Layout

const headerStyle = (isXsBreakpoint: boolean | undefined) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: normal !important;
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

interface IHeaderProps {
	className?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ className }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	const [isDrawerOpened, setIsDrawerOpened] = useState(false)
	const dispatch = useAppDispatch()

	const handleCloseDrawer = () => {
		setIsDrawerOpened(false)
	}

	return (
		<>
			<AntHeader css={headerStyle(isXsBreakpoint)}>

				{!isXsBreakpoint &&
					<Flex vertical>
						<GreetingWidget />
						<Divider style={{ marginTop: 0, marginBottom: 6 }} />
						<DateWidget />
					</Flex>
				}

				{!isXsBreakpoint &&
					<Space>
						<Button type='primary'>
							Add transaction
						</Button>
						<UserLabel />
					</Space>}

				{isXsBreakpoint && <LogoNav />}
				{isXsBreakpoint && <BurgerIcon
					toggled={isDrawerOpened}
					toggle={setIsDrawerOpened}
					size={24}
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
			</AntHeader>
		</>
	)
};

export default Header;
