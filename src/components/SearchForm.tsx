"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";

export function SearchForm() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("search") as string;
    console.log("Search query:", query);
    // TODO: Implement search functionality
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-2 shadow-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            name="search"
            type="text"
            placeholder="지역, 강사명, 리조트명으로 검색 (예: 제주, PADI, 블루오션)"
            className="w-full pl-12 pr-4 py-4 text-lg border-0 focus:outline-none focus:ring-0 rounded-xl"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700"
        >
          검색하기
        </Button>
      </div>
    </form>
  );
}
