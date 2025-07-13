import {
  Search,
  Star,
  User,
  Building2,
  MapPin,
  Award,
  Heart,
  Users,
  TrendingUp,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { InstructorCard } from "../components/InstructorCard";
import { ResortCard } from "../components/ResortCard";
import { SearchForm } from "../components/SearchForm";
import { FeaturedInstructors } from "../components/FeaturedInstructors";
import { FeaturedResorts } from "../components/FeaturedResorts";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";

import "./globals.css";

// Mock data for instructors
const featuredInstructors = [
  {
    id: "1",
    name: "김다이버",
    location: "제주도",
    rating: 4.9,
    reviewCount: 127,
    certification: "PADI MSDT",
    experience: 8,
    specialties: ["오픈워터", "어드밴스드", "레스큐", "다이브마스터"],
    price: { min: 150000, max: 300000 },
    isFavorited: false,
  },
  {
    id: "2",
    name: "이서퍼",
    location: "부산",
    rating: 4.8,
    reviewCount: 89,
    certification: "SSI Instructor Trainer",
    experience: 12,
    specialties: ["테크니컬", "사이드마운트", "드라이슈트"],
    price: { min: 200000, max: 450000 },
    isFavorited: true,
  },
  {
    id: "3",
    name: "박오션",
    location: "강릉",
    rating: 4.7,
    reviewCount: 156,
    certification: "PADI Course Director",
    experience: 15,
    specialties: ["스쿠버", "스노클링", "자유잠수"],
    price: { min: 120000, max: 250000 },
    isFavorited: false,
  },
];

// Mock data for resorts
const featuredResorts = [
  {
    id: "1",
    name: "블루오션 리조트",
    location: "제주도",
    rating: 4.7,
    reviewCount: 234,
    facilities: ["다이빙 센터", "숙박", "레스토랑", "장비 대여"],
    packages: [
      { name: "1박 2일 패키지", price: 350000 },
      { name: "다이빙 + 숙박", price: 280000 },
    ],
    isFavorited: false,
  },
  {
    id: "2",
    name: "씨파라다이스",
    location: "동해안",
    rating: 4.6,
    reviewCount: 189,
    facilities: ["다이빙 센터", "카페", "샤워시설", "주차장"],
    packages: [
      { name: "단일 다이빙", price: 120000 },
      { name: "2다이브 패키지", price: 200000 },
    ],
    isFavorited: true,
  },
  {
    id: "3",
    name: "마린월드",
    location: "여수",
    rating: 4.8,
    reviewCount: 312,
    facilities: ["다이빙 센터", "호텔", "수영장", "스파"],
    packages: [
      { name: "럭셔리 패키지", price: 500000 },
      { name: "스탠다드 패키지", price: 320000 },
    ],
    isFavorited: false,
  },
];

// Mock testimonials (10개 이상 예시)
const testimonials = [
  {
    id: "1",
    name: "김민지",
    location: "서울",
    rating: 5,
    content:
      "처음 다이빙을 배우는데 정말 친절하고 안전하게 가르쳐주셨어요. 다음에도 꼭 이용하고 싶어요!",
    instructor: "김다이버",
  },
  {
    id: "2",
    name: "이준호",
    location: "부산",
    rating: 5,
    content:
      "블루오션 리조트에서 정말 멋진 경험을 했습니다. 시설도 깔끔하고 직원들도 친절해요.",
    resort: "블루오션 리조트",
  },
  {
    id: "3",
    name: "박서연",
    location: "대구",
    rating: 4,
    content:
      "씨파라다이스에서 처음 다이빙을 해봤는데, 정말 안전하고 재미있었어요. 추천합니다!",
    resort: "씨파라다이스",
  },
  {
    id: "4",
    name: "최영수",
    location: "제주",
    rating: 5,
    content:
      "강사님이 꼼꼼하게 챙겨주셔서 초보자도 안심하고 배울 수 있었습니다.",
    instructor: "이서퍼",
  },
  {
    id: "5",
    name: "정하늘",
    location: "광주",
    rating: 5,
    content: "장비가 모두 최신이고, 리조트 환경이 정말 쾌적했어요!",
    resort: "마린월드",
  },
  {
    id: "6",
    name: "오지현",
    location: "인천",
    rating: 4,
    content: "다이빙 후기도 많고, 예약도 편리해서 만족합니다.",
    resort: "씨파라다이스",
  },
  {
    id: "7",
    name: "이수빈",
    location: "대전",
    rating: 5,
    content: "강사님이 친절하게 설명해주셔서 두려움 없이 도전할 수 있었어요.",
    instructor: "박오션",
  },
  {
    id: "8",
    name: "김태현",
    location: "울산",
    rating: 5,
    content:
      "리조트 위치가 좋아서 교통이 편리했습니다. 다음에도 또 방문할게요!",
    resort: "블루오션 리조트",
  },
  {
    id: "9",
    name: "박지윤",
    location: "수원",
    rating: 4,
    content: "강사님이 꼼꼼하게 체크해주셔서 안전하게 다이빙할 수 있었습니다.",
    instructor: "김다이버",
  },
  {
    id: "10",
    name: "최민석",
    location: "창원",
    rating: 5,
    content: "시설이 정말 깨끗하고, 직원분들이 모두 친절했어요.",
    resort: "마린월드",
  },
];

// Mock statistics
const stats = {
  totalInstructors: 156,
  totalResorts: 89,
  totalUsers: 2347,
  totalReviews: 1247,
};

export default function HomePage() {
  const handleFavorite = (id: string) => {
    console.log("Favorite toggled:", id);
    // TODO: Implement favorite functionality
  };

  const handleViewProfile = (id: string) => {
    console.log("View profile:", id);
    // TODO: Navigate to profile page
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("search") as string;
    console.log("Search query:", query);
    // TODO: Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-accent/40 to-white py-24 px-4 text-center overflow-hidden">
        {/* subtle wave SVG pattern */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-30">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="url(#wave-gradient)"
              fillOpacity="1"
              d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-sm tracking-tight">
            스쿠버 다이빙 강사 & 리조트 비교 플랫폼
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium leading-relaxed">
            정보 비대칭을 해소하고, 나에게 맞는 다이빙 파트너를 쉽고 빠르게
            찾으세요!
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8">
            <div className="relative w-full sm:w-72">
              <input
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:outline-none text-base shadow-sm transition placeholder:text-gray-400"
                placeholder="강사명, 리조트명, 지역 등 검색"
                name="search"
                autoComplete="off"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-accent hover:to-primary transition text-lg flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              검색하기
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span className="bg-white/70 rounded-full px-3 py-1 shadow border border-gray-100">
              # 제주
            </span>
            <span className="bg-white/70 rounded-full px-3 py-1 shadow border border-gray-100">
              # PADI
            </span>
            <span className="bg-white/70 rounded-full px-3 py-1 shadow border border-gray-100">
              # 블루오션
            </span>
            <span className="bg-white/70 rounded-full px-3 py-1 shadow border border-gray-100">
              # 강사비교
            </span>
          </div>
        </div>
      </section>

      {/* Featured Instructors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
              인기 강사
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              농밀한 경험과 자격을 갖춘 전문 강사들을 만나보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-200 p-8 flex flex-col group hover:scale-[1.03]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/default-profile.png"
                    alt="김다이버"
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1 tracking-tight">
                      김다이버
                    </h3>
                    <div className="flex gap-1 mt-1">
                      <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-semibold">
                        PADI MSDT
                      </span>
                      <span className="bg-coral/20 text-coral px-2 py-0.5 rounded-full text-xs font-semibold">
                        8년 경력
                      </span>
                    </div>
                  </div>
                  <button className="ml-auto bg-white/80 rounded-full p-2 shadow hover:bg-coral transition group-hover:scale-110">
                    <svg
                      className="w-5 h-5 text-coral"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 align-middle"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <span className="font-semibold">4.9</span>
                  <span className="text-xs text-gray-400">(127개 후기)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    오픈워터
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    어드밴스드
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    레스큐
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    다이브마스터
                  </span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-primary">
                    150,000원 ~ 300,000원
                  </span>
                  <button className="bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-accent hover:to-primary shadow px-4 py-2 font-semibold">
                    프로필 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-white border border-primary text-primary font-semibold px-8 py-3 rounded-xl shadow hover:bg-primary hover:text-white transition text-lg group">
              더 많은 강사 보기
              <svg
                className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Resorts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
              인기 리조트
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              최고의 시설과 서비스를 제공하는 다이빙 리조트를 소개합니다
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-200 p-8 flex flex-col group hover:scale-[1.03]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/default-profile.png"
                    alt="블루오션 리조트"
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1 tracking-tight">
                      블루오션 리조트
                    </h3>
                    <div className="flex gap-1 mt-1">
                      <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-semibold">
                        다이빙 센터
                      </span>
                      <span className="bg-coral/20 text-coral px-2 py-0.5 rounded-full text-xs font-semibold">
                        숙박
                      </span>
                    </div>
                  </div>
                  <button className="ml-auto bg-white/80 rounded-full p-2 shadow hover:bg-coral transition group-hover:scale-110">
                    <svg
                      className="w-5 h-5 text-coral"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 align-middle"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <span className="font-semibold">4.7</span>
                  <span className="text-xs text-gray-400">(234개 후기)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    레스토랑
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    장비 대여
                  </span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-primary">350,000원</span>
                  <button className="bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-accent hover:to-primary shadow px-4 py-2 font-semibold">
                    프로필 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-white border border-primary text-primary font-semibold px-8 py-3 rounded-xl shadow hover:bg-primary hover:text-white transition text-lg group">
              더 많은 리조트 보기
              <svg
                className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 신규/추천 강사·리조트 섹션 */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              신규/추천 강사 · 리조트
            </h2>
            <div className="flex gap-2">
              <span className="bg-coral/20 text-coral px-3 py-1 rounded-full text-xs font-semibold border border-coral/30 shadow-sm mr-1 hover:bg-coral/40 hover:text-white transition">
                신규 등록
              </span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold border border-accent/30 shadow-sm mr-1 hover:bg-accent/40 hover:text-white transition">
                에디터 추천
              </span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-primary/30 shadow-sm">
                이번 주 인기
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-200 p-8 flex flex-col group hover:scale-[1.03]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/default-profile.png"
                    alt="강사/리조트"
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary">김다이버</h3>
                    <div className="flex gap-1 mt-1">
                      <span className="bg-coral/20 text-coral px-2 py-0.5 rounded-full text-xs font-semibold">
                        신규 등록
                      </span>
                      <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-semibold">
                        에디터 추천
                      </span>
                    </div>
                  </div>
                  <button className="ml-auto bg-white/80 rounded-full p-2 shadow hover:bg-coral transition group-hover:scale-110">
                    <svg
                      className="w-5 h-5 text-coral"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 align-middle"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <span className="font-semibold">4.9</span>
                  <span className="text-xs text-gray-400">(127개 후기)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    오픈워터
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    어드밴스드
                  </span>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    +1
                  </span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-primary">
                    150,000원 ~ 300,000원
                  </span>
                  <button className="bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-accent hover:to-primary shadow px-4 py-2 font-semibold">
                    프로필 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Call to Action Section */}
      <section className="py-0">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl shadow-xl py-16 px-8 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-sm">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
              강사나 리조트를 등록하고 더 많은 다이버들과 만나보세요.
              <br />
              또는 검색을 통해 나에게 맞는 다이빙 파트너를 찾아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl">
              <button className="flex-1 bg-white text-primary font-bold px-8 py-4 rounded-xl shadow hover:bg-gray-100 hover:text-accent transition text-lg border-2 border-white hover:border-accent focus:ring-2 focus:ring-accent focus:outline-none">
                강사/리조트 등록하기
              </button>
              <button className="flex-1 bg-gradient-to-r from-accent to-primary text-white font-bold px-8 py-4 rounded-xl shadow hover:from-primary hover:to-accent transition text-lg border-2 border-white hover:border-accent">
                검색하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
