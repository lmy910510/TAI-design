import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { SHADOW, STATIC, useThemeOptional } from "@tai-design/components";

export interface DiscoveryCard {
  id: string;
  image: string;
  distance: string;
  thumbnails?: string[];
  title: string;
  subtitle?: string;
  tags: string[];
  aiPrompt?: string;
}

export interface DiscoveryCarouselProps {
  cards: DiscoveryCard[];
  className?: string;
}

/**
 * 随行发现卡片轮播组件
 * 保留原有轮播结构，但所有展示色值改为主题 token 驱动。
 */
export function DiscoveryCarousel({ cards, className = "" }: DiscoveryCarouselProps) {
  const { tokens } = useThemeOptional();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 420 + 48;
    const containerWidth = container.clientWidth;
    const centerOffset = containerWidth / 2 - cardWidth / 2;
    const newIndex = Math.round((scrollLeft - centerOffset + cardWidth / 2) / cardWidth);
    setActiveIndex(Math.max(0, Math.min(cards.length - 1, newIndex)));
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = 420 + 48;
    const containerWidth = container.clientWidth;
    const centerOffset = containerWidth / 2 - cardWidth / 2;
    const scrollLeft = index * cardWidth - centerOffset;

    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    const timer = setTimeout(() => scrollToCard(0), 200);

    return () => {
      container.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [cards.length]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide overflow-x-scroll overflow-y-hidden pb-8"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.cursor = "grabbing";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.cursor = "grab";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.cursor = "grab";
        }}
      >
        <div
          className="inline-flex gap-[48px]"
          style={{
            paddingLeft: "max(48px, calc(50% - 210px))",
            paddingRight: "max(48px, calc(50% - 210px))",
          }}
        >
          {cards.map((card, index) => (
            <CardItem
              key={card.id}
              card={card}
              isActive={index === activeIndex}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className="h-2 rounded-full transition-all"
            style={{
              width: index === activeIndex ? 32 : 8,
              backgroundColor:
                index === activeIndex ? tokens.borderColor.brand : tokens.borderColor.level1,
            }}
            aria-label={`跳转到第 ${index + 1} 张卡片`}
            type="button"
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

interface CardItemProps {
  card: DiscoveryCard;
  isActive: boolean;
  onClick: () => void;
}

function CardItem({ card, isActive, onClick }: CardItemProps) {
  const { tokens } = useThemeOptional();

  return (
    <motion.div
      className="shrink-0 cursor-pointer select-none"
      style={{
        scrollSnapAlign: "center",
        width: 420,
      }}
      animate={{
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      onClick={onClick}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        className="flex h-[596px] w-[420px] flex-col gap-[24px] rounded-[52px] border-2 p-[24px]"
        style={{
          background: `linear-gradient(180deg, ${tokens.bgColor.page} 0%, ${tokens.bgColor.container} 100%)`,
          boxShadow: SHADOW.xl,
          borderColor: STATIC.transparent,
        }}
      >
        <div className="relative h-[304px] overflow-hidden rounded-[31.054px]">
          <img
            src={card.image}
            alt={card.title}
            className="pointer-events-none h-full w-full object-cover"
            draggable={false}
          />

          <div
            className="absolute left-[12px] top-[12px] flex items-center gap-[8px] rounded-[100px] px-[12px] py-[8px]"
            style={{
              backgroundColor: tokens.bgColor.overlay,
              backdropFilter: "blur(6px)",
            }}
          >
            <LocationIcon color={STATIC.white} />
            <p
              className="whitespace-nowrap font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[22px]"
              style={{ color: STATIC.white }}
            >
              {card.distance}
            </p>
          </div>

          {card.thumbnails && card.thumbnails.length > 0 ? (
            <div className="absolute left-[18px] top-[236px] flex items-center pr-[16px]">
              {card.thumbnails.slice(0, 3).map((thumb, idx) => (
                <div
                  key={idx}
                  className="relative mr-[-16px] size-[50px] overflow-hidden rounded-[12px] border-2"
                  style={{ borderColor: STATIC.white }}
                >
                  <img
                    src={thumb}
                    alt=""
                    className="pointer-events-none h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <div
              className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[34px] leading-[34px]"
              style={{ color: tokens.textColor.primary }}
            >
              {card.title.split("\n").map((line, idx) => (
                <p key={idx} className="w-full overflow-hidden text-ellipsis">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-[12px]">
              {card.tags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-[12px]">
                  <p
                    className="whitespace-nowrap font-['Noto_Sans_S_Chinese:Regular',sans-serif] text-[22px] leading-[22px]"
                    style={{ color: tokens.textColor.secondary }}
                  >
                    {tag}
                  </p>
                  {idx < card.tags.length - 1 ? (
                    <div
                      className="h-[20px] w-px"
                      style={{ backgroundColor: tokens.borderColor.level2 }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {card.aiPrompt ? (
            <div
              className="rounded-[100px] border"
              style={{
                backgroundColor: tokens.bgColor.brandLight,
                borderColor: tokens.borderColor.inverse,
              }}
            >
              <div className="flex items-center justify-center px-[16px] py-[26px]">
                <div className="flex items-center gap-[8px]">
                  <AIIcon color={tokens.textColor.secondary} />
                  <p
                    className="overflow-hidden text-ellipsis whitespace-nowrap font-['Noto_Sans_S_Chinese:Regular',sans-serif] text-[22px] leading-[22px]"
                    style={{ color: tokens.textColor.secondary }}
                  >
                    {card.aiPrompt}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function LocationIcon({ color }: { color: string }) {
  return (
    <div className="size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path
          d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function AIIcon({ color }: { color: string }) {
  return (
    <div className="size-[22px] opacity-60">
      <svg className="block size-full" fill="none" viewBox="0 0 22 22">
        <path d="M11 2L13.09 8.26L19 10L13.09 11.74L11 18L8.91 11.74L3 10L8.91 8.26L11 2Z" fill={color} />
      </svg>
    </div>
  );
}
