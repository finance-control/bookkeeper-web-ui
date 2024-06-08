import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react"
import { UserLabel } from 'src/entities/user-label';
import { Layout, Drawer, Grid, Flex, Button, Space, Typography, Segmented } from 'antd';
// import { Twirl as BurgerIcon } from 'hamburger-react'
// import { IoClose } from "react-icons/io5";
import { LogoNav } from 'src/entities/logo';
import { useAppDispatch, useAppSelector } from 'src/app';
// import DateWidget from 'src/shared/ui/DateWidget';
// import GreetingWidget from 'src/shared/ui/GreetingWidget';
import { useContainerWidth } from 'src/shared/lib';
import { SwitchTheme } from 'src/features/switch-theme';

const { useBreakpoint } = Grid;
const { Header: AntHeader } = Layout

const headerStyle = css`
	padding: 0 !important;
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: normal !important;
	/* background-color: white; */
	height: 50px !important;
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

export const Header: React.FunctionComponent<IHeaderProps> = ({ className }) => {
	const { xs: isXsBreakpoint } = useBreakpoint();
	const [isDrawerOpened, setIsDrawerOpened] = useState(false)
	const dispatch = useAppDispatch()
	const containerWidth = useContainerWidth()

	const handleCloseDrawer = () => {
		setIsDrawerOpened(false)
	}

	return (
		<>
			<AntHeader css={headerStyle}>
				<div css={css`
					width: ${containerWidth};
					margin: 0 auto;
					/* background-color: #c013b7; */
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;
				`}>
					{/* {!isXsBreakpoint &&
					<Flex vertical>
						<GreetingWidget />
						<DateWidget />
					</Flex>
				} */}

					<LogoNav css={css`
						margin-left: 14px;
					`} />

					{/* <DateWidget /> */}

					{/* <Flex vertical>
		<GreetingWidget />
		<DateWidget />
	</Flex> */}

					<Space>
						<SwitchTheme />
						<UserLabel />
					</Space>

					{/* {isXsBreakpoint && <BurgerIcon
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
					</Drawer> */}
				</div>
			</AntHeader>
		</>
	)
};
