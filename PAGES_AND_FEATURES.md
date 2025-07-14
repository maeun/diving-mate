# Diving Mate - 페이지 및 기능 명세서

---

> **[업데이트 안내]**
>
> `/instructor` 및 `/resort` 관련 페이지는 개별 상세 페이지(`instructor/[id]`, `resort/[id]`)로 구현되어 있으며, 본 문서에서는 해당 페이지의 기능 개발, API 연동, UI/UX 통일 및 고도화, 페이지 간 연계 등 모든 변경 및 확장 사항을 지속적으로 관리합니다. 각 페이지별 상세 명세, UI/UX 정책, 데이터 모델, API, 상태 관리 등은 아래 각 섹션에서 최신 상태로 유지됩니다. (최종 반영일: 최신)

## 📋 목차

1. [페이지 구조](#페이지-구조)
2. [공통 컴포넌트](#공통-컴포넌트)
3. [페이지별 상세 명세](#페이지별-상세-명세)
4. [기능별 상세 명세](#기능별-상세-명세)
5. [데이터 모델](#데이터-모델)
6. [API 엔드포인트](#api-엔드포인트)
7. [상태 관리](#상태-관리)
8. [성능 최적화](#성능-최적화)

---

## 📄 페이지 구조

### 1. 공개 페이지 (인증 불필요)

```
/                           # 메인 페이지
/search                    # 검색 결과 페이지 (구현됨)
/instructor/[id]           # 강사 프로필 상세 (구현됨)
/resort/[id]               # 리조트 프로필 상세
/auth/login                # 로그인 페이지
/auth/register             # 회원가입 페이지
/about                     # 서비스 소개
/terms                     # 이용약관
/privacy                   # 개인정보처리방침
```

### 2. 인증 필요 페이지

```
/dashboard                  # 대시보드 (강사/리조트)
/profile                    # 내 프로필 관리
/favorites                  # 찜 목록
/messages                   # 메시지 관리
/settings                   # 설정
```

### 3. 관리자 페이지

```
/admin                      # 관리자 대시보드
/admin/users                # 사용자 관리
/admin/instructors          # 강사 승인 관리
/admin/resorts              # 리조트 승인 관리
/admin/reports              # 신고 관리
/admin/faq                  # FAQ 관리
```

---

## 🧩 공통 컴포넌트

### 1. 레이아웃 컴포넌트

- `Header` - 네비게이션, 로그인 상태, 검색바
- `Footer` - 링크, 소셜 미디어, 연락처
- `Layout` - 전체 레이아웃 래퍼
- `LoadingSpinner` - 로딩 상태
- `ErrorBoundary` - 에러 처리

### 2. UI 컴포넌트 (shadcn/ui 기반)

- `Button` - 다양한 스타일의 버튼
- `Card` - 카드 레이아웃
- `Input` - 입력 필드
- `Select` - 선택 드롭다운
- `Modal` - 모달 다이얼로그
- `Toast` - 알림 메시지
- `Pagination` - 페이지네이션
- `Rating` - 평점 표시
- `Map` - 지도 컴포넌트

### 3. 비즈니스 컴포넌트

- `InstructorCard` - 강사 카드
- `ResortCard` - 리조트 카드
- `SearchBar` - 검색바
- `FilterPanel` - 필터 패널
- `ComparisonTable` - 비교 테이블
- `ProfileForm` - 프로필 폼
- `ImageGallery` - 이미지 갤러리
- `ContactForm` - 문의 폼
- `TestimonialsCarousel` - 후기 캐러셀 (3개 카드(데스크탑)/1개 카드(모바일), 가운데 카드 강조, 양쪽 흐림, 무한 슬라이드, 인디케이터/화살표 없음, 그림자 자연스러움, 카드가 바닥에 닿지 않음, Tailwind 반응형 기준 적용)

---

## 📄 페이지별 상세 명세

### 1. 메인 페이지 (`/`)

#### 목적

- 서비스 소개 및 첫인상 제공
- 빠른 검색 기능
- 인기 강사/리조트 노출
- 신규 등록 정보 하이라이트

#### 구성 요소

```typescript
interface MainPage {
  hero: {
    title: string;
    subtitle: string;
    searchBar: SearchBar;
    background: GradientBackground;
  };
  featured: {
    instructors: InstructorCard[];
    resorts: ResortCard[];
  };
  stats: {
    totalInstructors: number;
    totalResorts: number;
    totalUsers: number;
  };
  testimonials: Testimonial[];
  cta: CallToAction;
}
```

#### 기능

- **Hero 검색**: 키워드/지역 기반 빠른 검색
- **인기 콘텐츠**: 조회수/찜 수 기반 인기 강사/리조트
- **신규 등록**: 최근 7일 내 등록된 강사/리조트
- **통계/소개 섹션 제거**: 메인에서 통계/소개(강사/리조트/이용자 수 등) 섹션은 더 이상 노출하지 않음
- **후기 하이라이트**: 사용자 후기 캐러셀(3개 카드(데스크탑)/1개 카드(모바일), 가운데 카드 강조, 양쪽 흐림, 무한 슬라이드, 인디케이터/화살표 없음, 그림자 자연스러움, 카드가 바닥에 닿지 않음, Tailwind 반응형 기준 적용)

---

### 2. 검색 결과 페이지 (`/search`)

- 검색 쿼리 및 결과 요약(강사/리조트 수)
- 강사/리조트 결과를 section별로 구분하여 표시
- InstructorCard, ResortCard를 활용한 반응형 그리드
- 필터 패널(placeholder, 추후 확장)
- shadcn/ui, Tailwind CSS 스타일 적용
- 모바일-퍼스트, 반응형 레이아웃
- 현재 mock data 기반, API 연동 및 고도화 준비

### 3. 강사 프로필 상세 페이지 (`/instructor/[id]`)

- 강사 아바타, 이름, 자격증, 경력, 위치, 평점, 후기 수, 전문분야, 가격, 소개
- 인스타그램 링크(등록 시 노출, SNS 연동 확장 가능)
- 포트폴리오/갤러리(placeholder)
- 후기/평점(placeholder)
- 문의/찜하기 CTA 버튼
- 반응형, shadcn/ui + Tailwind CSS 스타일
- 현재 mock data 기반, API 연동 및 고도화 준비

---

## UI/UX 가이드 및 반응형 정책

- **후기 캐러셀**: 3개 카드(데스크탑)/1개 카드(모바일), 가운데 카드 강조(scale, opacity), 양쪽 카드는 흐림(opacity-40). 인디케이터/화살표 없이 자동 무한 슬라이드. 카드가 바닥에 닿지 않고 그림자 효과가 자연스럽게 보이도록 충분한 상하 여백 및 수직 가운데 정렬. Tailwind 반응형 기준(640px 미만 1장, 그 이상 3장) 적용.
- **카드형 리스트**: 흰색 카드·섀도·라운드, hover scale·shadow, 반응형 그리드(모바일 1열 → 태블릿 2열 → 데스크탑 3‑4열)
- **shadcn/ui + Tailwind CSS** 조합의 일관된 스타일
- **일관된 스타일/정책**: 앞으로도 모든 UI/UX, 기능, 반응형 정책은 이 원칙을 지속적으로 따른다.

---

## 📱 반응형 디자인

### 브레이크포인트

```css
/* 모바일 */
@media (max-width: 639px) {
}
/* 태블릿 */
@media (min-width: 640px) and (max-width: 1023px) {
}
/* 데스크탑 */
@media (min-width: 1024px) {
}
/* 대형 화면 */
@media (min-width: 1440px) {
}
```

- **모바일**: 1열, 후기 캐러셀 1장
- **태블릿**: 2열
- **데스크탑**: 3~4열, 후기 캐러셀 3장
- **대형 화면**: 4~5열

---

## 기타

- 통계/소개(강사/리조트/이용자 수 등) 섹션은 메인에서 제거됨
- 후기 캐러셀, 카드형 리스트 등은 shadcn/ui + Tailwind CSS 조합으로 구현하며, 일관된 스타일 가이드와 반응형 정책을 지속적으로 유지함

---

## ⚙️ 기능별 상세 명세

### 1. 인증 시스템

#### Firebase Authentication

```typescript
interface AuthService {
  // 이메일 로그인
  signInWithEmail(email: string, password: string): Promise<User>;

  // 소셜 로그인
  signInWithGoogle(): Promise<User>;
  signInWithApple(): Promise<User>;
  signInWithKakao(): Promise<User>;

  // 회원가입
  signUp(email: string, password: string, userData: UserData): Promise<User>;

  // 로그아웃
  signOut(): Promise<void>;

  // 비밀번호 재설정
  resetPassword(email: string): Promise<void>;

  // 사용자 상태 감지
  onAuthStateChanged(callback: (user: User | null) => void): () => void;
}
```

#### 사용자 타입

```typescript
interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  userType: "consumer" | "instructor" | "resort";
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
}

interface UserData {
  name: string;
  userType: "consumer" | "instructor" | "resort";
  phone?: string;
  location?: string;
}
```

### 2. 검색 및 필터링

#### 검색 엔진

```typescript
interface SearchService {
  // 기본 검색
  search(query: string, filters: SearchFilters): Promise<SearchResult>;

  // 자동완성
  getSuggestions(query: string): Promise<string[]>;

  // 인기 검색어
  getPopularSearches(): Promise<string[]>;

  // 검색 기록
  saveSearchHistory(query: string): Promise<void>;
  getSearchHistory(): Promise<string[]>;
}

interface SearchFilters {
  location?: string;
  type?: "instructor" | "resort" | "all";
  priceRange?: { min: number; max: number };
  rating?: number;
  certification?: string[];
  services?: string[];
  distance?: number;
}

interface SearchResult {
  instructors: Instructor[];
  resorts: Resort[];
  total: number;
  hasMore: boolean;
}
```

#### 필터링 시스템

```typescript
interface FilterService {
  // 지역 필터
  getLocations(): Promise<Location[]>;

  // 자격증 필터
  getCertifications(): Promise<Certification[]>;

  // 서비스 필터
  getServices(): Promise<Service[]>;

  // 가격 범위
  getPriceRanges(): Promise<PriceRange[]>;
}
```

### 3. 프로필 관리

#### 강사 프로필

```typescript
interface InstructorProfileService {
  // 프로필 생성
  createProfile(data: InstructorProfileData): Promise<string>;

  // 프로필 조회
  getProfile(id: string): Promise<InstructorProfile>;

  // 프로필 업데이트
  updateProfile(
    id: string,
    data: Partial<InstructorProfileData>
  ): Promise<void>;

  // 프로필 승인
  approveProfile(id: string): Promise<void>;
  rejectProfile(id: string, reason: string): Promise<void>;

  // 통계 조회
  getStats(id: string): Promise<InstructorStats>;
}

interface InstructorProfileData {
  basic: {
    name: string;
    avatar: string;
    location: string;
    description: string;
    instagram?: string; // SNS 연동 필드 추가
  };
  certification: {
    level: string;
    organization: string;
    year: number;
    certificateImage: string;
  };
  experience: {
    years: number;
    totalDives: number;
    specialties: string[];
  };
  services: {
    courses: Course[];
    prices: Price[];
    availability: Availability[];
  };
  gallery: {
    images: string[];
    videos: string[];
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
    socialMedia?: SocialMedia;
  };
}
```

#### 리조트 프로필

```typescript
interface ResortProfileService {
  // 프로필 생성
  createProfile(data: ResortProfileData): Promise<string>;

  // 프로필 조회
  getProfile(id: string): Promise<ResortProfile>;

  // 프로필 업데이트
  updateProfile(id: string, data: Partial<ResortProfileData>): Promise<void>;

  // 프로필 승인
  approveProfile(id: string): Promise<void>;
  rejectProfile(id: string, reason: string): Promise<void>;

  // 통계 조회
  getStats(id: string): Promise<ResortStats>;
}

interface ResortProfileData {
  basic: {
    name: string;
    logo: string;
    location: string;
    description: string;
  };
  facilities: {
    description: string;
    amenities: string[];
    images: string[];
  };
  packages: Package[];
  services: {
    diving: Service[];
    accommodation: Service[];
    transportation: Service[];
  };
  gallery: {
    images: string[];
    videos: string[];
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
    address: string;
  };
}
```

### 4. 찜하기 시스템

```typescript
interface FavoriteService {
  // 찜하기 추가
  addToFavorites(type: "instructor" | "resort", id: string): Promise<void>;

  // 찜하기 제거
  removeFromFavorites(type: "instructor" | "resort", id: string): Promise<void>;

  // 찜 목록 조회
  getFavorites(type?: "instructor" | "resort"): Promise<Favorite[]>;

  // 찜 여부 확인
  isFavorited(type: "instructor" | "resort", id: string): Promise<boolean>;
}

interface Favorite {
  id: string;
  type: "instructor" | "resort";
  itemId: string;
  addedAt: Timestamp;
  item: Instructor | Resort;
}
```

### 5. 문의 시스템

```typescript
interface InquiryService {
  // 문의 생성
  createInquiry(data: InquiryData): Promise<string>;

  // 문의 조회
  getInquiries(userId: string): Promise<Inquiry[]>;

  // 문의 응답
  respondToInquiry(inquiryId: string, response: string): Promise<void>;

  // 문의 상태 업데이트
  updateInquiryStatus(inquiryId: string, status: InquiryStatus): Promise<void>;
}

interface InquiryData {
  type: "instructor" | "resort";
  targetId: string;
  subject: string;
  message: string;
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
  };
}

interface Inquiry {
  id: string;
  type: "instructor" | "resort";
  targetId: string;
  subject: string;
  message: string;
  status: InquiryStatus;
  createdAt: Timestamp;
  respondedAt?: Timestamp;
  response?: string;
  contactInfo: ContactInfo;
}
```

### 6. 후기 및 평점 시스템

```typescript
interface ReviewService {
  // 후기 작성
  createReview(data: ReviewData): Promise<string>;

  // 후기 조회
  getReviews(
    targetId: string,
    type: "instructor" | "resort"
  ): Promise<Review[]>;

  // 후기 수정
  updateReview(reviewId: string, data: Partial<ReviewData>): Promise<void>;

  // 후기 삭제
  deleteReview(reviewId: string): Promise<void>;

  // 평점 계산
  calculateAverageRating(targetId: string): Promise<number>;
}

interface ReviewData {
  targetId: string;
  type: "instructor" | "resort";
  rating: number;
  title: string;
  content: string;
  images?: string[];
}

interface Review {
  id: string;
  targetId: string;
  type: "instructor" | "resort";
  authorId: string;
  authorName: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
```

---

## 🗄️ 데이터 모델

### Firestore 컬렉션 구조

```
/users/{userId}
  - email: string
  - displayName: string
  - photoURL: string
  - userType: 'consumer' | 'instructor' | 'resort'
  - createdAt: timestamp
  - lastLoginAt: timestamp
  - profile: UserProfile

/instructors/{instructorId}
  - userId: string
  - basic: InstructorBasic
    - instagram?: string // SNS 연동 필드
  - certification: Certification
  - experience: Experience
  - services: Service[]
  - gallery: Gallery
  - contact: ContactInfo
  - stats: InstructorStats
  - status: 'pending' | 'approved' | 'rejected'
  - createdAt: timestamp
  - updatedAt: timestamp

/resorts/{resortId}
  - userId: string
  - basic: ResortBasic
  - facilities: Facilities
  - packages: Package[]
  - services: Service[]
  - gallery: Gallery
  - contact: ContactInfo
  - stats: ResortStats
  - status: 'pending' | 'approved' | 'rejected'
  - createdAt: timestamp
  - updatedAt: timestamp

/favorites/{favoriteId}
  - userId: string
  - type: 'instructor' | 'resort'
  - itemId: string
  - addedAt: timestamp

/inquiries/{inquiryId}
  - userId: string
  - type: 'instructor' | 'resort'
  - targetId: string
  - subject: string
  - message: string
  - status: 'pending' | 'responded' | 'closed'
  - contactInfo: ContactInfo
  - response?: string
  - createdAt: timestamp
  - respondedAt?: timestamp

/reviews/{reviewId}
  - userId: string
  - targetId: string
  - type: 'instructor' | 'resort'
  - rating: number
  - title: string
  - content: string
  - images?: string[]
  - createdAt: timestamp
  - updatedAt?: timestamp

/search_history/{historyId}
  - userId: string
  - query: string
  - filters: SearchFilters
  - createdAt: timestamp
```

---

## 🔌 API 엔드포인트

### 인증 API

```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
POST /api/auth/reset-password
GET /api/auth/me
```

### 검색 API

```
GET /api/search?q={query}&filters={filters}
GET /api/search/suggestions?q={query}
GET /api/search/popular
```

### 프로필 API

```
GET /api/instructors/{id}   # 강사 상세 조회 (SNS 포함)
POST /api/instructors
PUT /api/instructors/{id}
GET /api/resorts/{id}
POST /api/resorts
PUT /api/resorts/{id}
```

### 찜하기 API

```
POST /api/favorites
DELETE /api/favorites/{id}
GET /api/favorites
```

### 문의 API

```
POST /api/inquiries
GET /api/inquiries
PUT /api/inquiries/{id}/respond
```

### 후기 API

```
POST /api/reviews
GET /api/reviews
PUT /api/reviews/{id}
DELETE /api/reviews/{id}
```

---

## 🎯 상태 관리

### Zustand 스토어 구조

```typescript
// 인증 스토어
interface AuthStore {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (userData: UserData) => Promise<void>;
}

// 검색 스토어
interface SearchStore {
  query: string;
  filters: SearchFilters;
  results: SearchResult;
  isLoading: boolean;
  search: (query: string, filters: SearchFilters) => Promise<void>;
  updateFilters: (filters: Partial<SearchFilters>) => void;
}

// 찜하기 스토어
interface FavoriteStore {
  favorites: Favorite[];
  isLoading: boolean;
  addToFavorites: (type: "instructor" | "resort", id: string) => Promise<void>;
  removeFromFavorites: (
    type: "instructor" | "resort",
    id: string
  ) => Promise<void>;
  isFavorited: (type: "instructor" | "resort", id: string) => boolean;
}

// UI 스토어
interface UIStore {
  theme: "light" | "dark";
  sidebarOpen: boolean;
  modal: ModalState | null;
  toast: Toast[];
  setTheme: (theme: "light" | "dark") => void;
  toggleSidebar: () => void;
  showModal: (modal: ModalState) => void;
  hideModal: () => void;
  showToast: (toast: Toast) => void;
  hideToast: (id: string) => void;
}
```

---

## ⚡ 성능 최적화

### 1. 이미지 최적화

- Next.js Image 컴포넌트 사용
- WebP 포맷 지원
- 자동 리사이징
- Lazy loading

### 2. 코드 스플리팅

- 페이지별 코드 스플리팅
- 컴포넌트별 동적 임포트
- 라우트별 청크 분리

### 3. 캐싱 전략

- Firebase 캐싱
- 브라우저 캐싱
- CDN 활용

### 4. SEO 최적화

- 메타 태그 자동 생성
- 구조화 데이터 (JSON-LD)
- 사이트맵 자동 생성
- robots.txt 설정

### 5. 성능 모니터링

- Lighthouse 성능 측정
- Core Web Vitals 모니터링
- 사용자 경험 분석

---

## 📱 반응형 디자인

### 브레이크포인트

```css
/* 모바일 */
@media (max-width: 639px) {
}
/* 태블릿 */
@media (min-width: 640px) and (max-width: 1023px) {
}
/* 데스크탑 */
@media (min-width: 1024px) {
}
/* 대형 화면 */
@media (min-width: 1440px) {
}
```

- **모바일**: 1열, 후기 캐러셀 1장
- **태블릿**: 2열
- **데스크탑**: 3~4열, 후기 캐러셀 3장
- **대형 화면**: 4~5열

---

## 🔒 보안 고려사항

### 1. 인증 보안

- Firebase Auth 활용
- JWT 토큰 관리
- 소셜 로그인 보안

### 2. 데이터 보안

- Firestore 보안 규칙
- 사용자 권한 관리
- 민감 정보 암호화

### 3. 입력 검증

- 클라이언트/서버 양쪽 검증
- XSS 방지
- SQL 인젝션 방지

---

## 🧪 테스트 전략

### 1. 단위 테스트

- 컴포넌트 테스트
- 유틸리티 함수 테스트
- 커스텀 훅 테스트

### 2. 통합 테스트

- API 엔드포인트 테스트
- 인증 플로우 테스트
- 검색 기능 테스트

### 3. E2E 테스트

- 사용자 시나리오 테스트
- 크로스 브라우저 테스트
- 성능 테스트

---

이 문서는 Diving Mate 프로젝트의 모든 페이지와 기능에 대한 상세한 명세를 제공합니다. 개발 과정에서 이 문서를 참조하여 일관성 있는 구현을 진행할 수 있습니다.
