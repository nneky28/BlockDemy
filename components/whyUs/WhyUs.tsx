"use client"
///Why Us component

///Libraries -->
import styles from "./whyUs.module.scss";
import { useRouter } from 'next/navigation';
import { companyName } from "@/config/utils";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from "next/image";
import book2 from "@/public/images/book2.png"

///Commencing the code 

/**
 * @title Why Us Component
 * @returns The Why Us component
 */
const WhyUs = () => {
    const router = useRouter()
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <div className={styles.brief}>
                <span className={styles.brief1}>Why Us?</span>
                <span className={styles.brief2}>Benefits of using {companyName}</span>
                <span className={styles.brief3}>{companyName} is a Decentralized Education Empowered by Cartesi Roll Ups & 
                    Token Rewards</span>
            </div>
            <div className={styles.buttons}>
                <button className={styles.btn1}>
                    <span>Enroll in a Course</span>
                </button>
                <button className={styles.btn2}>
                    <span>Upload Course</span>
                </button>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.reason1}>
                <div className={styles.circle}>
                    <PersonOutlineIcon className={styles.icon} />
                </div>
                <span className={styles.span1}>Scalability and Cost-Effectiveness</span>
                <span className={styles.span2}>Cartesi roll ups technology ensures scalability and cost-effectiveness, allowing users to access high-quality education without worrying about high transaction fees or network congestion.</span>
            </div>
            <div className={styles.reason2}>
                <div className={styles.circle}>
                    <PersonOutlineIcon className={styles.icon} />
                </div>           
                <span className={styles.span1}>NFT Certificate for Learning</span>
                <span className={styles.span2}>Users earn NFT certificate as they engage with the platform, including completing courses, quizzes and contributing content. These certificates serve as incentives for continuous learning and participation.</span>
            </div>
            <div className={styles.reason3}>
                <div className={styles.circle}>
                    <PersonOutlineIcon className={styles.icon} />
                </div>
                <span className={styles.span1}>Skill and Career Advancement</span>
                <span className={styles.span2}> By acquiring new skills and knowledge through {companyName}s courses, users enhance their professional capabilities, opening up opportunities for career advancement and personal growth</span>
            </div>
            <div className={styles.reason4}>
                <div className={styles.circle}>
                    <PersonOutlineIcon className={styles.icon} />
                </div>
                <span className={styles.span1}>Decentralized Education</span>
                <span className={styles.span2}>By using {companyName}, users contribute to the growth and development of decentralized education, fostering innovation and accessibility in the global learning landscape.</span>
            </div>
        </div>
        <Image
            className={styles.book2} 
            alt="books"
            src={book2}
        />
    </div>
  );
};

export default WhyUs;