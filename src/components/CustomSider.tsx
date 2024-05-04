import React, { useEffect } from 'react';
import { Layout, Button } from 'antd';
import { useState } from 'react'
import SideBar from 'src/components/SideBar';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { css } from "@emotion/react"

const { Sider } = Layout

const siderStyle = css`
	position: sticky !important;
	height: 100vh;
	top: 0;
	bottom: 0;
	left: 0;
`

const collapseButtonStyle = css`
	font-size: 16px;
	width: 50px;
	height: 50px;
	position: absolute;
	bottom: 0;
	background-color: #ffffff;
	border-radius: 0px !important;
	color: #353535;
	&:hover{
		background-color: #f1f1f1 !important;
	}
`

interface ISiderProps {
}

const CustomSider: React.FunctionComponent<ISiderProps> = (props) => {

	const [collapsed, setCollapsed] = useState(false)
	const [collapsedWidth, setCollapsedWidth] = useState(80)

	return (
		<>
			<Sider
				theme="light"
				collapsible
				collapsed={collapsed}
				css={siderStyle}
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
					css={collapseButtonStyle}
					block
				/>}
			</Sider>
		</>
	)
};

export default CustomSider;
