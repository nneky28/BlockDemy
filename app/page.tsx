// This handles the home page
"use client"
import React, { useContext } from "react"; // Added React import

// Libraries
import Hero from "@/components/hero/Hero";
import Course from "@/components/course/Course";
import WhyUs from "@/components/whyUs/WhyUs";
import CourseInfo from "@/components/courseInfo/CourseInfo";

import { DAppContext } from "@/context";


export default function Home() {
  const { walletConnected } = useContext(DAppContext);

  return (
    <main>
      <div>
        {!walletConnected ? (
          <>
            <Hero />
            <WhyUs />
            <Course />
          </>
        ) : (
          <CourseInfo />
        )}
      </div>
    </main>
  );
}
