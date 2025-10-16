/**
 * 테마 Context API
 * 전역 테마 상태 관리 및 스크롤 기반 자동 테마 전환을 담당
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, sectionThemes, generateCSSVariables } from '../theme/themes';

const ThemeContext = createContext();

/**
 * 테마 Hook
 * 컴포넌트에서 테마 관련 기능을 사용할 수 있게 해주는 커스텀 훅
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * 테마 Provider 컴포넌트
 * 앱 전체에 테마 상태를 제공하고 CSS Variables를 관리
 */
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('fresh');
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * CSS Variables 업데이트 함수
   * 현재 테마에 맞게 CSS 변수들을 동적으로 업데이트
   */
  const updateCSSVariables = (themeName) => {
    const theme = themes[themeName];
    const variables = generateCSSVariables(theme);

    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  /**
   * 테마 전환 함수
   * 부드러운 애니메이션과 함께 테마를 전환
   */
  const changeTheme = (themeName) => {
    if (themeName === currentTheme) return;

    setIsTransitioning(true);
    setCurrentTheme(themeName);
    updateCSSVariables(themeName);

    // 전환 애니메이션 완료 후 상태 리셋
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  /**
   * 섹션별 테마 자동 전환 함수
   * IntersectionObserver에서 호출되어 섹션에 맞는 테마로 자동 전환
   */
  const handleSectionChange = (sectionName) => {
    const themeName = sectionThemes[sectionName];
    if (themeName && themeName !== currentTheme) {
      changeTheme(themeName);
    }
  };

  // 초기 테마 설정
  useEffect(() => {
    updateCSSVariables(currentTheme);
  }, []);

  const value = {
    currentTheme,
    themes,
    sectionThemes,
    isTransitioning,
    changeTheme,
    handleSectionChange,
    getCurrentThemeColors: () => themes[currentTheme].colors
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
