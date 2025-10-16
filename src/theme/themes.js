/**
 * 멀티 테마 시스템
 * 스크롤 기반으로 섹션별 자동 테마 전환을 지원하는 색상 시스템
 */

export const themes = {
  // 테마 1: 크림 & 그린 (메인/첫인상)
  fresh: {
    name: "Fresh & Clean",
    colors: {
      background: "#F4ECC4", // Sidecar - 크림색 배경
      primary: "#25CC08", // Harlequin - 밝은 그린
      primaryDark: "#1A8A06", // 가독성 개선을 위한 어두운 그린
      text: {
        primary: "#1A1A1A", // 거의 검정
        secondary: "#4A4A3A", // 회색
      },
      accent: "#5FE040", // 밝은 그린 액센트
      card: "#FFFFFF", // 순백색 카드
      cardElevated: "#FFFFFF", // 강조된 카드
      cardSubtle: "#F9F9F9", // 은은한 카드
    },
    mood: "신선하고, 모던하고, 깔끔한",
  },

  // 테마 2: 베이지 & 오렌지 (프로젝트/다른 섹션)
  warm: {
    name: "Warm & Bold",
    colors: {
      background: "#DCD5AF", // Grain Brown - 베이지 배경
      primary: "#D85C14", // Orange Roughy - 오렌지
      primaryDark: "#A04310", // 가독성 개선을 위한 어두운 오렌지
      text: {
        primary: "#2A2420", // 다크 브라운
        secondary: "#4A3A30", // 회색 브라운
      },
      accent: "#FF7B3D", // 밝은 오렌지 액센트
      card: "#FFFFFF", // 순백색 카드
      cardElevated: "#FFFFFF", // 강조된 카드
      cardSubtle: "#F9F9F9", // 은은한 카드
    },
    mood: "따뜻하고, 대담하고, 레트로한",
  },

  // 테마 3: 추가 옵션 (선택사항)
  cool: {
    name: "Cool & Professional",
    colors: {
      background: "#E8F2F0", // 연한 청록 배경
      primary: "#0891B2", // 청록
      primaryDark: "#0E7490", // 어두운 청록
      text: {
        primary: "#1A1A1A", // 거의 검정
        secondary: "#4A4A4A", // 회색
      },
      accent: "#06B6D4", // 밝은 청록 액센트
      card: "#FFFFFF", // 순백색 카드
      cardElevated: "#FFFFFF", // 강조된 카드
      cardSubtle: "#F9F9F9", // 은은한 카드
    },
    mood: "차분하고, 전문적이고, 신뢰감 있는",
  },
};

/**
 * 섹션별 테마 매핑
 * 각 섹션이 어떤 테마를 사용할지 정의
 */
export const sectionThemes = {
  hero: "fresh", // Hero 섹션: 신선한 크림 & 그린
  about: "fresh", // About 섹션: 신선한 크림 & 그린
  projects: "warm", // Projects 섹션: 따뜻한 베이지 & 오렌지
  featured: "warm", // Featured 섹션: 따뜻한 베이지 & 오렌지
  skills: "fresh", // Skills 섹션: 신선한 크림 & 그린
  extras: "warm", // Extras 섹션: 따뜻한 베이지 & 오렌지
  contact: "fresh", // Contact 섹션: 신선한 크림 & 그린
};

/**
 * CSS Variables 생성 함수
 * 테마 객체를 CSS 변수로 변환하여 동적 색상 전환 지원
 * @param {Object} theme - 테마 객체
 * @returns {Object} CSS 변수 객체
 */
export const generateCSSVariables = (theme) => {
  const colors = theme.colors;
  return {
    "--theme-background": colors.background,
    "--theme-primary": colors.primary,
    "--theme-primary-dark": colors.primaryDark,
    "--theme-text-primary": colors.text.primary,
    "--theme-text-secondary": colors.text.secondary,
    "--theme-accent": colors.accent,
    "--theme-card": colors.card,
    "--theme-card-elevated": colors.cardElevated,
    "--theme-card-subtle": colors.cardSubtle,
  };
};
