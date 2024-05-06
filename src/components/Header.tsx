import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react"
import UserLabel from './labels/UserLabel';
import { Layout, Drawer, Grid, Switch, Flex } from 'antd';
import { Twirl as BurgerIcon } from 'hamburger-react'
import { IoClose } from "react-icons/io5";
import LogoNav from 'src/components/LogoNav';
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { changeColorMode } from 'src/store/reducers/CommonSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';

const { useBreakpoint } = Grid;
const { Header: AntHeader } = Layout

const headerStyle = (isXsBreakpoint: boolean | undefined) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
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

const switcherStyle = css`
	.ant-switch-inner-unchecked{
		display: flex !important;
		align-items: center !important;
	}
	.ant-switch-inner-checked{
		display: flex !important;
		align-items: center !important;
	}
	margin-right: 8px;
`

interface IHeaderProps {
	className?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ className }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	const [isDrawerOpened, setIsDrawerOpened] = useState(false)
	const dispatch = useAppDispatch()
	const { isDarkMode } = useAppSelector(state => state.commonReducer)

	const handleCloseDrawer = () => {
		setIsDrawerOpened(false)
	}

	const handleChangeColorMode = () => {
		dispatch(changeColorMode())
	}

	return (
		<>
			<AntHeader css={headerStyle(isXsBreakpoint)}>

				{!isXsBreakpoint && <h4>Welcome back</h4>}

				{!isXsBreakpoint &&
					<Flex align='center'>
						<Switch
							checkedChildren={<RiMoonFill />}
							unCheckedChildren={<RiSunFill />}
							defaultChecked={isDarkMode}
							css={switcherStyle}
							onClick={handleChangeColorMode}
						/>
						<UserLabel />
					</Flex>}

				{isXsBreakpoint && <LogoNav colorStyle='dark' />}
				{isXsBreakpoint && <BurgerIcon
					toggled={isDrawerOpened}
					toggle={setIsDrawerOpened}
					size={24}
					color="#c5c5c5"
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
