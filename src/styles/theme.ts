import { theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const mainColor = '#5065F6'
export const textColor = '#181818'
export const mainDarkBg = '#282828'

export const themeData = (isDarkMode: boolean = false) => ({
  token: {
    colorPrimary: mainColor,
    colorLink: mainColor
  },
  components: {
    Button: {
      colorPrimary: mainColor,
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    },
    Menu: {
      itemColor: '#626263',
      darkItemBg: mainDarkBg,
      darkSubMenuItemBg: '#202020',
      darkPopupBg: mainDarkBg
    },
    Layout: {
      headerPadding: '0 16px',
      headerBg: isDarkMode ? mainDarkBg : 'white',
      siderBg: mainDarkBg,
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
    },
  },
  algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
})