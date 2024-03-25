///This handles the redeem reward page

///Libraries -->
import TokenReward from "@/components/tokenReward/TokenReward";
import { courses } from "@/config/database";
import { ICourse } from "@/config/interfaces";
import { toLowerDash, getCourse } from "@/config/utils";

///Commencing the code -->

/**
 * @title Purchase Token page
 */
export default async function TokenRewardPage(req: { params: { course: string}, searchParams: { query: string}}) {
    //console.log("Req: ", req.params.course)
    const courseInfo: ICourse | undefined = getCourse(req.params.course)

    return (
      <main className="token_reward">
        <TokenReward course_={courseInfo} />
      </main>
    )
  }