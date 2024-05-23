import { Grid } from "antd"

const { useBreakpoint } = Grid;

const useContainterWidth = () => {
  const { xxl, xl, lg, md, sm, xs } = useBreakpoint();
  if (xxl) {
    return '1200px'
  } else if (xl) {
    return '1200px'
  } else if (lg) {
    return '992px'
  } else if (md) {
    return '768px'
  } else if (sm) {
    return '576px'
  } else if (xs) {
    return '100%'
  }
}

export default useContainterWidth