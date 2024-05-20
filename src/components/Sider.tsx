import { useState } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { Layout, Divider, Flex } from 'antd';
import SideBar from 'src/components/SideBar';
import { css } from "@emotion/react"

const { Sider: AntSider } = Layout

const siderStyle = css`
	position: fixed !important;
	height: 100vh;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;

	.ant-menu{
		border-inline-end: none !important;
	}
`

interface ISiderProps {
}

const Sider: React.FC<ISiderProps> = (props) => {
	const [collapsed, setCollapsed] = useState(false)
	const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)

	return (
		<Flex css={siderStyle}>
			<AntSider
				theme={isDarkMode ? 'dark' : "light"}
				collapsible
				collapsed={collapsed}
				trigger={null}
				breakpoint='sm'
				collapsedWidth={0}
				onCollapse={value => setCollapsed(value)}
			>
				<SideBar isCollapsed={collapsed} />
			</AntSider>
			<Divider type='vertical' css={css`
				height: 100% !important;
				margin: 0px !important;
			`} />
		</Flex>
	)
};

export default Sider;
