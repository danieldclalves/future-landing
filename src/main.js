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

// Scale the hero stage to fit both viewport width and height.
//
//   scale = min( vw/1440 ,  vh/800 )
//
// • Dividing by 1440 fills the viewport width exactly.
// • Dividing by 800 (< stage height 889) caps the scale so the composition
//   is never taller than ~vh×1.11 — practically, the full floor is visible
//   in the initial viewport on common screens (≥ 900 px tall).
// • On laptops / narrower screens the width side wins and the stage fills
//   the full width as before.
//
// Hero height = 889 × scale  →  the gradient always fades all the way to
// white before the bottom section begins (no harsh colour cut).
//
// The stage uses transform-origin: top center and .hero uses flex centering,
// so when the stage is narrower than the viewport it stays horizontally
// centred and .hero's gradient background fills the side gaps.
//
// Bottom-section side padding scales with the hero so its left margin stays
// aligned with the hero header logo (both use the 60 px gutter of the
// original 1440 px design).
function scaleHero() {
  const stage  = document.querySelector('.hero-stage');
  const hero   = document.querySelector('.hero');
  const bottom = document.querySelector('.bottom');
  if (!stage || !hero) return;

  const scaleW = window.innerWidth  / 1440;
  const scaleH = window.innerHeight / 800;   // 800 < 889 → allows slight overflow
  const scale  = Math.min(scaleW, scaleH);

  stage.style.transform = `scale(${scale})`;

  // Set hero height to the full scaled stage height so the gradient reaches
  // white (#fff) and nothing is vertically clipped.
  hero.style.height = `${889 * scale}px`;

  // Align the bottom section's side padding with the FUTURE text edges.
  //
  // The stage is flex-centred inside .hero, so its visual left edge sits at:
  //   (viewportWidth - 1440 × scale) / 2
  // The FUTURE SVG starts 59 px from the stage's left edge (in stage coords),
  // so its visual left position is:
  //   stageLeft + 59 × scale
  // We use that exact value as both left and right padding so the bottom text
  // aligns flush with the FUTURE lettering on both sides.
  if (bottom) {
    const stageLeft = (window.innerWidth - 1440 * scale) / 2;
    const sidePad   = Math.round(stageLeft + 59 * scale);
    bottom.style.paddingLeft  = `${sidePad}px`;
    bottom.style.paddingRight = `${sidePad}px`;
  }
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
