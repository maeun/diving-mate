"use client";
import React, { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  instructor?: string;
  resort?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const CAROUSEL_INTERVAL = 4000;

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  // 반응형: 모바일(1), 그 외(3)
  const getCarouselSize = () =>
    typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 3;
  const [carouselSize, setCarouselSize] = useState(getCarouselSize());
  const CLONE_COUNT = carouselSize;
  const [slideIndex, setSlideIndex] = useState(CLONE_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  // 반응형 resize 이벤트
  useEffect(() => {
    const handleResize = () => {
      const newSize = getCarouselSize();
      if (newSize !== carouselSize) {
        setCarouselSize(newSize);
        setSlideIndex(newSize); // 복제 개수만큼 offset
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, [carouselSize]);

  // 복제 배열
  const extendedTestimonials = [
    ...testimonials.slice(-CLONE_COUNT),
    ...testimonials,
    ...testimonials.slice(0, CLONE_COUNT),
  ];

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide(slideIndex + 1);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [slideIndex, testimonials.length, carouselSize]);

  // 무한 루프 핵심: 끝/처음에서 순간 점프
  useEffect(() => {
    if (!isTransitioning) return;
    const handle = setTimeout(() => {
      if (slideIndex === extendedTestimonials.length - CLONE_COUNT) {
        setIsTransitioning(false);
        setSlideIndex(CLONE_COUNT);
      } else if (slideIndex === 0) {
        setIsTransitioning(false);
        setSlideIndex(testimonials.length);
      }
    }, 500);
    return () => clearTimeout(handle);
    // eslint-disable-next-line
  }, [slideIndex, isTransitioning, testimonials.length, carouselSize]);

  // 슬라이드 이동 함수
  const goToSlide = (target: number) => {
    setIsTransitioning(true);
    setSlideIndex(target);
  };

  // 카드 opacity 계산
  const getCardOpacity = (i: number) => {
    if (carouselSize === 1) {
      // 모바일: 항상 가운데 카드만 보임
      return i === slideIndex
        ? "opacity-100 z-10 scale-100"
        : "opacity-0 pointer-events-none";
    }
    // 데스크탑: 3장, 가운데 강조, 양쪽 흐림
    if (i === slideIndex + 1) return "opacity-100 z-10 scale-105";
    if (i === slideIndex || i === slideIndex + 2) return "opacity-40 z-0";
    return "opacity-0 pointer-events-none";
  };

  // 카드 width 계산
  const getCardWidth = () => (carouselSize === 1 ? "100%" : "33.3333%");

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            실제 사용자 후기
          </h2>
          <span className="text-sm text-gray-500">
            베스트 후기 · 실사용자 인증
          </span>
        </div>
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={transitionRef}
            className={`flex w-full items-center ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${slideIndex * (100 / carouselSize)}%)`,
            }}
            onTransitionEnd={() => {
              if (
                slideIndex === extendedTestimonials.length - CLONE_COUNT ||
                slideIndex === 0
              ) {
                setIsTransitioning(false);
              }
            }}
          >
            {extendedTestimonials.map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className={`flex-shrink-0 px-4 my-8 ${getCardOpacity(
                  i
                )} transition-all duration-500`}
                style={{ minWidth: getCardWidth(), maxWidth: getCardWidth() }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-start h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed text-base font-medium flex-1">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto w-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.instructor || testimonial.resort}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
