import { Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Cookies from 'js-cookie';
import Sider from "src/components/Sider"
import Header from "src/components/Header"
import Footer from 'src/components/Footer';

const PrivateRoute = () => {
  return Cookies.get('userData') ?
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </Layout>
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;