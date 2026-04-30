"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "My Journey" },
  { href: "/upload", label: "Upload" },
  { href: "/profile", label: "Profile" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-green-800">
          <Image
            src="/images/icons8-camera-50.png"
            alt="Camera Icon"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          NYSC Memories
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
        >
          Menu
        </button>

        <nav
          id="main-nav"
          className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden md:block"}`}
        >
          <ul className="flex flex-col gap-3 text-sm font-semibold md:flex-row md:items-center md:gap-5 md:text-base">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={isActive ? "text-green-800" : "text-gray-600 hover:text-green-700"}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
