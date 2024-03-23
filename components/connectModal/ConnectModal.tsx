"use client"
///Connect Modal component

///Libraries -->
import styles from "./connectModal.module.scss"
import { useModalStore } from "@/config/store";
import { MouseEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import trust from "@/public/images/trust.png"
import coinbase from "@/public/images/coinbase.png"
import metamask from "@/public/images/metamask.png"
import Image from "next/image";
import { connectToWallet, connectMetamask, connectTrust, connectCoinbase } from "@/config/utils";

///Commencing the code 

/**
 * @title Connect Modal Component
 * @returns The Connect Modal component
 */
const ConnectModal = () => {
    const setModal = useModalStore(state => state.setModal);
    //const modal = useModalStore(state => state.modal);

    ///This function is triggered when the background of the modal is clicked
    const closeModal = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
        e.preventDefault()

        setModal(false)
        //console.log("modal closed")
    }

    ///This function is triggered when a wallet is clicked
    const connectWallet = async(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, wallet: string): Promise<void> => {
        e.preventDefault()

        if (wallet === "metamask") {
            connectMetamask()
        } else if (wallet === "coinbase") {
            connectCoinbase()
        } else if (wallet === "trust") {
            connectTrust()
        }
    }

  return (
    <div className={styles.main}>
       <div className={styles.header}>
            <span>Sign up or Log in</span>
            <button onClick={(e) => closeModal(e)}>
                <CloseIcon className={styles.icon} />
            </button>
       </div>
       <span className={styles.brief}>Connect a wallet to continue</span>
       <div className={styles.wallets}>
            <button className={styles.wallet1} onClick={(e) => connectWallet(e, "metamask")}>
                <Image 
                    className={styles.image}
                    alt=""
                    src={metamask}
                />
                <span>Metamask Wallet</span>
            </button>
            <button className={styles.wallet2} onClick={(e) => connectWallet(e, "coinbase")}>
                <Image 
                    className={styles.image}
                    alt=""
                    src={coinbase}
                />
                <span>Coinbase Wallet</span>
            </button>
            <button className={styles.wallet3} onClick={(e) => connectWallet(e, "trust")}>
                <Image 
                    className={styles.image}
                    alt=""
                    src={trust}
                />
                <span>Trust Wallet</span>
            </button>
       </div>
    </div>
  );
};

export default ConnectModal;