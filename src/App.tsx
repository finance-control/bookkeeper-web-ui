import { Routes, Route } from 'react-router-dom';
import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'
import LoginPage from 'src/pages/LoginPage'
import RegisterPage from 'src/pages/RegisterPage';
import PrivateRoute from 'src/routes/PrivateRoute'
import ProfilePage from 'src/pages/ProfilePage'
import CategoriesPage from 'src/pages/CategoriesPage'
import ReportsPage from 'src/pages/ReportsPage';
import HistoryPage from 'src/pages/HistoryPage';
import SettingsPage from 'src/pages/SettingsPage';
import { PathRoutes } from './data/constants';
import { ConfigProvider } from 'antd';
import { getThemeData } from 'src/styles/theme';
import { useAppSelector } from 'src/hooks/redux';

function App() {
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

export default App
