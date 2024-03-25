// "use client"
// ///Purchase Token component

// ///Libraries -->
// import styles from "./purchaseToken.module.scss"
// import Image from "next/image";
// import StarIcon from '@mui/icons-material/Star';
// import { courses } from "@/config/database";
// import { useState } from "react";
// import { ICourse } from "@/config/interfaces";
// import bdt from "@/public/images/bdt.png"
// import { useRouter } from "next/navigation";
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import dots from "@/public/images/dots.png"
// import { companyName } from "@/config/utils";

// ///Commencing the code 

// /**
//  * @title Purchase Token Component
//  * @returns The Purchase Token component
//  */
// const PurchaseToken = ({ course_ }: { course_: ICourse | undefined }) => {
//     const stars = [0, 1, 2, 3, 4]
//     const [course, setCourse] = useState<ICourse | undefined>(course_)
//     const router = useRouter()
//     const [amount, setAmount] = useState<string>("")

//   return (
//     <div className={styles.main}>
//         <Image 
//             className={styles.dots}
//             alt="dots"
//             src={dots}
//         />
//         <div className={styles.path}>
//             <button onClick={(e) => router.push("/")}><span>Home</span></button>
//             <KeyboardArrowRightIcon className={styles.icon} />
//             <button onClick={(e) => router.back()}><span>{course?.title}</span></button>
//             <KeyboardArrowRightIcon className={styles.icon} />
//             <span><strong>Purchase {companyName} Token</strong></span>
//         </div>
//         <div className={styles.bottom}>
//             <div className={styles.brief}>
//                 <span className={styles.brief1}><strong>Purchase {companyName} Tokens to Enroll in courses</strong></span>
//                 <span className={styles.brief2}>Decentralized Education Empowered by Cartesi Roll Ups & Token Rewards</span>
//                 <span className={styles.brief3}>After purchasing the  token, you can go back to enroll for your courses.</span>
//             </div>
//             <div className={styles.card}>
//                 <div className={styles.logo}>
//                     <Image
//                       className={styles.image} 
//                       alt=""
//                       src={bdt}
//                     />
//                     <span>{companyName} Token</span>
//                 </div>
//                 <div className={styles.text}>
//                     <span className={styles.payment}>Payment in</span>
//                     <div className={styles.amount}>
//                         <select value={"USDT"}>
//                             <option value={"USDT"} >USDT</option>
//                         </select>
//                         <input  
//                             type="text" 
//                             placeholder="$0.00" 
//                             onChange={(e) => setAmount(() => e.target.value)}
//                             value={amount}
//                         />
//                     </div>
//                     <div className={styles.wallet}>
//                         <span className={styles.span1}>Wallet balance</span>
//                         <div className={styles.logo_}>
//                             <Image
//                                 className={styles.image_} 
//                                 alt=""
//                                 src={bdt}
//                             />
//                             <span><strong>0</strong></span>
//                         </div>
//                     </div>
//                     <div className={styles.rate}>
//                         <span className={styles.span1}>Conversion rate</span>
//                         <span className={styles.span2}><strong>1 USDT = 2 Blockdemy tokens</strong></span>
//                     </div>
//                 </div>
//                 <button><span>Buy Now</span></button>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default PurchaseToken;




"use client"
///Purchase Token component

///Libraries -->
import styles from "./purchaseToken.module.scss"
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import { courses } from "@/config/database";
import { useState, MouseEvent } from "react";
import { ICourse } from "@/config/interfaces";
import bdt from "@/public/images/bdt.png"
import { useRouter } from "next/navigation";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import dots from "@/public/images/dots.png"
import { companyName, toLowerDash } from "@/config/utils";
import { useIsEnrolledStore } from "@/config/store";

///Commencing the code 

/**
 * @title Purchase Token Component
 * @returns The Purchase Token component
 */
const PurchaseToken = ({ course_ }: { course_: ICourse | undefined }) => {
    const stars = [0, 1, 2, 3, 4]
    const [course, setCourse] = useState<ICourse | undefined>(course_)
    const router = useRouter()
    const [amount, setAmount] = useState<string>("")
    const setIsEnrolled = useIsEnrolledStore((state) => state.setIsEnrolled)

    ///This function is triggered when the buy now is clicked
    const buyToken = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        setIsEnrolled(true)     

        //Routing back to the course info with redeem reward
        let title = toLowerDash(course?.title ? course?.title : "")
        router.push(`/${title}`)
    }

  return (
    <div className={styles.main}>
        <Image 
            className={styles.dots}
            alt="dots"
            src={dots}
        />
        <div className={styles.path}>
            <button onClick={(e) => router.push("/")}><span>Home</span></button>
            <KeyboardArrowRightIcon className={styles.icon} />
            <button onClick={(e) => router.back()}><span>{course?.title}</span></button>
            <KeyboardArrowRightIcon className={styles.icon} />
            <span><strong>Purchase {companyName} Token</strong></span>
        </div>
        <div className={styles.bottom}>
            <div className={styles.brief}>
                <span className={styles.brief1}><strong>Purchase {companyName} Tokens to Enroll in courses</strong></span>
                <span className={styles.brief2}>Decentralized Education Empowered by Cartesi Roll Ups & Token Rewards</span>
                <span className={styles.brief3}>After purchasing the  token, you can go back to enroll for your courses.</span>
            </div>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <Image
                      className={styles.image} 
                      alt=""
                      src={bdt}
                    />
                    <span>{companyName} Token</span>
                </div>
                <div className={styles.text}>
                    <span className={styles.payment}>Payment in</span>
                    <div className={styles.amount}>
                        <select value={"USDT"}>
                            <option value={"USDT"} >USDT</option>
                        </select>
                        <input  
                            type="text" 
                            placeholder="$0.00" 
                            onChange={(e) => setAmount(() => e.target.value)}
                            value={amount}
                        />
                    </div>
                    <div className={styles.wallet}>
                        <span className={styles.span1}>Wallet balance</span>
                        <div className={styles.logo_}>
                            <Image
                                className={styles.image_} 
                                alt=""
                                src={bdt}
                            />
                            <span><strong>0</strong></span>
                        </div>
                    </div>
                    <div className={styles.rate}>
                        <span className={styles.span1}>Conversion rate</span>
                        <span className={styles.span2}><strong>1 USDT = 2 Blockdemy tokens</strong></span>
                    </div>
                </div>
                <button onClick={(e) => buyToken(e)}><span>Buy Now</span></button>
            </div>
        </div>
    </div>
  );
};

export default PurchaseToken;