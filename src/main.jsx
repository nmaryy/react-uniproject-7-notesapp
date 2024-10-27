import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Settings from './pages/Settings.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ContextProvider from './assets/ContextProvider.jsx';
import ArrayProvider from './assets/ArrayProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "settings",
    Component: Settings
  },
  {
    path: "contact",
    Component: Contact
  },
  {
    path: "about",
    Component: About
  },
]);


createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ArrayProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    </ArrayProvider>
  </ContextProvider>
)
