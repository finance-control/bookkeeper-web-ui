import * as React from 'react'
import { UserLabel } from 'src/entities/user-label'
import { css } from "@emotion/react"
import { IoClose } from "react-icons/io5"
import { Drawer as AntDrawer } from 'antd';
import { SideBar } from 'src/entities/side-bar';
import { useAppDispatch, useAppSelector, changeShowDrawer } from 'src/app';

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

interface IDrawerProps {
}

export const Drawer: React.FC<IDrawerProps> = () => {
  const { isDrawerOpened } = useAppSelector(state => state.rootSliceReducer)
  const dispatch = useAppDispatch()

  return (
    <>
      <AntDrawer
        title={<UserLabel />}
        placement="right"
        onClose={() => dispatch(changeShowDrawer())}
        open={isDrawerOpened}
        closeIcon={<IoClose />}
        css={drawerStyle}
      >
        <SideBar />
      </AntDrawer>
    </>
  )
};
