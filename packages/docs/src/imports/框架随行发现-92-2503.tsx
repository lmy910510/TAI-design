// 框架-随行发现组件 - 修复拖拽事件处理
import svgPaths from "./svg-eewbnvlafu";
import imgScreenshot20250709100049TencentMap2 from "figma:asset/c6f5ea1bdf8b78d93ed7d69549cee03f3a9db33e.png";
import imgFrame2119902806 from "figma:asset/d022fb6e7c1734b7b2b89f51cd730eb34f856ff9.png";
import imgFrame2119902807 from "figma:asset/b248a3f65d943ea040365a2b7facb32544df362f.png";
import imgFrame2119902808 from "figma:asset/5807c9174ac75f03ac3220f6ebff82d238edfb99.png";
import imgRectangle1329139057 from "figma:asset/eebc0c1769dba6e049e4c85614fe42f992588d60.png";
import imgRectangle1329139058 from "figma:asset/2a39d74b94904cde3556c1ad04a21dd634694cc3.png";
import imgRectangle1329139055 from "figma:asset/9baecf423a05301ef1360f2732122ff69fd06726.png";
import imgRectangle1329139056 from "figma:asset/3e22f76f30f52aec896ccfcd01f0a8d53a48979d.png";
import imgRectangle1329139059 from "figma:asset/504caecd3dd1a8d597f6626b6dc62213eca728ea.png";
import img from "figma:asset/9ac2ad4ee187de007ea73448a010e1a2b7f5c485.png";
import { imgScreenshot20250709100049TencentMap1 } from "./svg-qngtb";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

