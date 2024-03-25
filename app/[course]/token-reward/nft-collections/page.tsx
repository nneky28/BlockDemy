///This handles the nft collection page

///Libraries -->
import NFTCollection from "@/components/nftCollection/NFTCollection";
import { courses } from "@/config/database";
import { ICourse } from "@/config/interfaces";
import { toLowerDash, getCourse } from "@/config/utils";

///Commencing the code -->

/**
 * @title NFT Collection page
 */
export default async function NFTCollectionPage(req: { params: { course: string}, searchParams: { query: string}}) {
    //console.log("Req: ", req.params.course)
    const courseInfo: ICourse | undefined = getCourse(req.params.course)

    return (
      <main className="nft_collection">
        <NFTCollection />
      </main>
    )
  }