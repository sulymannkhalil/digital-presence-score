import { Suspense } from "react";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

function NavbarFallback() {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 h-16 w-full border-b border-white/10 bg-[#0F1114] sm:h-20" />
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
}

/** Shared marketing/audit chrome (navbar + main + footer). */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<NavbarFallback />}>
        <Navbar />
      </Suspense>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
