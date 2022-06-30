import { lazy } from 'solid-js';

import Home from './pages/home';
import AboutData from './pages/about.data';
import AboutPage from './pages/about';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: AboutPage,
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
