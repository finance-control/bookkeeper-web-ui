import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { mainColor } from 'src/styles/style-constants';

interface ISpinLoaderProps {
}

const SpinLoader: React.FunctionComponent<ISpinLoaderProps> = (props) => {
  return (
    <>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: mainColor }} spin />} />
    </>
  )
};

export default SpinLoader;
