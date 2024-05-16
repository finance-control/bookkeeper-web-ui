import { theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const mainColor = '#5065F6'
export const textColor = '#181818'
export const mainDarkBg = '#202022'
export const layoutDarkBg = '#18181A'
export const layoutLightBg = '#f5f5f5'

export const getThemeData = (isDarkMode: boolean = false) => ({
  token: {
    colorPrimary: mainColor,
    colorLink: isDarkMode ? 'white' : textColor,
    borderRadius: 8
  },
  components: {
    Button: {
      colorPrimary: mainColor,
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    },
    Menu: {
      itemColor: '#626263',
      darkItemBg: '#202022',
      darkSubMenuItemBg: '#202020',
      darkPopupBg: mainDarkBg
    },
    Layout: {
      headerPadding: '0 16px',
      headerBg: 'transparent',
      bodyBg: isDarkMode ? layoutDarkBg : layoutLightBg,
      footerBg: isDarkMode ? layoutDarkBg : layoutLightBg,
      siderBg: mainDarkBg,
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    }
  },
  algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
})