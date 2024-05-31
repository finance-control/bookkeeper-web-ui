import { Outlet, Navigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { Layout, Flex, Divider, Grid } from 'antd';
import Cookies from 'js-cookie';
import { Sider } from "src/widgets/sider/index"
import Header from "src/widgets/ui/Header"
import Footer from 'src/widgets/ui/Footer';
import { useContainerWidth } from 'src/shared/hooks';

const { useBreakpoint } = Grid

const PrivateRoute = () => {
  const containerWidth = useContainerWidth()
  const { xs } = useBreakpoint()

  return Cookies.get('userData') ?
    <Layout css={css`
      height: 100vh;
      width: 100%;
    `}>
      <Header />
      <Layout css={css`
        width: ${containerWidth} !important;
        margin: 0 auto;
      `}>
        <Flex vertical css={css`
          margin-right: 12px;
          display: ${xs ? 'none' : 'block'};
        `}>
          <Sider css={css`
            margin-top: 16px;
            margin-bottom: 16px;
          `} />
          <Flex css={css`
            padding: 0 14px;
          `}>
            <Divider css={css`
              margin: 0;
              margin-bottom: 20px;
            `} />
          </Flex>
          <Footer />
        </Flex>
        <Flex vertical css={css`
          width: 100%;
        `}>
          <Outlet />
        </Flex>
      </Layout>
    </Layout>
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;