import React from 'react';
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

function App() {

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Private route using PrivateRoute component */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/add_category" element={<AddCategoryPage />} />
          <Route path="/spendings" element={<SpendingsPage />} />
          <Route path="/add_spending" element={<AddSpendingPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
