///This handles the purchase token page

///Libraries -->
import PurchaseToken from "@/components/purchaseToken/PurchaseToken"; 
import { courses } from "@/config/database";
import { ICourse } from "@/config/interfaces";
import { toLowerDash, getCourse } from "@/config/utils";

///Commencing the code -->Course

/**
 * @title Purchase Token page
 */
export default async function PurchaseTokenPage(req: { params: { course: string}, searchParams: { query: string}}) {
    //console.log("Req: ", req.params.course)
    const courseInfo: ICourse | undefined = getCourse(req.params.course)

    return (
      <main className="purchase_token">
        <PurchaseToken course_={courseInfo} />
      </main>
    )
  }