import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import "remixicon/fonts/remixicon.css";
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
);