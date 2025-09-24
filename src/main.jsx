import { createRoot } from 'react-dom/client'
import './index.css'
import "remixicon/fonts/remixicon.css";
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
