/**
 * ThemeSection 컴포넌트
 * 섹션별 테마 적용 및 스크롤 기반 자동 테마 전환을 담당하는 래퍼 컴포넌트
 */

import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * ThemeSection 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트들
 * @param {string} props.themeName - 적용할 테마 이름 (sectionThemes의 키)
 * @param {string} props.className - 추가 CSS 클래스
 * @param {string} props.id - 섹션 ID
 * @param {string} props.minHeight - 최소 높이 (기본값: 100vh)
 * @returns {JSX.Element} ThemeSection 컴포넌트
 */
const ThemeSection = ({
  children,
  themeName,
  className = '',
  id,
  minHeight = '100vh',
  ...props
}) => {
  const sectionRef = useRef(null);
  const { handleSectionChange, isTransitioning } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 화면의 50% 이상 보일 때 테마 전환
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const visibilityRatio = visibleHeight / viewportHeight;

            if (visibilityRatio >= 0.5) {
              handleSectionChange(themeName);
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [themeName, handleSectionChange]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`theme-section transition-all duration-600 ease-in-out ${className}`}
      style={{
        minHeight,
        transition: isTransitioning ? 'all 0.6s ease-in-out' : 'none'
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default ThemeSection;
