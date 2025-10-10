# 기우경의 포트폴리오

데이터 기반 문제 해결과 사용자 중심 서비스를 만드는 프론트엔드 개발자 기우경의 포트폴리오 웹사이트입니다.

## 🚀 프로젝트 소개

이 포트폴리오는 React와 Tailwind CSS를 사용하여 구축되었으며, 다음과 같은 특징을 가지고 있습니다:

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **모던한 UI/UX**: 최신 디자인 트렌드를 반영한 깔끔하고 직관적인 인터페이스
- **인터랙티브 요소**: 부드러운 애니메이션과 호버 효과
- **접근성**: 모든 사용자가 쉽게 이용할 수 있는 웹 접근성 고려

## 🛠️ 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (권장)

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/          # 공통 컴포넌트
│   │   │   ├── Navbar.jsx   # 네비게이션 바
│   │   │   └── Footer.jsx   # 푸터
│   │   └── sections/        # 페이지 섹션
│   │       ├── HeroSection.jsx      # 메인 히어로 섹션
│   │       ├── AboutSection.jsx     # 자기소개 섹션
│   │       ├── ProjectsSection.jsx  # 프로젝트 섹션
│   │       ├── SkillsSection.jsx    # 기술 스택 섹션
│   │       ├── CareerSection.jsx    # 경력 섹션
│   │       └── ContactSection.jsx   # 연락처 섹션
│   ├── data/                # 데이터 파일
│   │   ├── personal.js      # 개인 정보
│   │   ├── projects.js      # 프로젝트 데이터
│   │   ├── skills.js        # 기술 스택 데이터
│   │   └── career.js        # 경력 데이터
│   ├── pages/               # 페이지 컴포넌트
│   │   └── HomePage.jsx     # 메인 홈페이지
│   ├── App.jsx              # 메인 앱 컴포넌트
│   └── main.jsx             # 진입점
├── public/                  # 정적 파일
├── tailwind.config.js       # Tailwind CSS 설정
└── package.json             # 프로젝트 의존성
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**

   ```bash
   git clone [repository-url]
   cd portfolio
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

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 📝 커스터마이징

### 개인 정보 수정

`src/data/personal.js` 파일에서 다음 정보를 수정하세요:

- 이름, 직함, 자기소개
- 연락처 정보 (이메일, 전화번호, 위치)
- 소셜 미디어 링크
- 강점 및 관심 분야

### 프로젝트 정보 수정

`src/data/projects.js` 파일에서 프로젝트 정보를 수정하세요:

- 프로젝트 제목, 설명, 역할
- 사용 기술 스택
- GitHub 및 데모 링크
- 프로젝트 기간 및 팀 규모

### 기술 스택 수정

`src/data/skills.js` 파일에서 기술 스택을 수정하세요:

- 기술명 및 숙련도 (0-100%)
- 기술 카테고리 (Frontend, Backend, Tools, AI)
- 각 기술에 맞는 아이콘

### 경력 정보 수정

`src/data/career.js` 파일에서 경력 정보를 수정하세요:

- 교육 및 프로젝트 경험
- 수상 및 자격증 정보
- 타임라인 형식의 경력 흐름

## 🎨 디자인 커스터마이징

### 색상 테마

`tailwind.config.js` 파일에서 색상 테마를 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 더 많은 색상
  }
}
```

### 폰트 변경

Google Fonts에서 원하는 폰트를 선택하고 `src/index.css`에서 import하여 변경할 수 있습니다.

## 📱 반응형 디자인

이 포트폴리오는 다음 브레이크포인트를 지원합니다:

- **Mobile**: 640px 이하
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px 이상

## 🚀 배포

### Vercel (권장)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정

### Netlify

1. [Netlify](https://netlify.com)에 가입
2. GitHub 저장소 연결
3. 빌드 명령어: `npm run build`
4. 배포 디렉토리: `dist`

### GitHub Pages

1. `package.json`에 `homepage` 필드 추가
2. `gh-pages` 패키지 설치
3. 배포 스크립트 실행

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: kiwoogeong@gmail.com
- **GitHub**: [@kiwoogeong](https://github.com/kiwoogeong)
- **LinkedIn**: [기우경](https://linkedin.com/in/kiwoogeong)
- **블로그**: [네이버 블로그](https://blog.naver.com/kiwoogeong)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
