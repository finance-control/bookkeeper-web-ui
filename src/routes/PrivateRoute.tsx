import { Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Cookies from 'js-cookie';
import CustomSider from "src/components/CustomSider"
import CustomHeader from "src/components/CustomHeader"
import CustomFooter from 'src/components/CustomFooter';

const PrivateRoute = () => {
  return Cookies.get('userData') ?
    <Layout>
      <CustomSider />
      <Layout>
        <CustomHeader />
        <Outlet />
        <CustomFooter />
      </Layout>
    </Layout>
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;