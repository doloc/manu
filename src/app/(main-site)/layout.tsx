'use client'

import { useRef } from "react";
import Floating from "../components/floating";
import Footer from "../components/footer";
import Header from "../components/header";

const MainSiteLayout = ({ children }: { children: React.ReactNode }) => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={topRef} className="w-full h-full">
      <Header />
      {children}
      <Footer />
      <Floating onScrollToTop={scrollToTop} />
    </div>
  );
};

export default MainSiteLayout;