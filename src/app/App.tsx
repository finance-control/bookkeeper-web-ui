import { Routes, Route } from 'react-router-dom';
import HomePage from 'src/pages/home-page/HomePage'
import NotFoundPage from 'src/pages/not-found-page/NotFoundPage'
import LoginPage from 'src/pages/login-page/LoginPage'
import RegisterPage from 'src/pages/register-page/RegisterPage';
import PrivateRoute from 'src/app/layouts/PrivateRoute'
import ProfilePage from 'src/pages/profile-page/ProfilePage'
import CategoriesPage from 'src/pages/categories-page/CategoriesPage'
import ReportsPage from 'src/pages/reports-page/ReportsPage';
import HistoryPage from 'src/pages/history-page/HistoryPage';
import SettingsPage from 'src/pages/settings-page/SettingsPage';
import { PathRoutes } from '../data/constants';
import { ConfigProvider } from 'antd';
import { getThemeData } from './styles/theme';
import { useAppSelector } from './appStore';
import './styles/index.css'

export const App = () => {
  const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)
  return (
    <>
      <ConfigProvider
        theme={getThemeData(isDarkMode)}
      >
        <Routes>
          {/* Public routes */}
          <Route path={PathRoutes.Login} element={<LoginPage />} />
          <Route path={PathRoutes.Register} element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* Private route using PrivateRoute component */}
          <Route path={PathRoutes.Home} element={<PrivateRoute />}>
            <Route path={PathRoutes.Home} element={<HomePage />} />
            <Route path={PathRoutes.Profile} element={<ProfilePage />} />
            <Route path={PathRoutes.History} element={<HistoryPage />} />
            <Route path={PathRoutes.Categories} element={<CategoriesPage />} />
            <Route path={PathRoutes.Reports} element={<ReportsPage />} />
            <Route path={PathRoutes.Settings} element={<SettingsPage />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  )
}
