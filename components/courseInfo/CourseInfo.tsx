"use client"
///Course Info component

///Libraries -->
import styles from "./courseInfo.module.scss"
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import { courses } from "@/config/database";
import { useState, MouseEvent } from "react";
import { ICourse } from "@/config/interfaces";
import bdt from "@/public/images/bdt.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import frontend from "@/public/images/frontend.png"
import { useRouter } from "next/navigation";
import { toLowerDash } from "@/config/utils";

///Commencing the code 

/**
 * @title Course Info Component
 * @returns The Course Info component
 */
const CourseInfo = ({ course_ }: { course_: ICourse | undefined }) => {
    const stars = [0, 1, 2, 3, 4]
    const [course, setCourse] = useState<ICourse | undefined>(course_)
    const router = useRouter()

    ///This function is triggered when the user clicks on enroll now
    const enrollNow = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        if (course?.title) {
            router.push(`/${toLowerDash(course?.title)}/purchase-course`)
        }
    }

  return (
    <>
        <div className={styles.upper}>
            <div className={styles.path}>
                <button onClick={(e) => router.push("/")}><span>Home</span></button>
                <KeyboardArrowRightIcon className={styles.icon} />
                <span>{course?.title}</span>
                <KeyboardArrowRightIcon className={styles.icon} />
            </div>
            <div className={styles.brief}>
                <span className={styles.span1}>{course?.title}</span>
                <span className={styles.span2}>{course?.description}</span>
            </div>
            <div className={styles.info}>
                <div className={styles.rating}>
                    <div className={styles.div}>
                        <span>{course?.rating}</span>
                        {stars.map((star, id) => (
                            <StarIcon className={styles.icon}/>
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
        <div className={styles.lower}>
            <header>
                <span className={styles.title}>COURSE: {course?.title}</span>
                <div className={styles.rating}>
                    {stars.map((star, id) => (
                        <StarBorderIcon className={styles.icon} key={id} />
                    ))}
                    <span style={{fontFamily: "Poppins"}}>Rate the course</span>
                </div>
            </header>
            <div className={styles.top}>
                <span className={styles.title}>What you will learn</span>
                <ul>
                    <li>Smart Contracts: Gain a solid understanding of what smart contracts</li>
                    <li>Writing Your First Smart Contract on Ethereum blockchain</li>
                    <li>The programming language used to write smart contracts on Ethereum</li>
                    <li>Advanced Solidity Programming  in topics like, modifiers, error handling</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <span className={styles.title}>Course contents</span>
                <div className={styles.contents}>
                    <div className={styles.content1}>
                        <span className={styles.text}>Introduction to Smart Contracts</span>
                        <button><span>Download pdf</span></button>
                    </div>
                    <div className={styles.content2}>
                        <span className={styles.text}>Solidity Basics</span>
                        <button><span>Download pdf</span></button>
                    </div>
                    <div className={styles.content3}>
                        <span className={styles.text}>Writing Your First Smart Contract</span>
                        <button><span>Download pdf</span></button>
                    </div>
                    <div className={styles.content4}>
                        <span className={styles.text}>Security Considerations</span>
                        <button><span>Download pdf</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.card1}>
                <div className={styles.imageDiv}>
                    <Image
                      className={styles.image} 
                      alt=""
                      src={course?.image ? course?.image : ""}
                    />
                </div>
                <div className={styles.brief}>
                    <div className={styles.head}>
                        <span className={styles.title}>{course?.title}</span>
                        <div className={styles.amount}>
                            <Image
                                className={styles.token} 
                                alt=""
                                src={bdt}
                            />
                            <span>2</span>
                        </div>
                    </div>
                    <span className={styles.text}>To enroll, you need Blockdemy tokens. <strong>Purchase</strong></span>
                </div>
                <button onClick={(e) => enrollNow(e)}><span>Enroll Now</span></button>
                <div className={styles.progress}>
                    <span className={styles.span1}>Your Progress</span>
                    <div className={styles.bar}>
                        <div className={styles.inner}></div>
                    </div>
                    <span className={styles.span2}>0% complete</span>
                </div>
            </div>
            <div className={styles.recent}>
            <span className={styles.span}>Recently viewed course</span>
            <div className={styles.card2}>
                <div className={styles.imageDiv}>
                    <Image
                        className={styles.image} 
                        alt=""
                        src={frontend}
                    />
                </div>
                <div className={styles.brief}>
                    <span className={styles.title}>Purchase Token</span>
                    <span className={styles.description}>Journey through the latest tools and techniques in front-end development, crafting immersive user experiences and staying at the forefront of web design innovation.</span>
                </div>
                <div className={styles.info}>
                <div className={styles.keyword}>
                    <span>Web3</span>
                </div>
                <div className={styles.rate}>
                    <StarIcon className={styles.icon} />
                    <span className={styles.figure}>4.2</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default CourseInfo;