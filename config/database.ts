//This acts as a database for the app

///Libraries -->
import { ICourse } from "./interfaces";
import contract from "@/public/images/contract.png"
import frontend from "@/public/images/frontend.png"
import defi from "@/public/images/defi.png"
import token from "@/public/images/token.png"
import solidity from "@/public/images/solidity.png"
import api from "@/public/images/api.png"

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