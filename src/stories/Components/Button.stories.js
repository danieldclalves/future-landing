import { createButton } from '../../components/Button.js';

export default {
  title: 'Components/Button',
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'select', options: ['primary', 'outline', 'ghost'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Primary = {
  args: { label: 'Get Started', variant: 'primary', size: 'md' },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:32px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;';
    wrap.appendChild(createButton(args));
    return wrap;
  },
};

export const Outline = {
  args: { label: 'Learn More', variant: 'outline', size: 'md' },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:32px;';
    wrap.appendChild(createButton(args));
    return wrap;
  },
};

export const Ghost = {
  args: { label: 'Explore', variant: 'ghost', size: 'md' },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:32px;background:#ED5402;';
    wrap.appendChild(createButton(args));
    return wrap;
  },
};

export const AllSizes = () => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:32px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;';
  ['sm', 'md', 'lg'].forEach(size => wrap.appendChild(createButton({ label: size.toUpperCase(), variant: 'primary', size })));
  return wrap;
};
