import './styles/main.css';

import logoTopSvg from './assets/logo - blip creative.svg';
import logoVerticalSvg from './assets/logo - blip creative (vertical).svg';
import futureBackSvg from './assets/Future-back.svg';
import futureFrontSvg from './assets/Future-front.svg';
import robotPng from './assets/floating robot+ship.png';
import floorPng from './assets/fixed floor.png';

document.querySelector('#app').innerHTML = `
  <main class="landing">

    <!-- Hero: fixed 1440×889 stage that scales to viewport width -->
    <div class="hero">
      <div class="hero-stage">

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

      </div><!-- /.hero-stage -->
    </div><!-- /.hero -->

    <!-- Bottom content — independent section, standard responsive CSS -->
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

      <!-- Vertical logo -->
      <div class="logo-vertical">
        <img class="logo-vertical__img" src="${logoVerticalSvg}" alt="Blip Creative" />
      </div>
    </section>

  </main>
`;

// Scale the hero stage so it always fits both viewport width and height.
// At 1920×1080 (or any wide+short screen) the height would overflow if we
// scaled by width alone. We take the minimum of the two scales and cap at
// 95 % of the viewport height to keep a small breathing margin at the bottom.
//
// The stage uses `transform-origin: top center` and the .hero wrapper uses
// `display: flex; justify-content: center`, so when the stage is
// height-limited (narrower than viewport), it stays horizontally centred and
// the .hero's gradient background fills any side gaps.
function scaleHero() {
  const stage = document.querySelector('.hero-stage');
  const hero  = document.querySelector('.hero');
  if (!stage || !hero) return;

  const scaleByWidth  = window.innerWidth  / 1440;
  const scaleByHeight = window.innerHeight / 889;
  // Use whichever is smaller — never let the stage overflow the viewport.
  // 0.95 gives a small bottom breathing-room gap.
  const scale = Math.min(scaleByWidth, scaleByHeight * 0.95);

  stage.style.transform = `scale(${scale})`;
  // transform: scale doesn't affect layout flow, so we set hero height manually.
  hero.style.height = `${889 * scale}px`;
}

scaleHero();
window.addEventListener('resize', scaleHero);

// ─── ROBOT FLOAT ANIMATION ────────────────────────────────────────────────
// Uses requestAnimationFrame + Math.cos evaluated every frame (~60fps).
// Produces a perfectly smooth, continuous sinusoidal vertical float —
// no keyframe interpolation segments, no rotation.
//
// Y(t) = (AMPLITUDE/2) · (cos(2πt) − 1)   → 0 at rest, −60px at peak
// ─────────────────────────────────────────────────────────────────────────

const PERIOD    = 3400;  // ms — full up-and-down cycle
const AMPLITUDE = 60;    // px — total vertical travel (0 → −60px)

let rafStart = null;

function animateRobot(timestamp) {
  const robot = document.querySelector('.robot-floating');
  if (!robot) return;

  if (rafStart === null) rafStart = timestamp;
  const elapsed = timestamp - rafStart;

  // Normalised phase: 0 → 1 over one full period
  const t = (elapsed % PERIOD) / PERIOD;
  const phase = 2 * Math.PI * t;

  // Position: cosine cycle starting at rest (0) and rising to −AMPLITUDE
  const y = (AMPLITUDE / 2) * (Math.cos(phase) - 1);

  robot.style.transform = `translateY(${y.toFixed(3)}px)`;

  requestAnimationFrame(animateRobot);
}

requestAnimationFrame(animateRobot);
