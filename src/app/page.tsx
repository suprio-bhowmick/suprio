"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import QualificationSection from "@/components/QualificationSection";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const page = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <QualificationSection />
      <SkillSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default page;
