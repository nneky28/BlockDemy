"use client"
///Purchase Token component

///Libraries -->
import styles from "./purchaseToken.module.scss"
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import { courses } from "@/config/database";
import { useState } from "react";
import { ICourse } from "@/config/interfaces";
import bdt from "@/public/images/bdt.png"
import { useRouter } from "next/navigation";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import frontend from "@/public/images/frontend.png"
import { companyName } from "@/config/utils";

///Commencing the code 

/**
 * @title Purchase Token Component
 * @returns The Purchase Token component
 */
const PurchaseToken = ({ course_ }: { course_: ICourse | undefined }) => {
    const stars = [0, 1, 2, 3, 4]
    const [course, setCourse] = useState<ICourse | undefined>(course_)
    const router = useRouter()

  return (
    <div className={styles.main}>
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
                    <span>{companyName}</span>
                </div>
                <div className={styles.brief}>
                    <span className={styles.title}>{course?.title}</span>
                    <span className={styles.description}>{course?.description}</span>
                </div>
                <div className={styles.total}>
                    <span>Subtotal</span>
                    <div className={styles.amount}>
                        <Image
                            className={styles.token} 
                            alt=""
                            src={bdt}
                        />
                        <span>2</span>
                    </div>
                </div>
                <button style={{paddingRight:'20%'}}><span>Purchase Now</span></button>
            </div>
        </div>
    </div>
  );
};

export default PurchaseToken;