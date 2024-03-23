"use client"
///Footer component

///Libraries -->
import styles from "./footer.module.scss"
import { useRouter, usePathname } from 'next/navigation';
import { companyName, domainName } from "@/config/utils";

///Commencing the code 

/**
 * @title Footer Component
 * @returns The Footer component
 */
const Footer = () => {
    const router = useRouter()
    const routerPath = usePathname();

  return (
    <>
      <div className={styles.main}>
        <div className={styles.links}>
            <div className={styles.div1}>
                <span className={styles.title}>Product</span>
                <button className={styles.link1}><span>Features</span></button>
                <button className={styles.link2}><span>Workload</span></button>
            </div>
            <div className={styles.div2}>
                <span className={styles.title}>Company</span>
                <button className={styles.link1}><span>About & Contact</span></button>
                <button className={styles.link2}><span>Workload</span></button>
            </div>
            <div className={styles.div3}>
                <span className={styles.title}>Resources</span>
                <button className={styles.link1}><span>Help & About</span></button>
                <button className={styles.link2}><span>Customer</span></button>
            </div>
        </div>
        <div className={styles.brief}>
            <span className={styles.span1}>LOGO</span>
            <span className={styles.span2}>Empowering Minds, Empowering Futures</span>
        </div>
      </div>
    </>
  );
};

export default Footer;