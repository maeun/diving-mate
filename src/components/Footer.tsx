import { Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-black py-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <div className="flex items-center gap-2 text-gray-500">
          <Waves size={20} className="text-blue-400" />
          <span>© 2024 DiveConnect. All rights reserved.</span>
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="/privacy" className="hover:underline">
            개인정보처리방침
          </a>
          <a href="/terms" className="hover:underline">
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
