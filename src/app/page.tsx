// © VirtualByte 2023
// All Right Reserved

// Main page for VirtualByte Ltd
// With directories to other products

// - FileWizard
//    - Free for X conversions
//    - Limited metadata
//    - Limited file size (100mb)
// - FileWizard Pro
//    - Unlimited conversions with batch
//    - All metadata
//    - 2gb file size

import Header from "@/components/Header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col space-y-6">
        <Header />
        <main className="flex min-h-screen flex-col items-center p-14 lg:p-24">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Quality Solutions for Digital Excellence
          </h1>
          <p className="max-w-[42rem] text-center align-middle leading-normal text-muted-foreground sm:text-xl sm:leading-8 pt-5">
            We develop innovative Web Applications and Games
          </p>
          <div className="space-x-4 mt-20">
            <Link
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Products
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
