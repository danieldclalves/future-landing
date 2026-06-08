import futureBackSvg from '../../assets/Future-back.svg';
import futureFrontSvg from '../../assets/Future-front.svg';
import robotPng from '../../assets/floating robot+ship.png';
import floorPng from '../../assets/fixed floor.png';

export default {
  title: 'Components/HeroScene',
  parameters: { layout: 'fullscreen' },
};

export const Default = () => {
  const div = document.createElement('div');
  div.style.cssText = 'position:relative;width:100%;height:889px;overflow:hidden;background:linear-gradient(to bottom,#ED5402 0%,#ED5402 67.788%,#F69A67 88.462%,#fff 100%);';
  div.innerHTML = `
    <style>
      @keyframes float {
        0%,100% { transform: translateY(0); }
        50%      { transform: translateY(-18px); }
      }
    </style>

    <!-- radial gradients -->
    <div style="position:absolute;left:0;right:0;top:210px;height:679px;background:radial-gradient(ellipse 100% 50% at 50% 50%,rgba(237,26,2,1) 0%,rgba(237,26,2,0) 80%);pointer-events:none;"></div>
    <div style="position:absolute;left:0;right:0;top:558px;height:331px;background:radial-gradient(ellipse 100% 50% at 50% 50%,rgba(237,221,2,0.8) 0%,rgba(237,221,2,0) 80%);pointer-events:none;"></div>

    <!-- FUTURE back -->
    <div style="position:absolute;left:50%;transform:translateX(-50%);top:319px;width:1322px;height:312px;z-index:1;">
      <img src="${futureBackSvg}" style="width:100%;height:100%;object-fit:contain;" />
    </div>

    <!-- Robot scene -->
    <div style="position:absolute;left:50%;transform:translateX(-50%);top:66px;width:860px;z-index:2;display:flex;flex-direction:column;align-items:center;">
      <img src="${robotPng}" style="width:860px;height:609px;object-fit:contain;animation:float 3s ease-in-out infinite;" />
      <img src="${floorPng}" style="width:860px;height:251px;object-fit:contain;margin-top:-60px;" />
    </div>

    <!-- FUTURE front -->
    <div style="position:absolute;left:50%;transform:translateX(-50%);top:320px;width:1322px;height:312px;z-index:3;">
      <img src="${futureFrontSvg}" style="width:100%;height:100%;object-fit:contain;" />
    </div>
  `;
  return div;
};
