
"use client"
///Purchase Course component

///Libraries -->
import styles from "./purchaseCourse.module.scss"
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import { useState, MouseEvent } from "react";
import { ICourse } from "@/config/interfaces";
import bdt from "@/public/images/bdt.png"
import { useRouter } from "next/navigation";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { toLowerDash } from "@/config/utils";

///Commencing the code 

/**
 * @title Purchase Course Component
 * @returns The Purchase Course component
 */
const PurchaseCourse = ({ course_ }: { course_: ICourse | undefined }) => {
    const stars = [0, 1, 2, 3, 4]
    const [course, setCourse] = useState<ICourse | undefined>(course_)
    const router = useRouter()

    ///This function is triggered when the purchase now is clicked
    const purchaseToken = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
        e.preventDefault()

        if (course?.title) {
            router.push(`/${toLowerDash(course?.title)}/purchase-token`)
        }
    }

  return (
    <div className={styles.main}>
        <div className={styles.path}>
            <button onClick={(e) => router.push("/")}><span>Home</span></button>
            <KeyboardArrowRightIcon className={styles.icon} />
            <button onClick={(e) => router.back()}><span>{course?.title}</span></button>
            <KeyboardArrowRightIcon className={styles.icon} />
            <span><strong>Purchase Course</strong></span>
        </div>
        <div className={styles.bottom}>
            <div className={styles.brief}>
                <span className={styles.brief1}>Purchase course page</span>
                <div className={styles.brief2}>
                    <span className={styles.span1}>{course?.title}</span>
                    <span className={styles.span2}>{course?.description}</span>
                </div>
                <div className={styles.info}>
                    <div className={styles.rating}>
                        <div className={styles.div}>
                            <span>{course?.rating}</span>
                            {stars.map((star, id) => (
                                <StarIcon className={styles.icon} key={id} />
                            ))}
                        </div>
                        <span className={styles.span}>(791 ratings)</span>
                    </div>
                    <div className={styles.duration}>
                        <span>Duration of the course:</span>
                        <span>7 hours</span>
                    </div>
                    <div className={styles.author}>
                        <span>Created by:</span>
                        <span>Eleanor Pena</span>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageDiv}>
                    <Image
                      className={styles.image} 
                      alt=""
                      src={course?.image ? course?.image : ""}
                    />
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
                <button onClick={(e) => purchaseToken(e)}><span>Purchase Now</span></button>
            </div>
        </div>
    </div>
  );
};

export default PurchaseCourse;
