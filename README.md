# 기우경의 포트폴리오 웹사이트 🚀

> React + Tailwind CSS로 구축한 인터랙티브 포트폴리오 웹사이트

데이터 기반 문제 해결과 사용자 중심 서비스를 만드는 프론트엔드 개발자 **기우경**의 포트폴리오입니다.

[![GitHub](https://img.shields.io/badge/GitHub-kiwookyung-181717?logo=github)](https://github.com/kiwookyung)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📌 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#️-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [페이지 구성](#-페이지-구성)
- [시작하기](#-시작하기)
- [커스터마이징](#-커스터마이징)
- [배포](#-배포)
- [연락처](#-연락처)

---

## 🎯 프로젝트 소개

이 포트폴리오는 **React**와 **Tailwind CSS**를 사용하여 구축된 현대적인 웹 애플리케이션입니다.

### ✨ 특징

- 🎨 **모던한 UI/UX** - 깔끔하고 직관적인 디자인
- 📱 **완전 반응형** - 모든 디바이스에서 최적화된 경험
- ⚡ **부드러운 애니메이션** - Intersection Observer 기반 스크롤 애니메이션
- 🎭 **인터랙티브 요소** - 타이핑 효과, 3D 호버 효과
- 🔍 **프로젝트 필터링** - 기술 스택별 필터 기능
- 📦 **컴포넌트 기반** - 재사용 가능한 모듈식 구조

---

## 🎪 주요 기능

### 1. 타이핑 애니메이션

메인 히어로 섹션에서 동적인 타이핑 효과로 시선을 사로잡습니다.

### 2. 스크롤 애니메이션

Intersection Observer API를 활용하여 스크롤 시 부드러운 등장 효과를 제공합니다.

### 3. 프로젝트 필터링

기술 스택별로 프로젝트를 필터링하여 쉽게 탐색할 수 있습니다.

### 4. 반응형 디자인

모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 레이아웃을 제공합니다.

### 5. 프로젝트 모달

프로젝트 카드 클릭 시 상세 정보를 모달로 확인할 수 있습니다.

---

## 🛠️ 기술 스택

### Frontend

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **React Router v6** - 라우팅

### Styling

- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **PostCSS** - CSS 후처리기

### Icons & Assets

- **Lucide React** - 아이콘 라이브러리
- **Google Fonts (Inter)** - 웹 폰트

### Development

- **ESLint** - 코드 린팅
- **Git** - 버전 관리

---

## 📁 프로젝트 구조

```
portfolio/
├── public/                          # 정적 파일
│   └── images/                      # 프로젝트 이미지
├── src/
│   ├── components/
│   │   ├── common/                  # 공통 컴포넌트
│   │   │   ├── Navbar.jsx          # 네비게이션 바
│   │   │   ├── Footer.jsx          # 푸터
│   │   │   └── ProjectModal.jsx    # 프로젝트 모달
│   │   └── sections/                # 섹션 컴포넌트
│   │       ├── HeroSection.jsx                    # 히어로 (타이핑 효과)
│   │       ├── HighlightSkillsSection.jsx         # 주요 스킬
│   │       ├── FeaturedProjectsSection.jsx        # 추천 프로젝트
│   │       ├── ProfileSection.jsx                 # 프로필
│   │       ├── SkillsVisualizationSection.jsx     # 스킬 시각화
│   │       ├── TimelineSection.jsx                # 경력 타임라인
│   │       ├── CertificatesSection.jsx            # 수상/자격증
│   │       ├── GoalsSection.jsx                   # 목표
│   │       ├── ContactSection.jsx                 # 연락처
│   │       └── ProjectsSection.jsx                # 프로젝트 그리드
│   ├── data/                        # 데이터 파일
│   │   ├── personal.js             # 개인 정보
│   │   ├── projects.js             # 프로젝트 목록
│   │   ├── skills.js               # 기술 스택
│   │   └── career.js               # 경력 정보
│   ├── hooks/
│   │   └── useIntersectionObserver.js  # 스크롤 애니메이션 훅
│   ├── pages/                       # 페이지 컴포넌트
│   │   ├── HomePage.jsx            # 메인 페이지
│   │   ├── AboutPage.jsx           # 소개 페이지
│   │   ├── ProjectsPage.jsx        # 프로젝트 페이지
│   │   └── ExtrasPage.jsx          # 추가 링크 페이지
│   ├── App.jsx                      # 라우팅 설정
│   ├── main.jsx                     # 진입점
│   └── index.css                    # 글로벌 스타일
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📄 페이지 구성

### 🏠 Home (`/`)

**메인 랜딩 페이지**

- 타이핑 효과가 있는 히어로 섹션
- 주요 기술 스택 하이라이트
- 추천 프로젝트 (Featured Projects)
- 푸터

### 👤 About (`/about`)

**상세 자기소개**

- 개인 프로필 및 소개
- 기술 스택 시각화 (차트/그래프)
- 경력 타임라인 (교육, 프로젝트, 대회)
- 수상 경력 및 자격증
- 단기/중장기 목표
- 연락처 정보

### 💼 Projects (`/projects`)

**전체 프로젝트 목록**

- 프로젝트 총 개수 표시
- 기술 스택별 필터 (React, Vue, Django, Python, JavaScript)
- 프로젝트 그리드 레이아웃
- 프로젝트 상세 모달

### ✨ Extras (`/extras`)

**추가 링크 및 플레이그라운드**

- **Connect With Me**
  - GitHub 링크
  - Blog 링크
  - LinkedIn 링크
- **UI Playground**
  - 타이핑 애니메이션 소개
  - 스크롤 애니메이션 소개
  - 3D 호버 효과 소개
- 기술 스택 배너

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js** 16.0.0 이상
- **npm** 또는 **yarn**

### 설치 및 실행

1. **저장소 클론**

   ```bash
   git clone https://github.com/kiwookyung/Ki_Portfolio.git
   cd Ki_Portfolio
   ```

2. **의존성 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:5173
   ```

### 빌드

프로덕션 빌드 생성:

```bash
npm run build
```

빌드 결과 미리보기:

```bash
npm run preview
```

---

## 🎨 커스터마이징

### 1. 개인 정보 수정

`src/data/personal.js` 파일을 수정하세요:

```javascript
export const personalInfo = {
  name: "당신의 이름",
  title: "직함",
  profile: {
    email: "your-email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    blog: "https://your-blog.com",
    phone: "010-0000-0000",
    location: "서울특별시",
  },
  // ... 기타 정보
};
```

### 2. 프로젝트 추가/수정

`src/data/projects.js` 파일을 수정하세요:

```javascript
export const projects = [
  {
    id: 1,
    title: "프로젝트 제목",
    description: "짧은 설명",
    longDescription: "상세 설명",
    role: "담당 역할",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/project.png",
    github: "https://github.com/username/project",
    period: "2024.01 - 2024.03",
    teamSize: "4명",
    achievements: ["성과 1", "성과 2"],
  },
  // ... 더 많은 프로젝트
];
```

### 3. 기술 스택 수정

`src/data/skills.js` 파일을 수정하세요:

```javascript
export const skills = {
  frontend: [
    { name: "React", level: 90, category: "Frontend" },
    // ...
  ],
  // ...
};
```

### 4. 경력 정보 수정

`src/data/career.js` 파일을 수정하세요:

```javascript
export const career = [
  {
    id: 1,
    period: "2024.01 - 2024.12",
    title: "경력 제목",
    description: "설명",
    details: ["세부사항 1", "세부사항 2"],
    type: "education", // education, project, competition
  },
  // ...
];
```

### 5. 색상 테마 변경

`tailwind.config.js` 파일에서 색상을 커스터마이징할 수 있습니다:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        // ...
      },
    },
  },
};
```

---

## 🌐 배포

### Vercel (권장)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 완료!

### Netlify

1. [Netlify](https://netlify.com)에 가입
2. GitHub 저장소 연결
3. 빌드 설정:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### GitHub Pages

1. `package.json`에 homepage 추가:

   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. gh-pages 설치:

   ```bash
   npm install --save-dev gh-pages
   ```

3. 배포 스크립트 추가:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. 배포:
   ```bash
   npm run deploy
   ```

---

## 📱 반응형 브레이크포인트

| 디바이스 | 크기           | Tailwind 클래스 |
| -------- | -------------- | --------------- |
| Mobile   | < 640px        | 기본            |
| Tablet   | 640px - 1024px | `sm:`, `md:`    |
| Desktop  | > 1024px       | `lg:`, `xl:`    |

---

## 🎯 주요 컴포넌트

### Navbar

- 4개 페이지 링크 (Home, About, Projects, Extras)
- 반응형 모바일 메뉴
- 스크롤 시 배경 변경

### ProjectModal

- 프로젝트 상세 정보
- 기술 스택 표시
- GitHub 링크
- 성과 표시

### useIntersectionObserver Hook

- 스크롤 애니메이션 구현
- 섹션 등장 효과
- 재사용 가능한 커스텀 훅

---

## 🤝 기여하기

이 프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 라이선스

이 프로젝트는 **MIT 라이선스** 하에 배포됩니다.

---

## 📞 연락처

**기우경** - Frontend Developer

- 📧 Email: kiwookyung@naver.com
- 💻 GitHub: [@kiwookyung](https://github.com/kiwookyung)
- 💼 LinkedIn: [기우경](https://linkedin.com/in/kiwookyung)
- 📝 Blog: [네이버 블로그](https://blog.naver.com/kiwookyung)

---

## 🙏 감사의 말

이 프로젝트는 다음 기술들을 사용하여 제작되었습니다:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

---

<div align="center">

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!

**Made with ❤️ by 기우경**

</div>
