export default {
  title: 'Tokens/Typography',
  parameters: { backgrounds: { default: 'white' } },
};

const samples = [
  { label: 'Black / 900',     weight: 900, size: '48px', text: 'BLIP#02' },
  { label: 'Extra Bold / 800',weight: 800, size: '48px', text: 'BLIP' },
  { label: 'Bold / 700',      weight: 700, size: '30px', text: 'Every great brand starts as a blip.' },
  { label: 'Regular / 400',   weight: 400, size: '24px', text: 'Blip Creative is a design studio.' },
  { label: 'Light / 300',     weight: 300, size: '24px', text: '/' },
];

export const FontScale = () => {
  const div = document.createElement('div');
  div.style.cssText = 'padding:32px;font-family:Inter,sans-serif;display:flex;flex-direction:column;gap:24px;';
  div.innerHTML = samples.map(s => `
    <div style="border-bottom:1px solid #eee;padding-bottom:16px;">
      <p style="font-size:11px;color:#999;margin-bottom:6px;">Inter — ${s.label} — ${s.size}</p>
      <p style="font-family:Inter,sans-serif;font-weight:${s.weight};font-size:${s.size};color:#14141f;line-height:1.2;">${s.text}</p>
    </div>
  `).join('');
  return div;
};
