import svgPaths from "./svg-dcrh6tmvz9";
import imgArrow66 from "figma:asset/1e6425a6945770927a9d360f163d1cb107bfb69e.png";
import imgArrow67 from "figma:asset/a1f6948d5e851463f17a486a88bcd71b91b0d144.png";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-stretch not-italic pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-full box-border" data-name="定义">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[48px] relative shrink-0 text-[48px] text-[rgba(0,0,0,0.92)]">定义</p>
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)]">
        <p className="leading-[normal]">用于控制一个连续有限区间内的数值（或数值范围）。</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pr-[2px] top-0 w-[389.127px]" data-name="圆">
      <div className="h-[6px] mr-[-2px] relative shrink-0 w-[370px]" data-name="进度条">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 6">
          <path d="M0 0H370V6H0V0Z" fill="var(--fill-0, black)" id="è¿åº¦æ¡" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="mr-[-2px] relative shrink-0 size-[18px]">
        <div className="absolute inset-[-66.67%_-100%_-133.33%_-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g filter="url(#filter0_d_83_332)" id="Vector 4376">
              <path d={svgPaths.p2734fbc0} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="54" id="filter0_d_83_332" width="54" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="9" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_83_332" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_83_332" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[18px] left-0 top-[26px] w-full">
      <div className="absolute bg-[rgba(0,0,0,0.12)] h-[6px] left-0 right-0 top-[6px]" data-name="底条" />
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute content-stretch flex font-['DIN:Medium',sans-serif] items-end justify-between leading-[0] left-0 not-italic text-[28px] text-[rgba(0,0,0,0.84)] top-[56px] w-full whitespace-nowrap" data-name="时长">
      <div className="flex flex-col justify-center opacity-42 relative shrink-0">
        <p className="leading-[28px]">2:08</p>
      </div>
      <div className="flex flex-col justify-center opacity-42 relative shrink-0 text-right">
        <p className="leading-[28px]">4:28</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex h-[62px] items-center justify-center ml-[27px] mt-[108px] relative row-1 w-0">
        <div className="flex-none h-px rotate-90 w-[62px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.5px_-0.81%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgArrow66} width="63" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[101px] items-center justify-center ml-[715px] mt-[69px] relative row-1 w-0">
        <div className="flex-none h-px rotate-90 w-[101px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.5px_-0.5%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgArrow67} width="102" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[101px] items-center justify-center ml-[378px] mt-[69px] relative row-1 w-0">
        <div className="flex-none h-px rotate-90 w-[101px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.5px_-0.5%]">
              <img alt="" className="block max-w-none size-full" height="1" src={imgArrow67} width="102" />
            </div>
          </div>
        </div>
      </div>
      <p className="col-1 font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[30px] ml-0 mt-[200px] not-italic relative row-1 text-[#0036bf] text-[20px] w-[167px]">范围数据根据业务自行定制</p>
      <p className="col-1 font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[30px] ml-[307px] mt-[200px] not-italic relative row-1 text-[#0036bf] text-[20px] w-[167px]">进度锚点图形根据业务自行定义</p>
      <p className="col-1 font-['Noto_Sans_S_Chinese:Regular',sans-serif] leading-[30px] ml-[715px] mt-[200px] not-italic relative row-1 text-[#0036bf] text-[20px] w-[167px]">总长度尺寸可自行定义</p>
      <div className="col-1 h-[84px] ml-0 mt-0 relative row-1 w-full max-w-[918px]" data-name="Component 18">
        <Frame1 />
        <Component5 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[48px] items-stretch leading-[0] px-[48px] py-[48px] relative rounded-[36px] shrink-0 w-full box-border" data-name="单元格">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="文字组合">
        <div className="flex flex-col font-['Noto_Sans_SC:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[36px] text-black whitespace-nowrap">
          <p className="leading-[normal]">类型一：水平滑块</p>
        </div>
        <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)] w-auto">
          <p className="leading-[normal]">常用于表示音乐进度</p>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full max-w-[918px]" data-name="圆">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 918 36">
        <g id="å">
          <path d="M0 22H6V36H0V22Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M22.8 18H28.8V36H22.8V18Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_2" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M45.6 0H51.6V36H45.6V0Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_3" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M68.4 22H74.4V36H68.4V22Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_4" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M91.2 12H97.2V36H91.2V12Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_5" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M114 22H120V36H114V22Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_6" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M136.8 22H142.8V36H136.8V22Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_7" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M159.6 18H165.6V36H159.6V18Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_8" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M182.4 0H188.4V36H182.4V0Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_9" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M205.2 22H211.2V36H205.2V22Z" fill="var(--fill-0, black)" fillOpacity="0.92" id="è¿åº¦æ¡_10" style={{ fill: "black", fillOpacity: "0.92" }} />
          <path d="M228 12H234V36H228V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_11" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M250.8 0H256.8V36H250.8V0Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_12" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M273.6 22H279.6V36H273.6V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_13" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M296.4 12H302.4V36H296.4V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_14" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M319.2 22H325.2V36H319.2V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_15" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M342 22H348V36H342V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_16" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M364.8 12H370.8V36H364.8V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_17" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M387.6 12H393.6V36H387.6V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_18" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M410.4 0H416.4V36H410.4V0Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_19" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M433.2 12H439.2V36H433.2V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_20" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M456 12H462V36H456V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_21" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M478.8 22H484.8V36H478.8V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_22" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M501.6 22H507.6V36H501.6V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_23" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M524.4 12H530.4V36H524.4V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_24" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M547.2 0H553.2V36H547.2V0Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_25" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M570 12H576V36H570V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_26" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M592.8 12H598.8V36H592.8V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_27" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M615.6 12H621.6V36H615.6V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_28" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M638.4 22H644.4V36H638.4V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_29" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M661.2 22H667.2V36H661.2V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_30" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M684 12H690V36H684V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_31" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M706.8 0H712.8V36H706.8V0Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_32" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M729.6 12H735.6V36H729.6V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_33" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M752.4 12H758.4V36H752.4V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_34" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M775.2 12H781.2V36H775.2V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_35" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M798 22H804V36H798V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_36" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M820.8 22H826.8V36H820.8V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_37" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M843.6 12H849.6V36H843.6V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_38" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M866.4 0H872.4V36H866.4V0Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_39" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M889.2 12H895.2V36H889.2V12Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_40" style={{ fill: "black", fillOpacity: "0.12" }} />
          <path d="M912 22H918V36H912V22Z" fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡_41" style={{ fill: "black", fillOpacity: "0.12" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start justify-end relative shrink-0 w-full max-w-[918px]">
      <Component7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['DIN:Medium',sans-serif] items-start justify-between leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.54)] w-full max-w-[918px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">2:08</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right">
        <p className="leading-[28px]">24:28</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    null
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-stretch pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-full box-border" data-name="类型">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">类型</p>
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)] w-full max-w-[1469px]">
        <p className="leading-[normal]">根据业务的实际使用场景，可以在基础组件上进行元素的合理组合使用</p>
      </div>
      <Component3 />
      <Component6 />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pr-[2px] top-0 w-[389.127px]" data-name="圆">
      <div className="h-[6px] mr-[-2px] relative shrink-0 w-[370px]" data-name="进度条">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 6">
          <path d="M0 0H370V6H0V0Z" fill="var(--fill-0, black)" id="è¿åº¦æ¡" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="mr-[-2px] relative shrink-0 size-[18px]">
        <div className="absolute inset-[-66.67%_-100%_-133.33%_-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
            <g filter="url(#filter0_d_83_332)" id="Vector 4376">
              <path d={svgPaths.p2734fbc0} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="54" id="filter0_d_83_332" width="54" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="9" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_83_332" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_83_332" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[18px] left-0 top-[26px] w-full max-w-[918px]">
      <div className="absolute bg-[rgba(0,0,0,0.12)] h-[6px] left-0 right-0 top-[6px]" data-name="底条" />
      <Component11 />
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute content-stretch flex font-['DIN:Medium',sans-serif] items-end justify-between leading-[0] left-0 not-italic text-[28px] text-[rgba(0,0,0,0.84)] top-[56px] w-full max-w-[918px] whitespace-nowrap" data-name="时长">
      <div className="flex flex-col justify-center opacity-42 relative shrink-0">
        <p className="leading-[28px]">2:08</p>
      </div>
      <div className="flex flex-col justify-center opacity-42 relative shrink-0 text-right">
        <p className="leading-[28px]">4:28</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="默认">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)] w-[240px]">
        <p className="leading-[normal]">默认态</p>
      </div>
      <div className="h-[84px] relative shrink-0 w-full max-w-[918px]" data-name="Component 18">
        <Frame2 />
        <Component12 />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="默认">
      <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)] w-[240px]">
        <p className="leading-[normal]">操作态</p>
      </div>
      <div className="h-[82px] relative shrink-0 w-full max-w-[918px]" data-name="Component 18">
        <div className="absolute bg-[rgba(0,0,0,0.06)] h-[66px] left-0 right-0 rounded-[18px] top-[8px]" data-name="底条" />
        <div className="absolute h-[66px] left-0 top-[8px] w-[370px]" data-name="进度条">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 66">
            <path d={svgPaths.p267aff80} fill="var(--fill-0, black)" fillOpacity="0.12" id="è¿åº¦æ¡" style={{ fill: "black", fillOpacity: "0.12" }} />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DIN:Medium',sans-serif] h-[31px] justify-center leading-[0] left-[20px] not-italic text-[42px] text-black top-[39.5px] w-[191px]">
          <p>
            <span className="leading-[42px] text-black">{`2:08 `}</span>
            <span className="leading-[42px] text-[rgba(0,0,0,0.3)]">/4:28</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InteractiveAudioSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const progress = useMotionValue(370 / 918); // Default state progress from figma (approx 40%)
  const containerRef = useRef<HTMLDivElement>(null);

  // Derive width and text
  const totalSeconds = 268; // 4:28
  const currentSeconds = useTransform(progress, p => Math.round(p * totalSeconds));
  
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };
  
  const currentTimeText = useTransform(currentSeconds, s => formatTime(s));
  const fillWidthPercent = useTransform(progress, p => `${p * 100}%`);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateProgress(e.clientX);
  };

  const updateProgress = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let p = (clientX - rect.left) / rect.width;
    p = Math.max(0, Math.min(1, p));
    progress.set(p);
  };

  useEffect(() => {
    const up = () => setIsDragging(false);
    const move = (e: PointerEvent) => {
      if (isDragging) updateProgress(e.clientX);
    };
    if (isDragging) {
      window.addEventListener('pointerup', up);
      window.addEventListener('pointermove', move);
    }
    return () => {
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointermove', move);
    };
  }, [isDragging]);

  return (
    <motion.div 
      className="relative w-full max-w-[918px] h-[84px] touch-none cursor-pointer"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      animate={isDragging ? "active" : "default"}
      initial="default"
    >
      <div className="absolute inset-0 top-[26px] h-[18px]">
        {/* Background Track */}
        <motion.div 
          className="absolute left-0 right-0 origin-left"
          variants={{
            default: { top: 6, height: 6, backgroundColor: "rgba(0,0,0,0.12)", borderRadius: 0 },
            active: { top: -18, height: 66, backgroundColor: "rgba(0,0,0,0.06)", borderRadius: 18 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Progress Fill */}
        <motion.div 
          className="absolute left-0 origin-left overflow-hidden"
          style={{ width: fillWidthPercent }}
          variants={{
            default: { top: 6, height: 6, borderRadius: 0 },
            active: { top: -18, height: 66, borderRadius: 18 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="w-full h-full"
            variants={{
              default: { backgroundColor: "rgba(0,0,0,1)", opacity: 1 },
              active: { backgroundColor: "rgba(0,0,0,1)", opacity: 0.12 }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Active State Text (Inside track) */}
        <motion.div 
          className="absolute flex flex-col font-['DIN:Medium',sans-serif] h-[31px] justify-center leading-[0] left-[20px] not-italic text-[42px] pointer-events-none whitespace-nowrap"
          variants={{
            default: { opacity: 0, top: 13.5, y: "-50%", x: -10 },
            active: { opacity: 1, top: 13.5, y: "-50%", x: 0 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p>
            <motion.span className="leading-[42px] text-black">{currentTimeText}</motion.span>
            <span className="leading-[42px] text-[rgba(0,0,0,0.3)]"> / 4:28</span>
          </p>
        </motion.div>

        {/* Thumb (only visible in default) */}
        <motion.div 
          className="absolute top-0 ml-[-9px]"
          style={{ left: fillWidthPercent }}
          variants={{
            default: { opacity: 1, scale: 1 },
            active: { opacity: 0, scale: 0.5 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="size-[18px]">
            <div className="absolute inset-[-66.67%_-100%_-133.33%_-100%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
                <g filter="url(#filter0_d_83_332_interactive)" id="Vector 4376 interactive">
                  <path d={svgPaths.p2734fbc0} fill="black" style={{ fill: "black", fillOpacity: "1" }} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="54" id="filter0_d_83_332_interactive" width="54" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="9" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_83_332_interactive" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_83_332_interactive" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Default State Text (Below track) */}
      <motion.div 
        className="absolute content-stretch flex font-['DIN:Medium',sans-serif] items-end justify-between leading-[0] left-0 not-italic text-[28px] text-[rgba(0,0,0,0.84)] top-[56px] w-full max-w-[918px] whitespace-nowrap pointer-events-none"
        variants={{
          default: { opacity: 1, y: 0 },
          active: { opacity: 0, y: -10 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center opacity-42">
          <motion.p className="leading-[28px]">{currentTimeText}</motion.p>
        </div>
        <div className="flex flex-col justify-center opacity-42 text-right">
          <p className="leading-[28px]">4:28</p>
        </div>
      </motion.div>

    </motion.div>
  );
}

function Component9() {
  return (
    <div className="bg-[#f6f7fa] content-stretch flex flex-col gap-[48px] items-stretch px-[48px] py-[48px] relative rounded-[36px] shrink-0 w-full box-border" data-name="单元格">
      <Component10 />
      <Component13 />
    </div>
  );
}

function InteractiveDemo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-stretch pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-full box-border" data-name="交互演示">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">交互演示</p>
      <div className="bg-[#f6f7fa] content-stretch flex gap-[48px] items-center px-[48px] py-[48px] relative rounded-[36px] shrink-0 w-full box-border" data-name="交互演示单元格">
        <div className="flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.7)] w-[240px]">
          <p className="leading-[normal]">交互体验</p>
          <p className="text-[16px] mt-2 opacity-60">请按下滑块并拖拽</p>
        </div>
        <InteractiveAudioSlider />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-stretch pb-[30px] pt-[60px] px-[84px] relative shrink-0 w-full box-border" data-name="状态">
      <p className="font-['Noto_Sans_S_Chinese:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(0,0,0,0.92)] whitespace-nowrap">状态</p>
      <Component9 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-stretch pb-[200px] relative w-full shrink-0 box-border overflow-hidden" data-name="滑块">
      <Component1 />
      <InteractiveDemo />
      <Component2 />
      <Component8 />
    </div>
  );
}