import { css } from "@emotion/react"
import { UserLabel } from 'src/entities/user-label';
import { Layout, Grid, Space } from 'antd';
import { Drawer } from './Drawer'
import { Twirl as BurgerIcon } from 'hamburger-react'
import { LogoNav } from 'src/entities/logo';
import { useAppDispatch, useAppSelector, changeShowDrawer } from 'src/app';
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
  height: 50px !important;
`

interface IHeaderProps {
  className?: string;
}

export const Header: React.FunctionComponent<IHeaderProps> = () => {
  const { xs: isXsBreakpoint } = useBreakpoint();
  const dispatch = useAppDispatch()
  const containerWidth = useContainerWidth()
  const { isDrawerOpened } = useAppSelector(state => state.rootSliceReducer)

  return (
    <>
      <AntHeader css={headerStyle}>
        <div css={css`
          width: ${containerWidth};
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        `}>
          <LogoNav css={css`
              margin-left: 14px;
            `} />

          {!isXsBreakpoint &&
            <Space>
              <SwitchTheme />
              <UserLabel />
            </Space>
          }

          {isXsBreakpoint && <BurgerIcon
            toggled={isDrawerOpened}
            toggle={() => dispatch(changeShowDrawer())}
            size={24}
          />}
          <Drawer />
        </div>
      </AntHeader>
    </>
  )
};
