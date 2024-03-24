"use client"
///Hero component

///Libraries -->
import styles from "./hero.module.scss"
import Image from "next/image";
import grad from "@/public/images/grad.png"
import dots from "@/public/images/dots.png"
import book3 from "@/public/images/book3.png"
import book4 from "@/public/images/book4.png"
import book5 from "@/public/images/book5.png"
import note from "@/public/images/note.png"
import globe from "@/public/images/globe.png"
import rec1 from "@/public/images/rec1.png"
import rec2 from "@/public/images/rec2.png"
import { companyName } from "@/config/utils";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Modal from "../modalBackground/Modal";
import { useModalStore, useMenuStore } from "@/config/store";
import { MouseEvent, useContext } from "react";
import ConnectModal from "../connectModal/ConnectModal";
import { DAppContext } from "@/context";

///Commencing the code 

/**
 * @title Hero Component
 * @returns The Hero component
 */
const Hero = () => {
    const setModal = useModalStore(state => state.setModal);
    const setMenu = useMenuStore(state => state.setMenu);
    const menu = useMenuStore(state => state.menu);


    const {
        walletConnected,
      } = useContext(DAppContext);

    ///This function is triggered when the user clicks on connect wallet
    const openConnectModal = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        setModal(true)
    }

    ///This function is triggered when the hero div is clicked
    const closeMenu = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        if (menu) {
            setMenu(false)
        }
    }

  return (
    <>
        <div className={styles.main} onClick={(e) => closeMenu(e)}>
        <Image 
            className={styles.dots}
            alt="dots"
            src={dots}
        />
        <div className={styles.upper}>
            <div className={styles.left}>
                <div className={styles.brief}>
                    <span className={styles.span1}>Unlock Learning Potential with {companyName}</span>
                    <span className={styles.span2}>Decentralized Education Empowered by <br />Cartesi Roll Ups & NFT Certificate</span>
                    <div className={styles.buttons}>
                    {!walletConnected ? (
                        <button className={styles.btn1} onClick={(e) => openConnectModal(e)}><span>Connect Wallet</span></button>
                    ) : (
                        <button className={styles.btn1} onClick={(e) => openConnectModal(e)}><span>Disconnect</span></button>
                    )}
                        <button className={styles.btn2}><span>Explore</span></button>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat1}>
                        <div className={styles.circle}>
                            <PersonOutlineIcon className={styles.icon} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.text1}>8.1k</span>
                            <span className={styles.text2}>Total number of learners using the platform</span>
                        </div>
                    </div>
                    <div className={styles.stat2}>
                        <div className={styles.circle}>
                            <LibraryBooksIcon className={styles.icon} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.text1}>70+</span>
                            <span className={styles.text2}>Over 100 courses available</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <Image 
                    className={styles.book4}
                    alt="book"
                    src={book4}
                />
                <Image 
                    className={styles.book5}
                    alt="book"
                    src={book5}
                />
                <Image 
                    className={styles.grad}    
                    alt="grad"
                    src={grad}
                />
            </div>
        </div>
        <Image 
            className={styles.rec1}
            alt="rec"
            src={rec1}
        />
        <div className={styles.lower}>
            <div className={styles.brief}>
                <span className={styles.span1}>{companyName}</span>
                <span className={styles.span2}>Empowering Minds,<br /> Empowering Futures</span>
            </div>
            <div className={styles.info}>
                <div className={styles.info1}>
                    <Image 
                        className={styles.book3}
                        alt="book"
                        src={book3}
                    />
                    <span>Personalized Learning</span>
                </div>
                <div className={styles.info2}>
                    <Image 
                        className={styles.note}
                        alt="note"
                        src={note}
                    />
                    <span>Earn token rewards</span>
                </div>
                <div className={styles.info3}>
                    <Image 
                        className={styles.globe}
                        alt="globe"
                        src={globe}
                    />
                    <span>Global Collaboration</span>
                </div>
            </div>
        </div>
        <Image 
            className={styles.rec2}
            alt="rec"
            src={rec2}
        />
        </div>
        <Modal>
            <ConnectModal />
        </Modal>
    </>
  );
};

export default Hero;