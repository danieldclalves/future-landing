import logoSvg from '../assets/logo - blip creative.svg';
import logoVerticalSvg from '../assets/logo - blip creative (vertical).svg';

/**
 * Creates the horizontal top logo
 * @param {{ variant?: 'horizontal'|'vertical', theme?: 'light'|'dark' }} options
 */
export function createLogo({ variant = 'horizontal', theme = 'light' } = {}) {
  const color = theme === 'light' ? '#ffffff' : '#ED5402';

  if (variant === 'vertical') {
    const wrap = document.createElement('div');
    wrap.className = 'logo logo--vertical';
    wrap.innerHTML = `
      <span style="font-family:Inter,sans-serif;font-weight:900;font-size:96px;color:${color};letter-spacing:6px;writing-mode:vertical-rl;transform:rotate(180deg);">BLIP</span>
      <img src="${logoVerticalSvg}" alt="Blip Creative" style="width:70px;height:52px;margin-top:8px;" />
    `;
    return wrap;
  }

  const wrap = document.createElement('div');
  wrap.className = 'logo logo--horizontal';
  wrap.style.cssText = 'display:flex;align-items:center;gap:12px;';
  wrap.innerHTML = `
    <img src="${logoSvg}" alt="Blip Creative logo" style="width:100px;height:74px;" />
    <div style="display:flex;flex-direction:column;">
      <span style="font-family:Inter,sans-serif;font-weight:900;font-size:53.7px;color:${color};letter-spacing:3px;line-height:1;">BLIP</span>
      <span style="font-family:Inter,sans-serif;font-weight:400;font-size:13.6px;color:${color};letter-spacing:2.27px;">BLIP CREATIVE</span>
    </div>
  `;
  return wrap;
}
