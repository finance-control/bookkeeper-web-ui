import { useState } from 'react';
import { useAppSelector } from 'src/app';
import { Layout, Flex } from 'antd';
import { SideBar } from 'src/entities/side-bar';
import { css } from "@emotion/react"

const { Sider: AntSider } = Layout

const siderStyle = css`
	.ant-menu{
		border-inline-end: none !important;
	}
`

interface ISiderProps {
	className?: string;
}

export const Sider: React.FC<ISiderProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false)
	const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)
	return (
		<Flex css={siderStyle} className={className}>
			<AntSider
				theme={isDarkMode ? 'dark' : "light"}
				collapsible
				collapsed={collapsed}
				trigger={null}
				breakpoint='sm'
				collapsedWidth={0}
				onCollapse={value => setCollapsed(value)}
				width={170}
			>
				<SideBar isCollapsed={collapsed} />
			</AntSider>
		</Flex>
	)
};
