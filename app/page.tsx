
"use client"
import React, { useContext } from "react"; // Added React import
import Hero from "@/components/hero/Hero";
import Course from "@/components/course/Course";
import WhyUs from "@/components/whyUs/WhyUs";
import CourseInfo from "@/components/courseInfo/CourseInfo";
import { DAppContext } from "@/context";
import { getCourse } from "@/config/utils";
import { ICourse } from "@/config/interfaces";
import { courses } from "@/config/database";


export default function Home() {
  const { walletConnected } = useContext(DAppContext);
  const courseInfo: ICourse = courses[0]
  console.log('courseInfo', courseInfo)


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
          <CourseInfo course_={courseInfo} /> 
        )}
      </div>
    </main>
  );
}

