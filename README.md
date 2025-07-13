# Diving Mate

스쿠버 다이빙 강사와 리조트를 위한 온라인 플랫폼입니다. 정보 비대칭을 해소하고 소비자가 강사와 리조트를 쉽고 편리하게 검색·비교·탐색할 수 있도록 돕습니다.

## 기술 스택

- **Frontend**: Next.js (React 18) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend & Hosting**: Firebase (Firestore, Auth, Cloud Functions, Hosting)
- **Storage**: Firebase Storage (이미지·영상)
- **지도**: Google Maps API
- **SEO**: Next.js Head 컴포넌트 + sitemap + robots.txt

## 시작하기

개발 서버를 실행하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 주요 기능

### 사용자 공통

- Firebase Authentication 기반 회원가입·로그인 (이메일 / Google·Apple 등 소셜)
- 프로필 관리 (이름, 사진, 연락처, 소개 등)

### 강사·리조트

- 프로필 생성·관리 (자격증, 경력, 서비스·가격, 사진·영상)
- 데이터 분석 위젯 (조회수·찜 수·문의 수)

### 소비자

- 검색·필터링·정렬 (지역, 가격, 평점, 자격증 레벨 등)
- 관심 목록(찜) 저장·관리
- (확장) 후기·평점 작성

### 관리자

- 강사/리조트 계정 승인·관리
- 사용자 권한·신고·FAQ·공지 관리

## 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── Header.tsx      # 헤더 컴포넌트
│   └── Footer.tsx      # 푸터 컴포넌트
└── lib/                # 유틸리티 함수
```

## 배포

이 Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
