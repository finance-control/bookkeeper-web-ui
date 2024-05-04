import * as styles from 'src/styles/style-constants';
import type { ColorPickerProps, GetProp } from 'antd';
import { theme } from 'antd';
const { defaultAlgorithm, darkAlgorithm } = theme;

type Color = Exclude<GetProp<ColorPickerProps, 'value'>, string>;

export const themeData = {
  token: {
    colorPrimary: '#5065F6',
    colorLink: styles.mainColor,
  },
  components: {
    Button: {
      colorPrimary: '#5065F6',
      algorithm: defaultAlgorithm,
    },
    Menu: {
      itemColor: '#626263',
    }
  },
}