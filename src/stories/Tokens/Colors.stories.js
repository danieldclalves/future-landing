export default {
  title: 'Tokens/Colors',
  parameters: { backgrounds: { default: 'white' } },
};

const tokens = [
  { name: '--color-orange-primary', value: '#ED5402', label: 'Orange Primary' },
  { name: '--color-orange-dark',    value: '#ED1A02', label: 'Orange Dark' },
  { name: '--color-orange-light',   value: '#F69A67', label: 'Orange Light' },
  { name: '--color-yellow',         value: '#EDDD02', label: 'Yellow' },
  { name: '--color-white',          value: '#ffffff', label: 'White' },
  { name: '--color-dark',           value: '#14141F', label: 'Dark' },
  { name: '--color-dark-muted',     value: 'rgba(20,20,31,0.53)', label: 'Dark Muted' },
];

export const AllColors = () => {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:flex;flex-wrap:wrap;gap:24px;padding:32px;font-family:Inter,sans-serif;';
  wrapper.innerHTML = tokens.map(t => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <div style="width:80px;height:80px;border-radius:12px;background:${t.value};border:1px solid rgba(0,0,0,0.08);"></div>
      <span style="font-size:12px;font-weight:700;color:#14141f;">${t.label}</span>
      <code style="font-size:10px;color:#666;">${t.name}</code>
      <code style="font-size:10px;color:#999;">${t.value}</code>
    </div>
  `).join('');
  return wrapper;
};
