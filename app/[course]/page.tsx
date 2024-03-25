
import CourseInfo from "@/components/courseInfo/CourseInfo";
import { ICourse } from "@/config/interfaces";
import { getCourse } from "@/config/utils";

interface CourseInfoPageProps {
  params: {
    course: string;
  };
}

const CourseInfoPage: React.FC<CourseInfoPageProps> = ({ params: { course } }) => {
  const courseInfo: ICourse | undefined = getCourse(course);

  return (
    <main className="course_info">
      {courseInfo ? (
        <CourseInfo course_={courseInfo} /> 
      ) : (
        <div>No course information available</div>
      )}
    </main>
  );
};

export default CourseInfoPage;
