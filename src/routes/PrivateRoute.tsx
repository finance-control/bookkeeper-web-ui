import { Outlet, Navigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { Layout, Flex, Divider, Grid } from 'antd';
import Cookies from 'js-cookie';
import Sider from "src/components/Sider"
import Header from "src/components/Header"
import Footer from 'src/components/Footer';
import useContainterWidth from 'src/hooks/useContainerWidth';

const { useBreakpoint } = Grid

const PrivateRoute = () => {
  const containerWidth = useContainterWidth()
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