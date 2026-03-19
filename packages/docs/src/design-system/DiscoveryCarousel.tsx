import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

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
 * 支持横向滑动，中心卡片自动放大，周围卡片缩小
 */
export function DiscoveryCarousel({ cards, className = "" }: DiscoveryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 处理滚动事件，计算当前激活的卡片
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 420 + 48; // 卡片宽度 + 间距
    const containerWidth = container.clientWidth;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    
    // 计算最接近中心的卡片索引
    const newIndex = Math.round((scrollLeft - centerOffset + cardWidth / 2) / cardWidth);
    setActiveIndex(Math.max(0, Math.min(cards.length - 1, newIndex)));
  };

  // 滚动到指定卡片
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = 420 + 48;
    const containerWidth = container.clientWidth;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    const scrollLeft = index * cardWidth - centerOffset;
    
    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    
    // 初始化：滚动到第一张卡片（延迟执行确保容器已渲染）
    const timer = setTimeout(() => scrollToCard(0), 200);

    return () => {
      container.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, [cards.length]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* 滚动容器 */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll overflow-y-hidden scrollbar-hide pb-8"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
        }}
        onMouseDown={(e) => {
          const container = e.currentTarget;
          container.style.cursor = 'grabbing';
        }}
        onMouseUp={(e) => {
          const container = e.currentTarget;
          container.style.cursor = 'grab';
        }}
        onMouseLeave={(e) => {
          const container = e.currentTarget;
          container.style.cursor = 'grab';
        }}
      >
        {/* 内容容器 - 使用 inline-flex 确保内容宽度正确 */}
        <div className="inline-flex gap-[48px]" style={{ paddingLeft: 'max(48px, calc(50% - 210px))', paddingRight: 'max(48px, calc(50% - 210px))' }}>
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

      {/* 指示器 */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex 
                ? 'w-8 bg-blue-600' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`跳转到第 ${index + 1} 张卡片`}
          />
        ))}
      </div>

      {/* 隐藏滚动条的样式 */}
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
  return (
    <motion.div
      className="shrink-0 cursor-pointer select-none"
      style={{
        scrollSnapAlign: 'center',
        width: '420px',
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
      <div className="bg-gradient-to-b from-white to-[#f7f9fa] flex flex-col gap-[24px] h-[596px] p-[24px] rounded-[52px] w-[420px] shadow-[0px_60px_60px_0px_rgba(173,196,213,0.2)] border-2 border-[rgba(255,255,255,0)]">
        
        {/* 头图 */}
        <div className="relative h-[304px] rounded-[31.054px] overflow-hidden">
          <img 
            src={card.image} 
            alt={card.title}
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          
          {/* 距离标签 */}
          <div className="absolute left-[12px] top-[12px] backdrop-blur-[6.279px] bg-[rgba(46,54,73,0.4)] px-[12px] py-[8px] rounded-[100px] flex items-center gap-[8px]">
            <LocationIcon />
            <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[22px] text-white whitespace-nowrap">
              {card.distance}
            </p>
          </div>

          {/* 缩略图 */}
          {card.thumbnails && card.thumbnails.length > 0 && (
            <div className="absolute left-[18px] top-[236px] flex items-center pr-[16px]">
              {card.thumbnails.slice(0, 3).map((thumb, idx) => (
                <div
                  key={idx}
                  className="relative rounded-[12px] size-[50px] mr-[-16px] border-2 border-white overflow-hidden"
                >
                  <img 
                    src={thumb} 
                    alt="" 
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 信息内容区 */}
        <div className="flex-1 flex flex-col gap-[24px]">
          {/* 标题 */}
          <div className="flex flex-col gap-[12px]">
            <div className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] text-[34px] leading-[34px] text-[#232a3a]">
              {card.title.split('\n').map((line, idx) => (
                <p key={idx} className="overflow-hidden text-ellipsis w-full">{line}</p>
              ))}
            </div>
            
            {/* 标签 */}
            <div className="flex gap-[12px] items-center flex-wrap">
              {card.tags.map((tag, idx) => (
                <div key={idx} className="flex gap-[12px] items-center">
                  <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] text-[22px] leading-[22px] text-[#686f7c] whitespace-nowrap">
                    {tag}
                  </p>
                  {idx < card.tags.length - 1 && (
                    <div className="bg-[#444c5c] opacity-20 h-[20px] w-px" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI提示词 */}
          {card.aiPrompt && (
            <div className="bg-gradient-to-r from-[rgba(52,119,178,0.08)] to-[rgba(123,137,188,0.08)] rounded-[100px] border-[0.947px] border-[rgba(255,255,255,0.1)]">
              <div className="flex items-center justify-center px-[16px] py-[26px]">
                <div className="flex gap-[8px] items-center">
                  <AIIcon />
                  <p className="font-['Noto_Sans_S_Chinese:Regular',sans-serif] text-[22px] leading-[22px] text-[#444c5c] overflow-hidden text-ellipsis whitespace-nowrap">
                    {card.aiPrompt}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function LocationIcon() {
  return (
    <div className="size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path 
          d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" 
          fill="white" 
        />
      </svg>
    </div>
  );
}

function AIIcon() {
  return (
    <div className="size-[22px] opacity-60">
      <svg className="block size-full" fill="none" viewBox="0 0 22 22">
        <path
          d="M11 2L13.09 8.26L19 10L13.09 11.74L11 18L8.91 11.74L3 10L8.91 8.26L11 2Z"
          fill="#828997"
        />
      </svg>
    </div>
  );
}
