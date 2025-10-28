export const projects = [
  {
    id: 1,
    title: "ReeLoom - 영화 추천 기반 커뮤니티 웹 서비스",
    description: "Vue + Django 기반의 영화 추천 및 커뮤니티 통합 웹 서비스",
    longDescription:
      "ReeLoom은 영화 추천과 커뮤니티 기능을 결합한 영화 웹 서비스입니다. Vue 3와 Pinia를 활용한 SPA 구조로 구현했으며, TMDB API와 Django REST API를 연동하여 영화 데이터를 효율적으로 처리했습니다. 사용자 친화적인 인터페이스와 실시간 커뮤니티 기능을 통해 직관적인 영화 추천 경험을 제공합니다.",
    role: "프론트엔드 개발 (Vue 3 SPA 구조 설계, API 연동, UI/UX 구현)",
    tech: [
      "Vue 3",
      "Pinia",
      "Axios",
      "TMDB API",
      "OpenAI GPT-4o",
      "YouTube API",
      "Tailwind CSS",
    ],
    techDetails: [
      {
        name: "Vue 3",
        reason:
          "Composition API를 활용한 컴포넌트 로직 재사용성과 명확한 데이터 흐름을 위해 선택",
      },
      {
        name: "Pinia",
        reason:
          "Vuex보다 더 간단한 API와 TypeScript 지원으로 효율적인 상태 관리 구현",
      },
      {
        name: "Tailwind CSS",
        reason: "빠른 UI 개발과 일관된 디자인 시스템 유지로 개발 생산성 향상",
      },
    ],
    image: "/Ki_Portfolio/images/reeloom.png",
    github: "https://github.com/kiwookyung/SSAFY_first_PJT",
    period: "2025.04 - 2025.05",
    teamSize: "2명 (프론트엔드 1, 백엔드 1)",
    achievements: [
      "Vue 3 Composition API와 Pinia를 활용한 상태 관리 구조 설계",
      "TMDB API 연동을 통한 영화 데이터 시각화 및 검색 기능 구현",
      "반응형 디자인으로 다양한 디바이스에서 최적화된 사용자 경험 제공",
      "커뮤니티 게시글/댓글/좋아요 기능의 직관적인 UI 구현",
      "Django REST API와의 효율적인 데이터 통신 구조 구축",
    ],
    challenges: [
      "Vue와 Django 간의 CORS 및 데이터 구조 차이 해결",
      "Pinia 상태 관리 최적화를 통한 API 호출 최소화",
      "대용량 영화 데이터의 효율적인 렌더링 및 페이지네이션 구현",
      "반응형 디자인에서의 이미지 최적화 및 로딩 성능 개선",
    ],
  },
  {
    id: 2,
    title: "FloodGuard - 지능형 침수 예방 자동화 시스템",
    description: "AIoT 기반 실시간 침수 감지·예측·자동 제어 대시보드 웹 서비스",
    longDescription:
      "FloodGuard는 AIoT 기반 침수 예방 시스템의 웹 대시보드입니다. React와 MUI를 활용하여 실시간 모니터링 인터페이스를 구현했으며, WebSocket을 통한 실시간 데이터 통신과 Leaflet 지도를 활용한 시각화 기능을 제공합니다. 사용자가 직관적으로 시스템 상태를 파악하고 제어할 수 있는 대시보드를 설계했습니다.",
    role: "프론트엔드 개발 (React 대시보드 구현, 실시간 데이터 시각화, UI/UX 설계)",
    tech: [
      "React",
      "Vite",
      "MUI",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Leaflet (OpenStreetMap)",
      "WebSocket",
      "JWT",
    ],
    techDetails: [
      {
        name: "React",
        reason: "컴포넌트 기반 아키텍처로 재사용 가능한 대시보드 모듈 설계",
      },
      {
        name: "Zustand",
        reason:
          "전역 상태 관리가 필요했지만 Redux의 복잡성을 피하고 경량화된 상태 관리",
      },
      {
        name: "WebSocket",
        reason:
          "실시간 센서 데이터 스트리밍을 위해 HTTP 폴링 대신 양방향 통신 채택",
      },
      {
        name: "Leaflet",
        reason: "경량 오픈소스 라이브러리로 지도 시각화 성능 최적화",
      },
    ],
    image: "/Ki_Portfolio/images/floodguard.png",
    github: "https://github.com/kiwookyung/floodguard",
    period: "2025.07 - 2025.08",
    teamSize: "6명 (Frontend 1, Backend 1, AI/IoT 4)",
    achievements: [
      "React와 MUI를 활용한 직관적인 실시간 모니터링 대시보드 구현",
      "WebSocket을 통한 실시간 데이터 통신 및 상태 업데이트 시스템 구축",
      "Leaflet 지도를 활용한 지리적 데이터 시각화 및 인터랙티브 UI 구현",
      "Recharts를 통한 예측 데이터 및 로그 시각화 최적화",
      "반응형 디자인으로 다양한 화면 크기에서 최적화된 사용자 경험 제공",
    ],
    challenges: [
      "WebSocket 연결 안정성 확보 및 실시간 데이터 동기화 로직 개선",
      "대용량 실시간 데이터의 효율적인 렌더링 및 성능 최적화",
      "React와 FastAPI 간의 인증 구조 개선 및 JWT 토큰 관리",
      "Leaflet 지도와 Recharts 차트의 성능 병목 해결",
    ],
    demo: "https://github.com/user-attachments/assets/872baf68-da39-4601-bd88-3d0801a9079a",
    tags: ["AIoT", "React", "FastAPI", "Real-time", "Team Project"],
  },
  {
    id: 3,
    title: "OrakGarak - 빅데이터 기반 음성 맞춤형 음악 추천 플랫폼",
    description:
      "음성 분석과 데이터 기반으로 맞춤형 노래를 추천하는 AI 음악 플랫폼",
    longDescription:
      "OrakGarak은 음성 분석 기반 음악 추천 플랫폼의 프론트엔드입니다. React 18과 TypeScript를 활용하여 타입 안전한 컴포넌트 구조를 설계했으며, Web Audio API를 통한 실시간 오디오 처리와 Framer Motion을 활용한 인터랙티브 UI를 구현했습니다. 사용자 친화적인 음성 녹음 인터페이스와 3D 캐러셀을 통한 추천 결과 시각화를 제공합니다.",
    role: "프론트엔드 개발 (React/TypeScript 기반 UI 구현, 오디오 처리, 인터랙티브 UX 설계)",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "MUI",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Web Audio API",
    ],
    techDetails: [
      {
        name: "TypeScript",
        reason:
          "대규모 팀 프로젝트에서 타입 안전성을 확보하고 런타임 에러를 사전에 방지",
      },
      {
        name: "Web Audio API",
        reason:
          "브라우저에서 실시간 음성 녹음 및 오디오 시각화 기능을 네이티브하게 구현",
      },
      {
        name: "Framer Motion",
        reason: "3D 캐러셀과 인터랙티브 애니메이션으로 사용자 경험을 극대화",
      },
      {
        name: "TanStack Query",
        reason: "서버 상태 관리와 자동 캐싱으로 API 호출 최적화 및 UX 개선",
      },
    ],
    image: "/Ki_Portfolio/images/orakgarak.png",
    github: "https://github.com/kiwookyung/orakgarak",
    period: "2025.08 - 2025.09",
    teamSize: "6명 (Frontend 2, Backend 3, Data/AI 1, DevOps 1)",
    achievements: [
      "React 18과 TypeScript를 활용한 타입 안전한 컴포넌트 아키텍처 설계",
      "Web Audio API를 통한 실시간 음성 녹음 및 시각화 기능 구현",
      "Framer Motion을 활용한 3D 캐러셀 및 인터랙티브 애니메이션 구현",
      "Zustand와 TanStack Query를 통한 효율적인 상태 관리 및 서버 상태 동기화",
      "반응형 디자인으로 모바일과 데스크톱에서 최적화된 사용자 경험 제공",
    ],
    challenges: [
      "Web Audio API 브라우저 호환성 문제 해결 및 Safari 지원 구현",
      "JWT 토큰 갱신 중 동시 요청 처리 및 요청 큐 시스템 구현",
      "3D 캐러셀 성능 최적화 및 GPU 가속을 통한 프레임 저하 방지",
      "복잡한 상태 관리 구조 최적화 및 캐싱 전략 수립",
    ],
    demo: "https://www.youtube.com/watch?v=TZXWQVrrv0A",
    tags: [
      "AI",
      "Music",
      "BigData",
      "React",
      "Spring Boot",
      "FastAPI",
      "Team Project",
    ],
  },
  {
    id: 4,
    title: "개인 포트폴리오 웹사이트",
    description: "React + Tailwind CSS로 구축한 인터랙티브 포트폴리오",
    longDescription:
      "React와 Tailwind CSS를 활용하여 제작한 개인 포트폴리오 웹사이트입니다. Intersection Observer API 기반 스크롤 애니메이션, 타이핑 효과, 3D 호버 이펙트 등 다양한 인터랙티브 요소를 구현하여 사용자 경험을 극대화했습니다. 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, 완전한 반응형 디자인으로 모든 디바이스에서 최적화된 화면을 제공합니다.",
    role: "프론트엔드 개발 (React 기반 SPA 구현, 컴포넌트 설계, 인터랙티브 UI 개발)",
    tech: [
      "React 19",
      "Vite",
      "React Router v7",
      "Tailwind CSS",
      "PostCSS",
      "Lucide Icons",
      "Intersection Observer API",
      "ESLint",
      "Git",
    ],
    techDetails: [
      {
        name: "React 19",
        reason:
          "최신 버전의 성능 개선사항을 활용하고 포스트포넌트(Hooks) 기반 아키텍처 채택",
      },
      {
        name: "Vite",
        reason: "빠른 개발 서버와 HMR로 개발 생산성 향상",
      },
      {
        name: "Tailwind CSS",
        reason:
          "유틸리티 퍼스트 방식으로 빠른 스타일링과 일관된 디자인 시스템 구축",
      },
      {
        name: "Intersection Observer API",
        reason: "스크롤 이벤트 대신 성능 최적화된 스크롤 애니메이션 구현",
      },
    ],
    image: null, // TODO: 프로젝트 완성 후 스크린샷 추가 예정
    github: "https://github.com/kiwookyung/Ki_Portfolio",
    period: "2025.09 - 2025.10",
    teamSize: "1명 (개인 프로젝트)",
    achievements: [
      "React 19와 Vite를 활용한 현대적인 프론트엔드 개발 환경 구축",
      "Intersection Observer API를 통한 성능 최적화된 스크롤 애니메이션 구현",
      "Tailwind CSS를 활용한 일관된 디자인 시스템 및 반응형 레이아웃 설계",
      "컴포넌트 기반 아키텍처로 재사용성과 유지보수성 극대화",
      "타이핑 효과, 3D 호버 이펙트 등 인터랙티브 UI 요소 구현",
    ],
    challenges: [
      "Tailwind CSS 유틸리티 클래스 관리 및 코드 가독성 개선",
      "스크롤 애니메이션 성능 최적화 및 Intersection Observer 커스텀 훅 구현",
      "확장 가능한 프로젝트 데이터 구조 설계 및 관리 체계 구축",
    ],
    demo: "https://kiwookyung.github.io/",
    tags: ["Frontend", "React", "Tailwind CSS", "Personal"],
  },
];
