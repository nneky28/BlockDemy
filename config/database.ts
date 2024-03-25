//This acts as a database for the app

///Libraries -->
import { ICourse, INFT } from "./interfaces";
import contract from "@/public/images/contract.png"
import frontend from "@/public/images/frontend.png"
import defi from "@/public/images/defi.png"
import token from "@/public/images/token.png"
import solidity from "@/public/images/solidity.png"
import api from "@/public/images/api.png"
import nft1 from "@/public/images/nft1.png"
import nft2 from "@/public/images/nft2.png"
import nft3 from "@/public/images/nft3.png"
import nft4 from "@/public/images/nft4.png"

///Commencing the code
///The list of courses
export const courses: Array<ICourse> = [
    {
        image: contract,
        title: "Smart Contracts Unleashed",
        description: "Dive into the world of blockchain technology, mastering the design and implementation of smart contracts for decentralized and secure digital transactions.",
        keyword: "Smart Contract",
        rating: "4.7"
    },
    {
        image: frontend,
        title: "Frontiers of Front-End Dev",
        description: "Journey through the latest tools and techniques in front-end development, crafting immersive user experiences and staying at the forefront of web design innovation.",
        keyword: "Web3 Development",
        rating: "4.0"
    },
    {
        image: defi,
        title: "DeFi Fundamentals and Strategies",
        description: "DeFi Essentials: Liquidity Pools, AMMs, Yield Farming & DEXs. Learners will also explore various DeFi strategies, risk management techniques, and case studies to maximize returns while understanding the risks",
        keyword: "Defi",
        rating: "4.0"
    },
    {
        image: token,
        title: "Tokenomics Unveiled",
        description: "Dive into the intricate world of tokenomics, where you'll unravel the economic principles governing cryptocurrencies. This course illuminates the mechanisms behind token issuance, distribution, and value creation.",
        keyword: "Tokenomics",
        rating: "4.5"
    },
    {
        image: solidity,
        title: "Solidity Programming",
        description: "Learn the Solidity programming language and develop smart contracts to execute on the Ethereum blockchain.",
        keyword: "Smart Contract",
        rating: "4.3"
    },
    {
        image: api,
        title: "DApp Development",
        description: " Learn the Solidity programming language and develop smart contracts to execute on the Ethereum blockchain",
        keyword: "Web3 Development",
        rating: "4.1"
    }
]

///This contains the list of nfts
export const nfts: Array<INFT> = [
    {
        image: nft1,
        name: "Virtual Future",
        floor: "0.0026 ETH",
        volume: "6 ETH"
    },
    {
        image: nft2,
        name: "Crypto Oddities",
        floor: "0.0032 ETH",
        volume: "3 ETH"
    },
    {
        image: nft3,
        name: "Whimsical Wonder",
        floor: "0.0016 ETH",
        volume: "8 ETH"
    },
    {
        image: nft4,
        name: "Virtual Treasure",
        floor: "0.0022 ETH",
        volume: "4 ETH"
    },
]