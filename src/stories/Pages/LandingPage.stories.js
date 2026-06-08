import logoSvg from '../../assets/logo - blip creative.svg';
import logoVerticalSvg from '../../assets/logo - blip creative (vertical).svg';
import futureBackSvg from '../../assets/Future-back.svg';
import futureFrontSvg from '../../assets/Future-front.svg';
import robotPng from '../../assets/floating robot+ship.png';
import floorPng from '../../assets/fixed floor.png';
import '../../styles/main.css';

export default {
  title: 'Pages/Landing Page',
  parameters: { layout: 'fullscreen' },
};

export const Default = () => {
  const app = document.createElement('div');
  app.innerHTML = `
    <main class="landing">
      <div class="bg-gradient-main"></div>
      <div class="bg-gradient-radial-red"></div>
      <div class="bg-gradient-radial-yellow"></div>

      <header class="header">
        <div class="logo-top">
          <img class="logo-top__icon" src="${logoSvg}" alt="Blip Creative logo" />
          <div class="logo-top__text">
            <span class="logo-top__name">BLIP</span>
            <span class="logo-top__tagline">BLIP CREATIVE</span>
          </div>
        </div>
        <div class="header__dots" aria-hidden="true">
          <span class="header__dot"></span>
          <span class="header__dot"></span>
          <span class="header__dot"></span>
        </div>
      </header>

      <section class="hero">
        <div class="future-back" aria-hidden="true">
          <img src="${futureBackSvg}" alt="" />
        </div>
        <div class="robot-scene">
          <img class="robot-floating" src="${robotPng}" alt="Robot in spaceship" />
          <img class="robot-floor" src="${floorPng}" alt="" aria-hidden="true" />
        </div>
        <div class="future-front" aria-hidden="true">
          <img src="${futureFrontSvg}" alt="FUTURE" />
        </div>
      </section>

      <section class="bottom">
        <div class="bottom__content">
          <div class="bottom__series">
            <span class="bottom__blip">BLIP</span>
            <span class="bottom__number">#02</span>
            <span class="bottom__slash">/</span>
            <span class="bottom__label">Creative Series</span>
          </div>
          <p class="bottom__tagline">Every great brand starts as a blip on someone's radar.</p>
          <p class="bottom__description">Blip Creative is a design studio that turns curious minds into bold digital experiences. We make design feel alive for brands, products, and the people behind them.</p>
        </div>
        <div class="logo-vertical">
          <span class="logo-vertical__text">BLIP</span>
          <img class="logo-vertical__icon" src="${logoVerticalSvg}" alt="Blip Creative" />
        </div>
      </section>
    </main>
  `;
  return app;
};
