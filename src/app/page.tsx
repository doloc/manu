'use client'

import NewsEvent from "./components/news-event";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Floating from "./components/floating";
import { Fragment, useRef } from "react";

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
      <Floating onScrollToTop={scrollToTop} />
    </div>
  );
}
