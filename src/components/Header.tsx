// Header Component

import React from "react";
import Image from "next/image";

const Navs = [
  { name: "About", href: "/" },
  { name: "Products", href: "/" },
  { name: "Contact", href: "/" },
];

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className="lg:text-xl text-xl font-extralight pl-2">
              VIRTUALBYTE
            </span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {Navs.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className="hidden sm:block lg:text-m text-xs font-light text-gray-300 hover:text-gray-200"
            >
              {nav.name.toUpperCase()}
            </a>
          ))}
        </div>

        <Sheet>
          <SheetTrigger className="block sm:hidden"></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
      </div>
    </header>
  );
}
