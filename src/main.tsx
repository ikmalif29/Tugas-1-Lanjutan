import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.js';
import List from './pages/List.js';
import About from './pages/About.js';
import ContactUs from './pages/ContactUs.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/list",
        element: <List />
      },
      {
        path: "/about",
        element: <About />
      }, 
      {
        path: "/contact",
        element: <ContactUs />
      }, 
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
