'use client'

import NewsEvent from "./components/news-event";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Floating from "./components/floating";
import { useRef } from "react";
import Footer from "./components/footer";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div ref={topRef} className="w-full h-full">
      <Header />
      <Hero />
      <NewsEvent />
      <Feature />
      <Footer />
      <Floating onScrollToTop={scrollToTop} />
    </div>
  );
}
