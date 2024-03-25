"use client"
///NFT Collection component

///Libraries -->
import styles from "./nftCollection.module.scss"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import book2 from "@/public/images/book2.png"
import img1 from "@/public/images/col1.png"
import img2 from "@/public/images/col2.png"
import img3 from "@/public/images/col3.png"
import img4 from "@/public/images/col4.png"
import img5 from "@/public/images/col5.png"
import img6 from "@/public/images/col6.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props";


const images: Array<StaticImport> = [
    img1, img2, img3, img4, img5, img6
] 

/**
 * @title NFT Collection Component
 * @returns The NFT Collection component
 */
const NFTCollection = () => {
    const stars = [0, 1, 2, 3, 4]
    const router = useRouter()
    const [amount, setAmount] = useState<string>("")

  return (
    <div className={styles.main}>
        <span>My NFT&apos;s Collection</span>
        <div className={styles.images}>
            {images.map((img, id) => (
                <div className={styles.imageDiv} key={id}>
                    <Image
                        className={styles.img}
                        src={img}
                        alt=""
                    />
                </div>
            ))}
        </div>
        <Image 
            className={styles.book2}
            alt=""
            src={book2}
        />
    </div>
  );
};

export default NFTCollection;