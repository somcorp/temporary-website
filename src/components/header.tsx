"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-10">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-som.png" alt="Logo" width={100} height={40} />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#"
          className="text-white/80 hover:text-white text-sm font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Serviços
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white text-sm font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Quem somos
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white text-sm font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contato
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div
        id="gooey-btn"
        className="relative flex items-center group"
        style={{ filter: "url(#gooey-filter)" }}
      >
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-34 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Entre em Contato
        </button>
      </div>
    </header>
  );
}
