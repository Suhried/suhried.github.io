import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const HomePage = lazy(() => import('../pages/home/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;