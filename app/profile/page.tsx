///This handles the course info page

///Libraries -->
import Profile from "@/components/profile/Profile"; 
import { ICourse } from "@/config/interfaces";
import { courses } from "@/config/database";
import { toLowerDash, getCourse } from "@/config/utils";

///Commencing the code -->

/**
 * @title Course info page
 */
export default async function ProfilePage({ params: { course } }: { params: { course: string }}) {
  const courseInfo: ICourse | undefined = getCourse(course)

    return (
      <main className="profile">
        <Profile />
      </main>
    )
  }