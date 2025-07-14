# Diving Mate

> **[업데이트 안내]**
>
> `/instructor` 및 `/resort` 관련 페이지(상세/목록)는 본 README 및 관련 문서에서 기능 개발, 연동, UI/UX 고도화, 페이지 간 연계 등 모든 변경 사항을 지속적으로 관리합니다. 각 페이지별 구현 현황, 구조, UI/UX 정책 등은 본 문서에 최신 상태로 반영됩니다. (최종 반영일: 최신)

스쿠버 다이빙 강사와 리조트를 위한 온라인 플랫폼입니다. 정보 비대칭을 해소하고 소비자가 강사와 리조트를 쉽고 편리하게 검색·비교·탐색할 수 있도록 돕습니다.

## 🚀 기술 스택

- **Frontend**: Next.js 15.3.5 (React 19) + TypeScript + Tailwind CSS + shadcn/ui
- **UI 라이브러리**: Radix UI + Lucide React (아이콘)
- **스타일링**: Tailwind CSS + class-variance-authority + clsx + tailwind-merge
- **개발 도구**: ESLint + Prettier + Turbopack
- **Backend & Hosting**: Firebase (Firestore, Auth, Cloud Functions, Hosting) - 예정
- **Storage**: Firebase Storage (이미지·영상) - 예정
- **지도**: Google Maps API - 예정
- **SEO**: Next.js Head 컴포넌트 + sitemap + robots.txt - 예정

## 🏃‍♂️ 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm, yarn, pnpm, 또는 bun

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 실행 (Turbopack 사용)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
│   ├── search/            # 검색 결과 페이지
│   │   └── page.tsx       # 검색 결과 구현
│   └── instructor/        # 강사 프로필 상세
│       └── [id]/          # 동적 라우트 (강사별 상세)
│           └── page.tsx   # 강사 상세 구현
├── components/             # 재사용 가능한 컴포넌트
│   ├── ui/                # shadcn/ui 컴포넌트
│   │   ├── button.tsx     # 버튼 컴포넌트
│   │   ├── card.tsx       # 카드 컴포넌트
│   │   └── badge.tsx      # 배지 컴포넌트
│   ├── Header.tsx         # 헤더 컴포넌트
│   ├── Footer.tsx         # 푸터 컴포넌트
│   ├── SearchForm.tsx     # 검색 폼
│   ├── InstructorCard.tsx # 강사 카드
│   ├── ResortCard.tsx     # 리조트 카드
│   ├── FeaturedInstructors.tsx # 인기 강사 섹션
│   ├── FeaturedResorts.tsx    # 인기 리조트 섹션
│   └── TestimonialsCarousel.tsx # 후기 캐러셀
├── lib/                   # 유틸리티 함수
│   └── utils.ts           # 공통 유틸리티
└── default_img/           # 기본 이미지
    ├── default_img_diver.png
    └── default_img_resort.png
```

## ✨ 구현된 기능

### 🎨 UI/UX 컴포넌트

- **Hero 섹션**: 그라데이션 배경과 검색바
- **카드형 리스트**: 강사/리조트 카드 (hover 효과, 반응형 그리드)
- **후기 캐러셀**: 3개 카드(데스크탑)/1개 카드(모바일), 무한 슬라이드
- **반응형 디자인**: 모바일-퍼스트 접근, Tailwind CSS 브레이크포인트 적용
- **shadcn/ui 컴포넌트**: Button, Card, Badge 등 일관된 디자인 시스템

### 📱 반응형 디자인

- **모바일 (320px~639px)**: 1열 레이아웃, 후기 캐러셀 1장
- **태블릿 (640px~1023px)**: 2열 레이아웃
- **데스크탑 (1024px~)**: 3~4열 레이아웃, 후기 캐러셀 3장

### 🎯 메인 페이지 구성

- **Hero 섹션**: 서비스 소개 및 검색 기능
- **인기 강사/리조트**: 추천 콘텐츠 표시
- **후기 하이라이트**: 사용자 후기 캐러셀
- **통계/소개 섹션 제거**: 깔끔한 UI를 위해 제거됨

### 🔍 검색 결과 페이지 (`/search`)

- 검색 쿼리 및 결과 요약(강사/리조트 수)
- 강사/리조트 결과를 섹션별로 구분하여 표시
- InstructorCard, ResortCard를 활용한 반응형 그리드
- 필터 패널(placeholder, 추후 확장)
- shadcn/ui, Tailwind CSS 스타일 적용
- 모바일-퍼스트, 반응형 레이아웃
- 현재 mock data 기반, API 연동 및 고도화 준비

### 👤 강사 프로필 상세 페이지 (`/instructor/[id]`)

- 강사 아바타, 이름, 자격증, 경력, 위치, 평점, 후기 수, 전문분야, 가격, 소개
- 인스타그램 링크(등록 시 노출)
- 포트폴리오/갤러리(placeholder)
- 후기/평점(placeholder)
- 문의/찜하기 CTA 버튼
- 반응형, shadcn/ui + Tailwind CSS 스타일
- 현재 mock data 기반, API 연동 및 고도화 준비

## 🔧 개발 환경 설정

### ESLint 설정

```javascript
// eslint.config.mjs
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // ... 기타 설정
  },
];
```

### Tailwind CSS 설정

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // ... 기타 설정
};
```

## 📋 주요 기능 (예정)

### 사용자 공통

- Firebase Authentication 기반 회원가입·로그인
- 프로필 관리 (이름, 사진, 연락처, 소개 등)

### 강사·리조트

- 프로필 생성·관리 (자격증, 경력, 서비스·가격, 사진·영상)
- 데이터 분석 위젯 (조회수·찜 수·문의 수)

### 소비자

- 검색·필터링·정렬 (지역, 가격, 평점, 자격증 레벨 등)
- 관심 목록(찜) 저장·관리
- 후기·평점 작성

### 관리자

- 강사/리조트 계정 승인·관리
- 사용자 권한·신고·FAQ·공지 관리

## 🚀 배포

이 Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

## 📚 관련 문서

- [PRD.md](./PRD.md) - 프로젝트 요구사항 정의서
- [PAGES_AND_FEATURES.md](./PAGES_AND_FEATURES.md) - 페이지 및 기능 명세서
- [.cursorrules](./.cursorrules) - 개발 규칙 및 가이드라인

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
