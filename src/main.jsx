import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, RouterProvider } from 'react-router-dom';
import { router } from './router';
import "remixicon/fonts/remixicon.css";


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <RouterProvider router={router} />
  </HashRouter>
);
