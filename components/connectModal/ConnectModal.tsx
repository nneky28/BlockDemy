"use client"
///Connect Modal component

///Libraries -->
import styles from "./connectModal.module.scss"
import { useModalStore } from "@/config/store";
import { MouseEvent, useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import trust from "@/public/images/trust.png"
import coinbase from "@/public/images/coinbase.png"
import metamask from "@/public/images/metamask.png"
import Image from "next/image";
import {   connectTrust, connectCoinbase } from "@/config/utils";
import { Cartesify } from "@calindra/cartesify";
import { BrowserProvider, Eip1193Provider } from 'ethers';


import { DAppContext } from "@/context";
///Commencing the code 

/**
 * @title Connect Modal Component
 * @returns The Connect Modal component
 */

const fetch = Cartesify.createFetch({
    dappAddress: '0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C',
    endpoints: {
      graphQL: new URL("http://localhost:8080/graphql"),
      inspect: new URL("http://localhost:8080/inspect"),
    },
  })
const ConnectModal = () => {

    const [result, setResult] = useState<string>("");
    const [signer, setSigner] = useState<any>(undefined)
    const [loading, setLoading] = useState(false);

    const {
        walletConnected,
        setWalletConnected,
        account,
        setAccount
      } = useContext(DAppContext);

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
           
                try {
                  window.ethereum.request({ method: "eth_requestAccounts" })
                  .then(async () => {
                    const provider = new BrowserProvider(window.ethereum as Eip1193Provider);
                    const signer = await provider.getSigner();
                    setSigner(signer);
                    setAccount(signer.getAddress());
                    setWalletConnected(true);
                  })
              
                } catch(error) {
                  console.log(error);
                  setWalletConnected(false);
                  alert("Connecting to metamask failed.");
                }
              
            // connectMetamask()
        } else if (wallet === "coinbase") {
            // connectCoinbase()
            return;
        } else if (wallet === "trust") {
            return;
            // connectTrust()
        }
    }

    const InstructorRegister = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        setLoading(true);
      
        try {
          const response = await fetch('/instructorRegister', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-msg_sender': account,
            },
            body: JSON.stringify({
              courseName: 'Project Management',
              certificateURI: 'https://example.com/certificate.pdf',
              courseFee: '0.0ETH'
            })
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
      
          const data = await response.json();
          console.log('Response from backend:', data);
          setResult(JSON.stringify(data));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
        setLoading(false);
      };
      

    let buttonProps:any = {}
    if(loading) buttonProps.isLoading = true

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