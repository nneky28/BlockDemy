///This handles the home page

///Libraries -->
import Hero from "@/components/hero/Hero";
import Course from "@/components/course/Course"
import WhyUs from "@/components/whyUs/WhyUs"

///Commencing the code
/**
 * @title Home Page
 * @returns The Home Page
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Course />
    </main>
  )
}
