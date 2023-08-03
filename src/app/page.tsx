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

import Header from "@/components/ui/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col space-y-6">
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-4xl font-bold text-center">
            Under Construction
          </h1>
        </main>
      </div>
    </>
  );
}
