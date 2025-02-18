import type { TypeRoute } from '~/types';

export default [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Menu',
    path: '/menu'
  },
  {
    label: 'Events',
    path: '/events'
  },
  {
    label: 'About us',
    path: '/about-us'
  }
] satisfies TypeRoute[];
