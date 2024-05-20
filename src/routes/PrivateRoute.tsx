import { Outlet, Navigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { Layout, Grid } from 'antd';
import Cookies from 'js-cookie';
import Sider from "src/components/Sider"
import Header from "src/components/Header"
import Footer from 'src/components/Footer';

const { useBreakpoint } = Grid;

const PrivateRoute = () => {
  const { sm: isSmBreakpoint } = useBreakpoint();

  return Cookies.get('userData') ?
    <Layout hasSider css={css`
      height: 100vh;
    `}>
      <Sider />
      <Layout css={css`
        margin-left: ${isSmBreakpoint ? '200px' : '0px'};
      `}>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </Layout>
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;