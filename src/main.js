import './styles/main.css';

import logoTopSvg from './assets/logo - blip creative.svg';
import logoVerticalSvg from './assets/logo - blip creative (vertical).svg';
import futureBackSvg from './assets/Future-back.svg';
import futureFrontSvg from './assets/Future-front.svg';
import robotPng from './assets/floating robot+ship.png';
import floorPng from './assets/fixed floor.png';

document.querySelector('#app').innerHTML = `
  <main class="landing">

    <!-- Background layers -->
    <div class="bg-gradient-main"></div>
    <div class="bg-gradient-radial-red"></div>
    <div class="bg-gradient-radial-yellow"></div>

    <!-- Header -->
    <header class="header">
      <img class="logo-top__img" src="${logoTopSvg}" alt="Blip Creative logo" />
      <div class="header__dots" aria-hidden="true">
        <span class="header__dot"></span>
        <span class="header__dot"></span>
        <span class="header__dot"></span>
      </div>
    </header>

    <!-- Hero scene -->
    <section class="hero" aria-label="Hero">

      <!-- FUTURE — behind the robot (filled) -->
      <div class="future-back" aria-hidden="true">
        <img src="${futureBackSvg}" alt="" />
      </div>

      <!-- Robot + ship floating -->
      <div class="robot-scene">
        <img class="robot-floating" src="${robotPng}" alt="Robot in spaceship" />
        <img class="robot-floor" src="${floorPng}" alt="" aria-hidden="true" />
      </div>

      <!-- FUTURE — in front of the robot (outline only) -->
      <div class="future-front" aria-hidden="true">
        <img src="${futureFrontSvg}" alt="FUTURE" />
      </div>

    </section>

    <!-- Bottom content -->
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

      <!-- Vertical logo — bottom right -->
      <div class="logo-vertical">
        <img class="logo-vertical__img" src="${logoVerticalSvg}" alt="Blip Creative" />
      </div>
    </section>

  </main>
`;
