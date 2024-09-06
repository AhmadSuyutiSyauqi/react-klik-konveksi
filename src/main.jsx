import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import FilterProducts from './components/Filter/Filter';
import PaymentJapanPage from './pages/payment/japan';
import LoginPage from './pages/login';
import DashboardUser from './pages/dasboard-user';
import DashboardAdmin from './pages/dashboard-admin';
import PaymentNagataPage from './pages/payment/nagata';
import PaymentAmericanPage from './pages/payment/american';
import FormRegisterPage from './pages/form-register';
import FormLupaPw from './components/Fragments/FormLupaPw';
import AboutUs from './pages/about-us';
import JenisKain from './pages/jenis-kain';
import PenjelasanKain from './pages/penjelasan-kain';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World</h1>,
  },
  {
    path: '/home',
    element: <HomePage/>,
  },
  {
    path: '/payment',
    children: [
      {
        path: 'japan',
        element: <PaymentJapanPage/>,
      },
      {
        path: 'nagata',
        element: <PaymentNagataPage/>,
      },
      {
        path: 'american',
        element: <PaymentAmericanPage/>,
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/register',
    element: <FormRegisterPage/>,
  },
  {
    path: '/lupa-password',
    element: <FormLupaPw/>,
  },
  {
    path: '/dashboard-user',
    element: <DashboardUser/>,
  },
  {
    path: '/dashboard-admin',
    element: <DashboardAdmin/>,
  },
  {
    path: '/about-us',
    element: <AboutUs/>,
  },
  {
    path: '/jenis-kain',
    element: <JenisKain/>,
  },
  {
    path: '/penjelasan-kain',
    element: <PenjelasanKain/>,
  },
])


function App() {
  return (
    <RouterProvider router={Router} />
  );
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<App />
  </React.StrictMode>,
)
