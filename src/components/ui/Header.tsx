// Header Component

import React from "react";
import Image from "next/image";

const Navs = [
  { name: "About", href: "/" },
  { name: "Products", href: "/" },
  { name: "Contact", href: "/" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className="text-xl font-extralight pl-2">
              VIRTUALBYTE
            </span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {Navs.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className="text-sm font-light text-gray-300 hover:text-gray-200"
            >
              {nav.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
