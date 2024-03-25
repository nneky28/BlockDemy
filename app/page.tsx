
"use client"
import React, { useContext } from "react"; // Added React import
import Hero from "@/components/hero/Hero";
import Course from "@/components/course/Course";
import WhyUs from "@/components/whyUs/WhyUs";
import CourseInfo from "@/components/courseInfo/CourseInfo";
import { DAppContext } from "@/context";
import { getCourse } from "@/config/utils";
import { ICourse } from "@/config/interfaces";


export default function Home({ params: { course } }: { params: { course: string }}) {
  const { walletConnected } = useContext(DAppContext);
  const courseInfo: ICourse | undefined = getCourse(course)


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

