import { createLogo } from '../../components/Logo.js';

export default {
  title: 'Components/Logo',
};

export const HorizontalLight = () => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:32px;background:#ED5402;';
  wrap.appendChild(createLogo({ variant: 'horizontal', theme: 'light' }));
  return wrap;
};

export const VerticalDark = () => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:32px;background:#ffffff;display:flex;justify-content:flex-end;';
  wrap.appendChild(createLogo({ variant: 'vertical', theme: 'dark' }));
  return wrap;
};
