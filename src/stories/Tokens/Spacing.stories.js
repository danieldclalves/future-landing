export default {
  title: 'Tokens/Spacing',
  parameters: { backgrounds: { default: 'white' } },
};

const tokens = [
  { name: '--space-xs',  value: '4px' },
  { name: '--space-sm',  value: '8px' },
  { name: '--space-md',  value: '16px' },
  { name: '--space-lg',  value: '24px' },
  { name: '--space-xl',  value: '48px' },
  { name: '--space-2xl', value: '60px' },
];

export const AllSpacing = () => {
  const div = document.createElement('div');
  div.style.cssText = 'padding:32px;font-family:Inter,sans-serif;display:flex;flex-direction:column;gap:12px;';
  div.innerHTML = tokens.map(t => `
    <div style="display:flex;align-items:center;gap:16px;">
      <code style="font-size:12px;color:#ED5402;min-width:120px;">${t.name}</code>
      <div style="height:20px;background:#ED5402;border-radius:4px;width:${t.value};"></div>
      <span style="font-size:12px;color:#666;">${t.value}</span>
    </div>
  `).join('');
  return div;
};
