/**
 * Creates a button component
 * @param {{ label?: string, variant?: 'primary'|'outline'|'ghost', size?: 'sm'|'md'|'lg' }} options
 */
export function createButton({ label = 'Button', variant = 'primary', size = 'md' } = {}) {
  const btn = document.createElement('button');
  btn.textContent = label;

  const base = 'font-family:Inter,sans-serif;font-weight:700;border-radius:100px;cursor:pointer;transition:opacity 0.2s;letter-spacing:1px;border:2px solid;';

  const sizes = {
    sm:  'padding:8px 20px;font-size:14px;',
    md:  'padding:14px 32px;font-size:16px;',
    lg:  'padding:18px 48px;font-size:20px;',
  };

  const variants = {
    primary: 'background:#ED5402;color:#fff;border-color:#ED5402;',
    outline: 'background:transparent;color:#ED5402;border-color:#ED5402;',
    ghost:   'background:transparent;color:#fff;border-color:#fff;',
  };

  btn.style.cssText = base + sizes[size] + variants[variant];
  btn.addEventListener('mouseenter', () => { btn.style.opacity = '0.85'; });
  btn.addEventListener('mouseleave', () => { btn.style.opacity = '1'; });

  return btn;
}
