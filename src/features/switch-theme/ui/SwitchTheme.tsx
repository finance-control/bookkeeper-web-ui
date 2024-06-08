import { Segmented } from "antd"
import { css } from "@emotion/react"
import { LuSun, LuMoon } from "react-icons/lu"
import { useAppDispatch, useAppSelector } from 'src/app'
import { changeColorMode } from 'src/app'

const switcherStyle = css`
  .ant-segmented-item-label{
    display: flex;
    align-items: center;
  }
`

export const SwitchTheme = () => {
  const dispatch = useAppDispatch()
  const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)
  return (
    <>
      <Segmented
        css={switcherStyle}
        defaultValue={isDarkMode ? "dark" : "light"}
        options={[
          {
            icon: <LuSun />,
            value: 'light',
          },
          {
            icon: <LuMoon />,
            value: 'dark',
          }
        ]}
        onChange={() => dispatch(changeColorMode())}
      />
    </>
  )
}