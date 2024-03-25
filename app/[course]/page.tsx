
// import CourseInfo from "@/components/courseInfo/CourseInfo";
// import { ICourse } from "@/config/interfaces";
// import { getCourse } from "@/config/utils";

// interface CourseInfoPageProps {
//   params: {
//     course: string;
//   };
// }

// const CourseInfoPage: React.FC<CourseInfoPageProps> = ({ params: { course } }) => {
//   const courseInfo: ICourse | undefined = getCourse(course);

//   return (
//     <main className="course_info">
//       {courseInfo ? (
//         <CourseInfo course_={undefined} /> 
//       ) : (
//         <div>No course information available</div>
//       )}
//     </main>
//   );
// }

// export default CourseInfoPage;



///This handles the course info page

///Libraries -->
import CourseInfo from "@/components/courseInfo/CourseInfo" 
import { ICourse } from "@/config/interfaces";
import { courses } from "@/config/database";
import { toLowerDash, getCourse } from "@/config/utils";

///Commencing the code -->

/**
 * @title Course info page
 */
export default async function CourseInfoPage({ params: { course } }: { params: { course: string }}) {
  const courseInfo: ICourse | undefined = getCourse(course)

    return (
      <main className="course_info">
        <CourseInfo course_={courseInfo} />
      </main>
    )
  }
