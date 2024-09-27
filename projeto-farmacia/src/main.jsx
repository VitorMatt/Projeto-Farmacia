import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Cartao from './components/Cartao.jsx';
import App from './App.jsx';

const router = createBrowserRouter([{

  path: '/',
  element: <App />,
  children: [{

    path: '/cartao',
    element: <Cartao />
  },
  {
    path: '/',
    element: <Home />
  }
]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);