
import './App.css'
import { NextUIProvider } from '@nextui-org/react'

import Banner from './assets/Banner'
import SideNavbar from './assets/SideNavbar'


import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: '/settings',
    element: <SettingScreen />,
  },
  {
    path: '/profile',
    element: <ProfileScreen />,
  },
]);


function App() {

  return (
    <>
      <NextUIProvider>
        <div className='App'>
          <SideNavbar></SideNavbar>
          <div className='screen'>
            <Banner></Banner>
            <RouterProvider router={router} />
          </div>
        </div>
      </NextUIProvider>
    </>
  )
}

export default App
