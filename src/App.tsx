import { Routes, Route } from 'react-router-dom';
import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'
import LoginPage from 'src/pages/LoginPage'
import RegisterPage from 'src/pages/RegisterPage';
import PrivateRoute from 'src/routes/PrivateRoute'
import ProfilePage from 'src/pages/ProfilePage'
import CategoriesPage from 'src/pages/CategoriesPage'
import AddCategoryPage from 'src/pages/AddCategoryPage';
import SpendingsPage from 'src/pages/SpendingsPage';
import AddSpendingPage from 'src/pages/AddSpendingPage';
import ReportsPage from 'src/pages/ReportsPage';
import { PathRoutes } from './data/constants';

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path={PathRoutes.Login} element={<LoginPage />} />
        <Route path={PathRoutes.Register} element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Private route using PrivateRoute component */}
        <Route path={PathRoutes.Home} element={<PrivateRoute />}>
          <Route path={PathRoutes.Home} element={<HomePage />} />
          <Route path={PathRoutes.Profile} element={<ProfilePage />} />
          <Route path={PathRoutes.Categories} element={<CategoriesPage />} />
          <Route path={PathRoutes.AddCategory} element={<AddCategoryPage />} />
          <Route path={PathRoutes.Spendings} element={<SpendingsPage />} />
          <Route path={PathRoutes.AddSpending} element={<AddSpendingPage />} />
          <Route path={PathRoutes.SpendingsReport} element={<ReportsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
