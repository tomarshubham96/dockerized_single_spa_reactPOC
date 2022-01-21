import { registerApplication, start } from 'single-spa';

registerApplication(
  'chart1',
  () => import('chart1/Chart1'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'header',
  () => import('header/Header'),
  location => location.pathname.startsWith('/')
);

start();
