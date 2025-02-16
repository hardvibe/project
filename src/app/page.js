'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTopButton from "./components/ScrollToTopButton";
import Modal from "./components/Modal";
import Header from "./components/header/Header"
import Benefits from "./components/benifits/Benefits"
import Map from "./components/map/Map"
import Opportunities from "./components/opportunities/Opportunities"
import Projects from "./components/projects/Projects"
import BenefitsTwo from "./components/benefitsTwo/benefitsTwo"
import Partners from "./components/partners/Partners"
import Footer from "./components/footer/Footer"

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white relative">
      <Header />
      <Benefits />
      <Map />
      <Opportunities />
      <Projects />
      <BenefitsTwo />
      <Partners />
      <Footer />
    </div>
  );
}
