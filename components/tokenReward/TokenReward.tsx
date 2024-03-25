"use client"
///Token Reward component

///Libraries -->
import styles from "./tokenReward.module.scss"
import Image from "next/image";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { nfts } from "@/config/database";
import { useState, MouseEvent } from "react";
import { ICourse } from "@/config/interfaces";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useRouter } from "next/navigation";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import img1 from "@/public/images/img1.png"
import img2 from "@/public/images/img2.png"
import img3 from "@/public/images/img3.png"
import img4 from "@/public/images/img4.png"
import img5 from "@/public/images/img5.png"
import img6 from "@/public/images/img6.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import book1 from "@/public/images/book1.png"
import item1 from "@/public/images/item1.png"
import item2 from "@/public/images/item2.png"
import item3 from "@/public/images/item3.png"
import item4 from "@/public/images/item4.png"
import { toLowerDash } from "@/config/utils";

///Commencing the code 
//This contains the list of images
const images: Array<StaticImport> = [
    img1, img2, img1, img2, img3, img4, img5, img6
]

//This contains the list of nft items for nft balance
const nftItems: Array<StaticImport> = [
    item1, item2, item3, item4
] 

/**
 * @title Token Reward Component
 * @returns The Token Reward component
 */
const TokenReward = ({ course_ }: { course_: ICourse | undefined }) => {
    const stars = [0, 1, 2, 3, 4]
    const [course, setCourse] = useState<ICourse | undefined>(course_)
    const router = useRouter()
    const [amount, setAmount] = useState<string>("")

    //This function is triggered when my collections is clicked
    const viewCollections = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        if (course?.title) {
            router.push(`/${toLowerDash(course?.title)}/token-reward/nft-collections`)
        }
    }

  return (
    <>
        <div className={styles.top}>
            <div className={styles.images}>
                {images.map((image, id) => (
                    <div className={styles.image} key={id}>
                        <Image 
                            className={styles.img}
                            alt=""
                            src={image}
                        />
                    </div>
                ))}
                <div className={styles.brief}>
                    <span className={styles.span1}>Your Reward Balance</span>
                    <span className={styles.span2}>Welcome to your reward hub! Track and Explore your earned nfts with ease..</span>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.data}>
                    <div className={styles.balance}>
                        <span className={styles.title}>Total NFT Balance</span>
                        <div className={styles.nft_item}>
                            <div className={styles.nfts}>
                                {nftItems.map((item, id) => (
                                    <div className={styles.nft} key={id}>
                                        <Image 
                                            className={styles.img}
                                            alt=""
                                            src={item}
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className={styles.item}>{">> 6 Items"}</span>
                        </div>
                    </div>
                    <div className={styles.estimation}>
                        <span className={styles.span1}>NFT Estimated Value {">"}</span>
                        <span className={styles.span2}>0.30 ETH</span>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn1} onClick={(e) => viewCollections(e)}>
                        <span>My Collection</span>
                        <CollectionsBookmarkIcon className={styles.icon} />
                    </button>
                    <button className={styles.btn2}><span>Redeem Reward</span></button>
                </div>
                <Image 
                    className={styles.book1}
                    src={book1}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.bottom}>
            <nav>
                <button className={styles.nav1}><span>Explore</span></button>
                <button><span>Marketplace</span></button>
                <button><span>Stake & Earn</span></button>
                <button><span>Activity</span></button>
                <button><span>Wallet Settings</span></button>
            </nav>
            <span className={styles.header}>Top Trending Collections</span>
            <div className={styles.nfts}>
                {nfts.map((nft, id) => (
                    <div className={styles.nft} key={id}>
                        <div className={styles.imageDiv}>
                            <Image 
                                className={styles.img}
                                alt=""
                                src={nft?.image ? nft?.image : ""}
                            />
                            <WorkspacePremiumIcon className={styles.icon} />
                        </div>
                        <span className={styles.title}>{nft.name}</span>
                        <div className={styles.floor_volume}>
                            <div className={styles.floor}>
                                <span className={styles.text1}>Floor</span>
                                <span className={styles.text2}>{nft.floor}</span>
                            </div>
                            <div className={styles.volume}>
                                <span className={styles.text1}>Volume</span>
                                <span className={styles.text2}>{nft.volume}</span>
                            </div>
                        </div>
                        <button>
                            <span>Mint NFT</span>
                            <BookmarkBorderIcon className={styles.icon} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default TokenReward;