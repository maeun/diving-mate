import Link from "next/link";
import { Button } from "./ui/button";
import { Compass } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Compass className="text-blue-600" size={28} />
          <span className="font-bold text-xl tracking-tight text-blue-700">
            DiveConnect
          </span>
        </div>
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <Link href="/instructors" className="hover:underline">
            강사
          </Link>
          <Link href="/resorts" className="hover:underline">
            리조트
          </Link>
        </nav>
        <Button variant="outline">로그인</Button>
      </div>
    </header>
  );
}
