///This handles the purchase course page

///Libraries -->
import PurchaseCourse from "@/components/purchaseCourse/PurchaseCourse"; 
import { courses } from "@/config/database";
import { ICourse } from "@/config/interfaces";
import { toLowerDash, getCourse } from "@/config/utils";

///Commencing the code -->

/**
 * @title Purchase Course page
 */
export default async function PurchaseCoursePage(req: { params: { course: string}, searchParams: { query: string}}) {
    //console.log("Req: ", req.params.course)
    const courseInfo: ICourse | undefined = getCourse(req.params.course)

    return (
      <main className="purchase_course">
        <PurchaseCourse course_={courseInfo} />
      </main>
    )
  }