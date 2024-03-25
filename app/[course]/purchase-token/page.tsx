import PurchaseToken from "@/components/purchaseToken/PurchaseToken"; 
import { ICourse } from "@/config/interfaces";
import {  getCourse } from "@/config/utils";


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