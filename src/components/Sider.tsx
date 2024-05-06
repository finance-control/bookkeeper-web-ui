import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { Layout, Button } from 'antd';
import SideBar from 'src/components/SideBar';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { css } from "@emotion/react"
import { mainDarkBg } from 'src/styles/theme';

const { Sider: AntSider } = Layout

const siderStyle = (isDarkMode: boolean | undefined) => css`
	position: sticky !important;
	height: 100vh;
	top: 0;
	bottom: 0;
	left: 0;

	border-right: 1px solid ${isDarkMode ? '#373737' : '#ebebeb'};

	.ant-menu{
		border-inline-end: none !important;
	}
`

const collapseButtonStyle = (isDarkMode: boolean | undefined) => css`
	font-size: 16px;
	width: 50px;
	height: 50px;
	position: absolute;
	bottom: 0;
	background-color: ${isDarkMode ? mainDarkBg : '#ffffff'} ;
	border-radius: 0px !important;
	&:hover{
		background-color: ${isDarkMode ? '#343434' : '#f8f8f8'}  !important;
	}
`

interface ISiderProps {
}

const Sider: React.FunctionComponent<ISiderProps> = (props) => {
	const [collapsed, setCollapsed] = useState(false)
	const [collapsedWidth, setCollapsedWidth] = useState(80)
	const { isDarkMode } = useAppSelector(state => state.commonReducer)

	return (
		<>
			<AntSider
				theme={isDarkMode ? 'dark' : "light"}
				collapsible
				collapsed={collapsed}
				css={siderStyle(isDarkMode)}
				trigger={null}
				breakpoint='sm'
				collapsedWidth={collapsedWidth}
				onBreakpoint={(broken) => {
					broken ? setCollapsedWidth(0) : setCollapsedWidth(80)
				}}
				onCollapse={value => setCollapsed(value)}
			>
				<SideBar isCollapsed={collapsed} />
				{collapsedWidth == 80 && <Button
					type='text'
					icon={collapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
					onClick={() => setCollapsed(!collapsed)}
					css={collapseButtonStyle(isDarkMode)}
					block
				/>}
			</AntSider>
		</>
	)
};

export default Sider;