function MaskGroup() {
  return (
    <div className="absolute contents left-[852px] top-0" data-name="Mask group">
      <div className="absolute h-[929.793px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[793.504px_0px] mask-size-[900px_440px] right-[-47.97px] top-0 w-[1741.471px]" data-name="Screenshot_20250709_100049_Tencent Map 1" style={{ maskImage: `url('${imgScreenshot20250709100049TencentMap1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[274.54%] left-[42.39%] max-w-none top-[-182.87%] w-[67.46%]" src={imgScreenshot20250709100049TencentMap2} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[98px] right-[232.75px] top-[118px] w-[96.326px]">
      <div className="absolute inset-[-7.42%_-10.62%_-20.88%_-10.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.79 125.731">
          <g id="Group 2036084708">
            <g filter="url(#filter0_f_92_2667)" id="Ellipse 23891" opacity="0.44">
              <ellipse cx="57.7455" cy="56.925" fill="var(--fill-0, #90B7FF)" rx="32.6475" ry="33.2148" style={{ fill: "color(display-p3 0.5647 0.7176 1.0000)", fillOpacity: "1" }} />
            </g>
            <g filter="url(#filter1_df_92_2667)" id="Ellipse 23892">
              <path d={svgPaths.p19f43a00} shapeRendering="crispEdges" stroke="url(#paint0_linear_92_2667)" strokeWidth="1.01031" />
            </g>
            <g filter="url(#filter2_df_92_2667)" id="Ellipse 23894">
              <path d={svgPaths.p1ffc2e00} shapeRendering="crispEdges" stroke="url(#paint1_linear_92_2667)" strokeWidth="1.01031" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="113.85" id="filter0_f_92_2667" width="112.715" x="1.3878" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_92_2667" stdDeviation="11.8551" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="87.3464" id="filter1_df_92_2667" width="85.0124" x="15.8877" y="22.2225">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="10.232" />
              <feGaussianBlur stdDeviation="5.11599" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.015596 0 0 0 0 0.419173 0 0 0 0 0.946928 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_92_2667" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_92_2667" mode="normal" result="shape" />
              <feGaussianBlur result="effect2_foregroundBlur_92_2667" stdDeviation="0.606186" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="119.676" id="filter2_df_92_2667" width="116.79" x="0" y="6.0545">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="10.232" />
              <feGaussianBlur stdDeviation="5.11599" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.015596 0 0 0 0 0.419173 0 0 0 0 0.946928 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_92_2667" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_92_2667" mode="normal" result="shape" />
              <feGaussianBlur result="effect2_foregroundBlur_92_2667" stdDeviation="0.606186" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_92_2667" x1="58.3939" x2="58.3939" y1="23.4348" y2="89.1049">
              <stop stopColor="#8DC8FF" style={{ stopColor: "color(display-p3 0.5529 0.7843 1.0000)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#C4B2FF" style={{ stopColor: "color(display-p3 0.7686 0.6980 1.0000)", stopOpacity: "1" }} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_92_2667" x1="58.3951" x2="58.3951" y1="7.26687" y2="105.267">
              <stop stopColor="#8DC8FF" style={{ stopColor: "color(display-p3 0.5529 0.7843 1.0000)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#C4B2FF" style={{ stopColor: "color(display-p3 0.7686 0.6980 1.0000)", stopOpacity: "1" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[46.311px] relative w-[45.713px]" data-name="自车标">
      <div className="absolute inset-[-34.37%_-34.82%_-34.37%_-34.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.5429 78.1407">
          <g id="èªè½¦æ ">
            <g filter="url(#filter0_d_92_2601)" id="Ellipse 134" opacity="0.9">
              <ellipse cx="38.7715" cy="39.0703" fill="var(--fill-0, white)" fillOpacity="0.95" rx="22.8565" ry="23.1554" shapeRendering="crispEdges" style={{ fill: "white", fillOpacity: "0.95" }} />
              <path d={svgPaths.p23ffcf80} shapeRendering="crispEdges" stroke="var(--stroke-0, #0085FF)" strokeOpacity="0.35" strokeWidth="0.312057" style={{ stroke: "color(display-p3 0.0000 0.5200 1.0000)", strokeOpacity: "0.35" }} />
            </g>
            <g id="Group 26">
              <path d={svgPaths.p1efc3800} fill="var(--fill-0, #0051D0)" id="Polygon 8" style={{ fill: "color(display-p3 0.0000 0.3164 0.8167)", fillOpacity: "1" }} />
              <path d={svgPaths.p3e96b100} fill="url(#paint0_linear_92_2601)" id="Polygon 9" />
            </g>
            <g id="Intersect" opacity="0.2" />
            <path d={svgPaths.p8a6ec40} fill="var(--fill-0, white)" id="Rectangle 732" opacity="0.2" style={{ fill: "white", fillOpacity: "1" }} />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78.1407" id="filter0_d_92_2601" width="77.5429" x="3.57628e-07" y="2.68221e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="7.80143" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.64 0 0 0 0 1 0 0 0 0.4 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_92_2601" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_92_2601" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_92_2601" x1="39.9646" x2="39.9585" y1="42.349" y2="22.2125">
              <stop stopColor="#0063FF" style={{ stopColor: "color(display-p3 0.0000 0.3874 1.0000)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#1882FF" style={{ stopColor: "color(display-p3 0.0958 0.5118 1.0000)", stopOpacity: "1" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents right-[232.75px] top-[118px]">
      <Group6 />
      <div className="absolute flex h-[59.733px] items-center justify-center right-[251.62px] top-[137.08px] w-[58.713px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-20.85deg] skew-x-[-0.65deg]">
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[852px] top-0">
      <div className="absolute h-[440px] left-[852px] top-0 w-[900px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 900 440\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-61.95 38.7 -58.909 -94.299 619.5 53)\\'><stop stop-color=\\'rgba(203,238,255,0)\\' offset=\\'0.06\\'/><stop stop-color=\\'rgba(233,245,252,1)\\' offset=\\'0.60764\\'/><stop stop-color=\\'rgba(233,245,252,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute bg-gradient-to-b from-[rgba(205,238,253,0)] h-[295px] left-[862px] to-[#e9f5fc] top-[145px] w-[890px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents right-0 top-0">
      <MaskGroup />
      <Group8 />
      <Group11 />
    </div>
  );
}

function Component4() {
  return (
    <div className="col-1 content-stretch flex items-end ml-[68px] mt-0 relative row-1" data-name="场景化问候语">
      <div className="font-['HYXuanSong:75S',sans-serif] leading-[80px] not-italic relative shrink-0 text-[#232a3a] text-[56px] whitespace-nowrap">
        <p className="mb-0">秋色正好</p>
        <p>{`去这些地方兜兜风 `}</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="大标题">
      <Component4 />
      <p className="col-1 font-['Noto_Sans:SemiCondensed',sans-serif] font-normal leading-[80px] ml-0 mt-[4px] relative row-1 text-[56px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 87.5" }}>
        🍂
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex items-end left-[48px] top-[44px] w-[1140px]" data-name="标题">
      <Component3 />
    </div>
  );
}

function Ai1() {
  return <div className="-translate-x-1/2 absolute blur-[24.912px] bottom-[56px] h-[98px] left-[calc(50%-10.5px)] opacity-35 rounded-[100px] w-[697px]" data-name="AI对话容器" style={{ backgroundImage: "linear-gradient(90deg, rgba(184, 150, 255, 0) 0%, rgba(178, 142, 255, 0) 50.608%, rgb(173, 134, 255) 101.22%), linear-gradient(-90deg, rgba(36, 255, 197, 0) 0%, rgba(36, 255, 197, 0) 50%, rgb(36, 255, 197) 100%), linear-gradient(rgb(100, 214, 255) 0%, rgb(103, 131, 255) 100%)" }} />;
}

function Ai() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[56px] contents left-[calc(50%-10.5px)]" data-name="AI对话入口">
      <Ai1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[31.647px] relative shrink-0 w-[77.359px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.3594 31.6475">
        <g id="Frame 2147229106">
          <path d={svgPaths.p26308f80} fill="url(#paint0_linear_92_2641)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_92_2641" x1="-1.18188" x2="79.9427" y1="-1.78017" y2="7.80487">
            <stop stopColor="#A35DFF" style={{ stopColor: "color(display-p3 0.6395 0.3638 1.0000)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#3BBAFF" style={{ stopColor: "color(display-p3 0.2299 0.7305 1.0000)", stopOpacity: "1" }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Ai3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="AI对话内容">
      <Frame15 />
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#697181] text-[28px] whitespace-nowrap">“适合下班后和同事聚餐的地方，4个人”</p>
    </div>
  );
}

function Ai2() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[56px] content-stretch flex flex-col items-start left-[calc(50%-10.32px)] px-[40px] py-[28px] rounded-[100px] shadow-[0px_0px_100px_0px_rgba(169,182,191,0.25)]" data-name="AI对话入口">
      <Ai3 />
    </div>
  );
}

function Group9() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[56px] contents left-[calc(50%-10.5px)]">
      <Ai />
      <Ai2 />
    </div>
  );
}

function Component5() {
  return <div className="absolute left-[181.19px] size-[52.2px] top-[1.35px]" data-name="机位" />;
}

function Component6() {
  return <div className="absolute left-[116.71px] size-[52.2px] top-[83.71px]" data-name="机位" />;
}

function Component8() {
  return (
    <div className="absolute bottom-[1.9px] left-[18.24px] size-[15.721px]" data-name="端点">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7215 15.7214">
        <g id="ç«¯ç¹">
          <g id="Ellipse 135">
            <circle cx="7.8607" cy="7.8607" fill="var(--fill-0, white)" r="7.8607" style={{ fill: "white", fillOpacity: "1" }} />
            <circle cx="7.8607" cy="7.8607" r="7.01848" stroke="var(--stroke-0, black)" strokeOpacity="0.9" strokeWidth="1.68444" style={{ stroke: "black", strokeOpacity: "0.9" }} />
          </g>
          <circle cx="2.80739" cy="2.80739" fill="var(--fill-0, #60C6FF)" id="Ellipse 136" r="2.80739" style={{ fill: "color(display-p3 0.3765 0.7765 1.0000)", fillOpacity: "1" }} transform="matrix(1 0 0 -1 5.05421 10.6638)" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[8.75px] pointer-events-none rounded-[10.481px] size-[34.881px] top-[4.28px]">
      <div aria-hidden="true" className="absolute inset-0 rounded-[10.481px]">
        <div className="absolute bg-[#a9a9a9] inset-0 rounded-[10.481px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[10.481px] size-full" src={imgFrame2119902806} />
        <img alt="" className="absolute max-w-none object-cover rounded-[10.481px] size-full" src={imgFrame2119902807} />
      </div>
      <div aria-hidden="true" className="absolute border-[2.318px] border-solid border-white inset-[-2.318px] rounded-[12.799px] shadow-[0px_3.091px_7.727px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Component7Search() {
  return (
    <div className="relative shrink-0 size-[52.2px]" data-name="7_search">
      <Component8 />
      <div className="absolute left-[21.41px] size-[9.379px] top-[14.77px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.37937 9.37937">
          <circle cx="4.68969" cy="4.68969" fill="var(--fill-0, white)" id="Ellipse 117993" r="4.68969" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[44.77px] top-[64.81px]" data-name="机位">
      <Component7Search />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bottom-[1.9px] left-[18.23px] size-[15.721px]" data-name="端点">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7216 15.7214">
        <g id="ç«¯ç¹">
          <g id="Ellipse 135">
            <circle cx="7.8609" cy="7.8607" fill="var(--fill-0, white)" r="7.8607" style={{ fill: "white", fillOpacity: "1" }} />
            <circle cx="7.8609" cy="7.8607" r="7.01848" stroke="var(--stroke-0, black)" strokeOpacity="0.9" strokeWidth="1.68444" style={{ stroke: "black", strokeOpacity: "0.9" }} />
          </g>
          <circle cx="2.80739" cy="2.80739" fill="var(--fill-0, #60C6FF)" id="Ellipse 136" r="2.80739" style={{ fill: "color(display-p3 0.3765 0.7765 1.0000)", fillOpacity: "1" }} transform="matrix(1 0 0 -1 5.05874 10.6646)" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.01px)] top-[5.68px]">
      <div className="absolute h-[36.056px] left-[10.37px] top-[5.68px] w-[31.442px]" data-name="水滴Marker">
        <div className="absolute inset-[-2.42%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.1892 37.8028">
            <g id="æ°´æ»´Marker">
              <g filter="url(#filter0_i_92_2594)">
                <path d={svgPaths.p3b845800} fill="url(#paint0_linear_92_2594)" />
              </g>
              <path d={svgPaths.p33421f30} fill="var(--stroke-0, white)" style={{ fill: "white", fillOpacity: "1" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.461" id="filter0_i_92_2594" width="37.8474" x="-4.65823" y="-4.65823">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-4.65823" dy="-4.65823" />
                <feGaussianBlur stdDeviation="4.65823" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" />
                <feBlend in2="shape" mode="overlay" result="effect1_innerShadow_92_2594" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_92_2594" x1="16.3629" x2="16.3629" y1="0.53769" y2="36.9295">
                <stop stopColor="#52A8FF" style={{ stopColor: "color(display-p3 0.3200 0.6600 1.0000)", stopOpacity: "1" }} />
                <stop offset="1" stopColor="#61CAFF" style={{ stopColor: "color(display-p3 0.3800 0.7933 1.0000)", stopOpacity: "1" }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component7Search1() {
  return (
    <div className="relative shrink-0 size-[52.2px]" data-name="7_search">
      <Component10 />
      <Group4 />
      <div className="absolute left-[20.87px] size-[10.481px] top-[16.83px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4809 10.4809">
          <circle cx="5.24046" cy="5.24046" fill="var(--fill-0, white)" id="Ellipse 117993" r="5.24046" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[0.03px] top-[135.92px]" data-name="机位">
      <Component7Search1 />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bottom-[0.17px] left-[18.24px] size-[15.721px]" data-name="端点">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7216 15.7214">
        <g id="ç«¯ç¹">
          <g id="Ellipse 135">
            <circle cx="7.86089" cy="7.86071" fill="var(--fill-0, white)" r="7.8607" style={{ fill: "white", fillOpacity: "1" }} />
            <circle cx="7.86089" cy="7.86071" r="7.01848" stroke="var(--stroke-0, black)" strokeOpacity="0.9" strokeWidth="1.68444" style={{ stroke: "black", strokeOpacity: "0.9" }} />
          </g>
          <circle cx="2.80739" cy="2.80739" fill="var(--fill-0, #60C6FF)" id="Ellipse 136" r="2.80739" style={{ fill: "color(display-p3 0.3765 0.7765 1.0000)", fillOpacity: "1" }} transform="matrix(1 0 0 -1 5.05289 10.6725)" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[9.45px] pointer-events-none rounded-[10.481px] size-[34.881px] top-[5.08px]">
      <div aria-hidden="true" className="absolute inset-0 rounded-[10.481px]">
        <div className="absolute bg-[#a9a9a9] inset-0 rounded-[10.481px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[10.481px] size-full" src={imgFrame2119902806} />
        <img alt="" className="absolute max-w-none object-cover rounded-[10.481px] size-full" src={imgFrame2119902807} />
        <img alt="" className="absolute max-w-none object-cover rounded-[10.481px] size-full" src={imgFrame2119902808} />
      </div>
      <div aria-hidden="true" className="absolute border-[2.318px] border-solid border-white inset-[-2.318px] rounded-[12.799px] shadow-[0px_3.091px_7.727px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[9.45px] top-[5.08px]">
      <Frame1 />
    </div>
  );
}

function Component7Search2() {
  return (
    <div className="absolute left-[151.46px] size-[52.2px] top-[79.59px]" data-name="7_search">
      <Component11 />
      <Group5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[189.405px] left-[61.09px] overflow-clip rounded-[27.945px] top-[25.5px] w-[234.427px]">
      <div className="absolute h-[85.164px] left-[26.13px] top-[94.58px] w-[151.862px]">
        <div className="absolute inset-[-3.21%_-0.41%_-3.88%_-1.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.343 91.2003">
            <path d={svgPaths.p13de2f00} id="Vector 149687" stroke="var(--stroke-0, #2CB9FF)" strokeWidth="8.73411" style={{ stroke: "color(display-p3 0.1712 0.7237 1.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute h-[85.164px] left-[26.13px] top-[94.58px] w-[151.862px]">
        <div className="absolute inset-[-1.15%_-0.25%_-2.33%_-1.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.951 88.1303">
            <path d={svgPaths.p3d8eaec0} id="Vector 149688" stroke="var(--stroke-0, #7BD3FF)" strokeWidth="5.24046" style={{ stroke: "color(display-p3 0.4833 0.8278 1.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <Component5 />
      <Component6 />
      <div className="absolute flex h-[12.676px] items-center justify-center left-[66.8px] top-[101.61px] w-[10.414px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-82.9deg]">
          <div className="h-[9.045px] relative w-[11.648px]" data-name="Fill 14备份 13">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6478 9.04467">
              <path clipRule="evenodd" d={svgPaths.p335eab00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 14å¤ä»½ 13" style={{ fill: "white", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <Component7 />
      <Component9 />
      <Component7Search2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[272.504px] relative rounded-[28.8px] shrink-0">
      <div className="content-stretch flex gap-[8.734px] h-full items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[20.091px] shrink-0 size-[334.516px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20.091px]">
            <img alt="" className="absolute h-[320.26%] left-0 max-w-none top-[-122.7%] w-full" src={imgScreenshot20250709100049TencentMap2} />
          </div>
        </div>
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.9px] border-[rgba(75,82,107,0.08)] border-solid inset-0 pointer-events-none rounded-[28.8px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10.481px] items-center relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.757px] whitespace-nowrap">☀️晴天适宜</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.757px] whitespace-nowrap">新开业</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.757px] whitespace-nowrap">有充电桩</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10.481px] items-start relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232a3a] text-[30.6px] w-[335.39px]">偶尔放空，在匆忙的城市享受阳光</p>
      <Frame19 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[117.037px] items-start justify-between relative shrink-0 w-[334.516px]">
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="opacity-60 relative shrink-0 size-[20.462px]">
        <div className="absolute h-[17.992px] left-[1.68px] top-[1.23px] w-[17.506px]" data-name="Vector">
          <div className="absolute inset-[9.1%_9.35%_9.99%_9.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2312 14.557">
              <path d={svgPaths.p2071cc00} fill="var(--fill-0, #697181)" id="Vector" style={{ fill: "color(display-p3 0.4118 0.4431 0.5059)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#444c5c] text-[19.215px] whitespace-nowrap">“我家附近有没有类似的店”</p>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(52,119,178,0.08)] items-center justify-center px-[13.975px] py-[17.468px] relative rounded-[87.341px] shrink-0 to-[rgba(123,137,188,0.08)] w-[334.516px]" data-name="暂停">
      <div aria-hidden="true" className="absolute border-[0.853px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[87.341px]" />
      <Frame17 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[17.468px] items-end relative shrink-0 w-full">
      <Frame18 />
      <Component13 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[334.516px]" data-name="内容区">
      <Frame21 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.08%_0.03%_-0.08%_-0.03%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4682 17.4682">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1eba9700} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function RemixIconsFillMapMapPin2Fill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[17.468px]" data-name="remix-icons/fill/map/map-pin-2-fill">
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute backdrop-blur-[5.651px] bg-[rgba(46,54,73,0.4)] content-stretch flex gap-[6.987px] items-center left-[26.27px] px-[10.481px] py-[6.217px] rounded-[87.341px] top-[26.94px]">
      <RemixIconsFillMapMapPin2Fill />
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[19.215px] text-white whitespace-nowrap">距你1.1km</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.6)] gap-[17.468px] items-start justify-center opacity-80 p-[20.962px] relative rounded-[46.801px] to-[rgba(247,249,250,0.6)]">
      <div aria-hidden="true" className="absolute border-[1.8px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[46.801px]" />
      <Frame33 />
      <Component12 />
      <Frame2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0.03%_0.04%_-0.03%_-0.04%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.468 17.468">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p2e55c600} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function RemixIconsFillMapMapPin2Fill1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[17.468px]" data-name="remix-icons/fill/map/map-pin-2-fill">
      <Group1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute backdrop-blur-[5.651px] bg-[rgba(46,54,73,0.4)] content-stretch flex gap-[6.987px] items-center left-[10.48px] px-[10.481px] py-[6.217px] rounded-[87.34px] top-[10.48px]">
      <RemixIconsFillMapMapPin2Fill1 />
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[19.215px] text-white whitespace-nowrap">距你1.1km</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8.734px] h-[272.501px] items-center overflow-clip relative rounded-[27.949px] shrink-0">
      <div className="h-[461.7px] relative shrink-0 w-[333.9px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.31%] left-[-6.11%] max-w-none top-[-17.42%] w-[115%]" src={imgRectangle1329139057} />
        </div>
      </div>
      <Frame3 />
      <div className="absolute h-[270px] left-[0.4px] top-[1.53px] w-[333.9px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10.231px] items-center relative shrink-0">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.756px] whitespace-nowrap">👍精选演出</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.756px] whitespace-nowrap">松弛感</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10.481px] items-start relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232a3a] text-[30.6px] w-[335.386px]">偶尔放空，在匆忙的城市享受阳光</p>
      <Frame23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-[117.036px] items-start justify-between relative shrink-0 w-[334.513px]">
      <Frame7 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="opacity-60 relative shrink-0 size-[20.461px]">
        <div className="absolute h-[17.992px] left-[1.68px] top-[1.23px] w-[17.506px]" data-name="Vector">
          <div className="absolute inset-[9.1%_9.35%_9.99%_9.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2311 14.5568">
              <path d={svgPaths.p36da1a70} fill="var(--fill-0, #697181)" id="Vector" style={{ fill: "color(display-p3 0.4118 0.4431 0.5059)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#444c5c] text-[19.215px] whitespace-nowrap">“不要法餐厅，换一个吃夜宵的”</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(52,119,178,0.08)] items-center justify-center px-[13.974px] py-[17.468px] relative rounded-[87.34px] shrink-0 to-[rgba(123,137,188,0.08)] w-[334.513px]" data-name="暂停">
      <div aria-hidden="true" className="absolute border-[0.853px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[87.34px]" />
      <Frame24 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[17.468px] items-end relative shrink-0 w-full">
      <Frame20 />
      <Component15 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[334.513px]" data-name="内容区">
      <Frame22 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.75)] gap-[17.468px] items-start justify-center p-[20.962px] relative rounded-[46.8px] to-[rgba(247,249,250,0.75)]">
      <div aria-hidden="true" className="absolute border-[1.8px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[46.8px]" />
      <Frame34 />
      <Component14 />
    </div>
  );
}

function Component17() {
  return (
    <div className="mr-[-14.4px] relative rounded-[10.8px] shrink-0" data-name="图片">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[10.8px] shrink-0 size-[45px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10.8px] size-full" src={imgRectangle1329139055} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[10.8px]" />
    </div>
  );
}

function Component18() {
  return (
    <div className="mr-[-14.4px] relative rounded-[10.8px] shrink-0" data-name="图片">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[10.8px] shrink-0 size-[45px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10.8px] size-full" src={imgRectangle1329139056} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[10.8px]" />
    </div>
  );
}

function Component19() {
  return (
    <div className="mr-[-14.4px] relative rounded-[10.8px] shrink-0" data-name="图片">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[10.8px] shrink-0 size-[45px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10.8px] size-full" src={imgRectangle1329139059} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[10.8px]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute content-stretch flex items-center left-[15.96px] pr-[14.4px] top-[210.6px]" data-name="图片合集">
      <Component17 />
      <Component18 />
      <Component19 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0.03%_0.02%_-0.03%_-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.468 17.468">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p1db99a00} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function RemixIconsFillMapMapPin2Fill2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[17.468px]" data-name="remix-icons/fill/map/map-pin-2-fill">
      <Group2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute backdrop-blur-[5.651px] bg-[rgba(46,54,73,0.4)] content-stretch flex gap-[6.987px] items-center left-[10.48px] px-[10.481px] py-[6.217px] rounded-[87.34px] top-[10.49px]">
      <RemixIconsFillMapMapPin2Fill2 />
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[19.215px] text-white whitespace-nowrap">距你1.1km</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8.734px] h-[272.501px] items-center overflow-clip relative rounded-[27.949px] shrink-0">
      <div className="relative rounded-[32.4px] shrink-0 size-[334.513px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.4px] size-full" src={imgRectangle1329139058} />
      </div>
      <Component16 />
      <Frame4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10.231px] items-center relative shrink-0">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18px] whitespace-nowrap">🛍️商圈内</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18px] whitespace-nowrap">宠物友好</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18px] whitespace-nowrap">主题玩法</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10.481px] items-start relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232a3a] text-[30.6px] w-[335.386px]">复古回潮：探店南头古城5家怀旧风小店</p>
      <Frame27 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col h-[117.036px] items-start justify-between relative shrink-0 w-[334.513px]">
      <Frame8 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="opacity-60 relative shrink-0 size-[20.461px]">
        <div className="absolute h-[17.992px] left-[1.68px] top-[1.23px] w-[17.506px]" data-name="Vector">
          <div className="absolute inset-[9.1%_9.35%_9.99%_9.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2311 14.5568">
              <path d={svgPaths.p36da1a70} fill="var(--fill-0, #697181)" id="Vector" style={{ fill: "color(display-p3 0.4118 0.4431 0.5059)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#444c5c] text-[19.215px] whitespace-nowrap">“我家附近有没有类似的店”</p>
    </div>
  );
}

function Component21() {
  return (
    <div className="backdrop-blur-[8.526px] bg-gradient-to-r content-stretch flex from-[rgba(52,119,178,0.08)] items-center justify-center px-[13.974px] py-[17.468px] relative rounded-[87.34px] shrink-0 to-[rgba(123,137,188,0.08)] w-[334.513px]" data-name="暂停">
      <div aria-hidden="true" className="absolute border-[0.853px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[87.34px]" />
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[17.468px] items-end relative shrink-0 w-full">
      <Frame26 />
      <Component21 />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[334.513px]" data-name="内容区">
      <Frame25 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.75)] gap-[17.468px] items-start justify-center p-[20.962px] relative rounded-[46.8px] to-[rgba(247,249,250,0.75)]">
      <div aria-hidden="true" className="absolute border-[1.8px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[46.8px]" />
      <Frame36 />
      <Component20 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0.05%_-0.04%_-0.05%_0.04%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4682 17.4682">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.pcd50200} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function RemixIconsFillMapMapPin2Fill3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[17.468px]" data-name="remix-icons/fill/map/map-pin-2-fill">
      <Group3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute backdrop-blur-[5.651px] bg-[rgba(46,54,73,0.4)] content-stretch flex gap-[6.987px] items-center left-[10.48px] px-[10.481px] py-[6.217px] rounded-[87.341px] top-[10.49px]">
      <RemixIconsFillMapMapPin2Fill3 />
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[19.215px] text-white whitespace-nowrap">距你1.1km</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8.734px] h-[272.504px] items-center overflow-clip relative rounded-[27.949px] shrink-0">
      <div className="relative rounded-[32.4px] shrink-0 size-[334.516px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.4px] size-full" src={imgRectangle1329139058} />
      </div>
      <Frame5 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[10.231px] items-center relative shrink-0">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.757px] whitespace-nowrap">🛍️商圈内</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.757px] whitespace-nowrap">宠物友好</p>
      <div className="bg-[#444c5c] h-[21.314px] opacity-20 shrink-0 w-[0.853px]" />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[#444c5c] text-[18.757px] whitespace-nowrap">主题玩法</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10.481px] items-start relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232a3a] text-[30.6px] w-[335.39px]">复古回潮：探店南头古城5家怀旧风小店</p>
      <Frame31 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col h-[117.037px] items-start justify-between relative shrink-0 w-[334.516px]">
      <Frame9 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="opacity-60 relative shrink-0 size-[20.462px]">
        <div className="absolute h-[17.992px] left-[1.68px] top-[1.23px] w-[17.506px]" data-name="Vector">
          <div className="absolute inset-[9.1%_9.35%_9.99%_9.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2312 14.557">
              <path d={svgPaths.p2071cc00} fill="var(--fill-0, #697181)" id="Vector" style={{ fill: "color(display-p3 0.4118 0.4431 0.5059)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#444c5c] text-[19.215px] whitespace-nowrap">“我家附近有没有类似的店”</p>
    </div>
  );
}

function Component23() {
  return (
    <div className="backdrop-blur-[8.526px] bg-gradient-to-r content-stretch flex from-[rgba(52,119,178,0.08)] items-center justify-center px-[13.975px] py-[17.468px] relative rounded-[87.341px] shrink-0 to-[rgba(123,137,188,0.08)] w-[334.516px]" data-name="暂停">
      <div aria-hidden="true" className="absolute border-[0.853px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[87.341px]" />
      <Frame32 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[17.468px] items-end relative shrink-0 w-full">
      <Frame30 />
      <Component23 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[334.516px]" data-name="内容区">
      <Frame29 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.6)] gap-[17.468px] items-start justify-center opacity-80 p-[20.962px] relative rounded-[46.801px] to-[rgba(247,249,250,0.6)]">
      <div aria-hidden="true" className="absolute border-[1.8px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[46.801px]" />
      <Frame39 />
      <Component22 />
    </div>
  );
}

function Ic() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic_位置">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ic_ä½ç½®">
          <g id="Vector" />
          <path d={svgPaths.p10a83080} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="距离">
      <Ic />
      <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">距你1.1km</p>
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute backdrop-blur-[6.279px] bg-[rgba(46,54,73,0.4)] content-stretch flex items-center justify-between left-[12px] px-[12px] py-[8px] rounded-[100px] top-[12px] w-[162px]" data-name="距离标签">
      <Component26 />
    </div>
  );
}

function Component27() {
  return (
    <div className="mr-[-16px] relative rounded-[12px] shrink-0" data-name="图片">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[12px] shrink-0 size-[50px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle1329139055} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component28() {
  return (
    <div className="mr-[-16px] relative rounded-[12px] shrink-0" data-name="图片">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[12px] shrink-0 size-[50px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle1329139056} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component29() {
  return (
    <div className="mr-[-16px] relative rounded-[12px] shrink-0" data-name="图片">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="relative rounded-[12px] shrink-0 size-[50px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle1329139059} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex h-[304px] items-center justify-between overflow-clip relative rounded-[31.054px] shrink-0 w-full" data-name="头图">
      <div className="h-[608px] relative shrink-0 w-[372px]" data-name="图片">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.93%] left-0 max-w-none top-[0.03%] w-full" src={img} />
        </div>
      </div>
      <Component25 />
      <div className="absolute content-stretch flex items-center left-[18px] pr-[16px] top-[236px]" data-name="缩略图">
        <Component27 />
        <Component28 />
        <Component29 />
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_S_Chinese:Medium',sans-serif] gap-[12px] items-center justify-center leading-[34px] not-italic relative shrink-0 text-[#232a3a] text-[34px] text-ellipsis w-full" data-name="玩法标题">
      <p className="overflow-hidden relative shrink-0 w-full">偶尔放空，在匆忙的城</p>
      <p className="overflow-hidden relative shrink-0 w-full">市享受阳光</p>
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="玩法标签">
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#686f7c] text-[22px] whitespace-nowrap">👍精选演出</p>
      <div className="bg-[#444c5c] h-[20px] opacity-20 shrink-0 w-px" data-name="分割线" />
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#686f7c] text-[22px] whitespace-nowrap">松弛感</p>
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="玩法标题">
      <Component32 />
      <Component33 />
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="提示内容">
      <div className="opacity-60 relative shrink-0 size-[22px]" data-name="ic_ai">
        <div className="absolute h-[19.345px] left-[1.8px] top-[1.33px] w-[18.822px]" data-name="Vector">
          <div className="absolute inset-[9.1%_9.35%_9.99%_9.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3012 15.6514">
              <path d={svgPaths.p20b6ee00} fill="var(--fill-0, #828997)" id="Vector" style={{ fill: "color(display-p3 0.5095 0.5365 0.5905)", fillOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#444c5c] text-[22px] text-ellipsis whitespace-nowrap">不要法餐厅，换一个吃夜宵的</p>
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-gradient-to-r from-[rgba(52,119,178,0.08)] relative rounded-[100px] shrink-0 to-[rgba(123,137,188,0.08)] w-full" data-name="玩法调整提示词">
      <div aria-hidden="true" className="absolute border-[0.947px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[26px] relative w-full">
          <Component35 />
        </div>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full" data-name="信息内容区">
      <Component31 />
      <Component34 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex items-center left-[666.52px] top-[220px]">
      <div className="bg-gradient-to-b content-stretch flex flex-col from-white gap-[24px] h-[596px] items-start p-[24px] relative rounded-[52px] shrink-0 to-[#f7f9fa] w-[420px]" data-name="玩法卡片">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[52px] shadow-[0px_60px_60px_0px_rgba(173,196,213,0.2)]" />
        <Component24 />
        <Component30 />
      </div>
    </div>
  );
}

function Frame11() {
  const [activeIndex, setActiveIndex] = useState(2);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = 420 + 48;
    const containerWidth = container.clientWidth;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    const scrollLeft = index * cardWidth - centerOffset;
    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 420 + 48;
    const containerWidth = container.clientWidth;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    const newIndex = Math.round((scrollLeft - centerOffset + cardWidth / 2) / cardWidth);
    setActiveIndex(Math.max(0, Math.min(4, newIndex)));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const onScroll = () => requestAnimationFrame(handleScroll);
    container.addEventListener('scroll', onScroll, { passive: true });
    const timer = setTimeout(() => scrollToCard(2), 200);
    return () => {
      container.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  const cards = [
    { Component: Frame38, rotate: -6, isActive: activeIndex === 0 },
    { Component: Frame35, rotate: -3, isActive: activeIndex === 1 },
    { Component: Frame41, rotate: 0, isActive: activeIndex === 2 },
    { Component: Frame37, rotate: 3, isActive: activeIndex === 3 },
    { Component: Frame40, rotate: 6, isActive: activeIndex === 4 },
  ];

  return (
    <div className="absolute bg-[#e9f5fc] h-[1032px] left-[144px] overflow-hidden rounded-[42px] top-[24px] w-[1752px]">
      {/* <Group10 /> */}
      <Component2 />
      <Group9 />
      <div 
        ref={scrollContainerRef}
        className="absolute left-0 top-[220px] w-full h-[620px] overflow-x-auto overflow-y-hidden"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          pointerEvents: 'auto',
        }}
        onMouseDown={(e) => {
          const container = e.currentTarget;
          container.style.cursor = 'grabbing';
          const startX = e.pageX - container.offsetLeft;
          const scrollLeft = container.scrollLeft;
          
          const handleMouseMove = (moveE: MouseEvent) => {
            const x = moveE.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
          };
          
          const handleMouseUp = () => {
            container.style.cursor = 'grab';
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      >
        <div className="inline-flex gap-[48px] h-full items-center" style={{ paddingLeft: 'max(48px, calc(50% - 210px))', paddingRight: 'max(48px, calc(50% - 210px))' }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="shrink-0 select-none"
              style={{ scrollSnapAlign: 'center', pointerEvents: 'auto' }}
              animate={{
                scale: card.isActive ? 1 : 0.9,
                opacity: card.isActive ? 1 : 0.75,
                rotateZ: card.isActive ? 0 : card.rotate,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => scrollToCard(index)}
              onDragStart={(e) => e.preventDefault()}
            >
              <card.Component />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center left-[24px] rounded-[100px] size-[96px] top-[960px]">
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Common/icon_setting">
        <div className="absolute inset-[9.72%_14.58%_9.73%_14.58%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38.6638">
            <g id="Union">
              <path d={svgPaths.p2c69c600} fill="var(--fill-0, #444C5C)" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
              <path clipRule="evenodd" d={svgPaths.p28fe3800} fill="var(--fill-0, #444C5C)" fillRule="evenodd" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_14px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute h-[32.32px] left-[5px] top-[5px] w-[33.5px]">
      <div className="absolute inset-[-4.64%_0_-3.65%_-4.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34.9999">
          <g id="Group 2036084730">
            <path d={svgPaths.p34e58680} id="Ellipse 23941" stroke="var(--stroke-0, white)" strokeWidth="3.49999" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p266b2600} id="Ellipse 23942" stroke="var(--stroke-0, white)" strokeWidth="2.99999" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p1b0ca880} fill="var(--fill-0, white)" id="Intersect" style={{ fill: "white", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] content-stretch flex items-center overflow-clip p-[21px] relative rounded-[107.692px] shrink-0">
      <div className="relative shrink-0 size-[42px]">
        <Group7 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[21px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[42px]" data-name="Common/icon_like">
        <div className="absolute inset-[14.58%_10.42%_13.75%_10.42%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2498 30.1014">
            <path clipRule="evenodd" d={svgPaths.p1b3ff6c0} fill="var(--fill-0, #444C5C)" fillRule="evenodd" id="Union" style={{ fill: "color(display-p3 0.2667 0.2980 0.3608)", fillOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col gap-[18px] h-[198px] items-start left-[24px] overflow-clip p-[6px] rounded-[117.073px] top-[24px] w-[96px]">
      <Frame12 />
      <Frame14 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#eaedf2] overflow-clip relative rounded-[60px] size-full" data-name="框架-随行发现">
      <Frame11 />
      <Frame10 />
      <Frame13 />
    </div>
  );
}