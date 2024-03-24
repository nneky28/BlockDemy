///This contains all the utilities

///Libraries -->
import { ethers } from 'ethers';
import { courses } from './database';
import { ICourse } from './interfaces';

///Commencing the code
export const companyName: string = "Blockdemy"

export const domainName: string = "http://localhost:3000"

export const courseCategories: Array<string> = [
    "All Courses",
    "Decentralized Finance (DeFi)",
    "Web3 Development with IPFS and Ethereum",
    "Tokenomics and Crypto Economics",
    "Smart Contract"
]

///This function connects Metamask wallet
export const connectMetamask = async (): Promise<void> => {
    if (window.ethereum) {
        // Metamask is installed
        console.log('Connected to Metamask');
    } else {
        // Metamask not detected
        console.error('Metamask not detected');
    }
}

///This function connects Coinbase wallet
export const connectCoinbase = (): void => {
    if (window.coinbase) {
        // Coinbase Wallet is installed
        console.log('Connected to Coinbase Wallet');
    } else {
        console.error('Coinbase Wallet not detected');
    }
}

///This function connects Trust wallet
export const connectTrust = (): void => {
    if (window.ethereum && window.ethereum.isTrust) {
        // Trust Wallet is installed
        console.log('Connected to Trust Wallet');
    } else {
        console.error('Trust Wallet not detected');
    }
}

///This fn converts e.g Fa Ba to fa-ba
export const toLowerDash = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, '-')
}

///This checks for a router path and renders the necessary style for it
export const routeStyle = (router: string, styles: { readonly [key: string]: string } ): string => {
    //console.log("Router: ", router)
    switch (router) {
        case "/":
            return styles.homePage
        case "/cart":
            return styles.cartPage
        // case "/terms":
        //     return styles.termsPage
        // case "/order":
        //     return styles.orderPage
        // case "/about":
        //     return styles.aboutPage
        // case "/products/search":
        //     return styles.searchPage
        default:
            for (const course of courses) {
                if (course.title) {
                    if (router === `/${toLowerDash(course.title)}`) {
                        return styles.courseInfoPage
                    }
                }
            }
            for (const course of courses) {
                if (course.title) {
                    if (router === `/${toLowerDash(course.title)}/purchase-course`) {
                        return styles.purchaseCoursePage
                    }
                }
            }
            if (router.includes("/cart/")) {
                return styles.cartReceiptPage
            } else {
                return styles.others
            }
    }
}

//This fn gets the course info that was clicked
export const getCourse = (name: string): ICourse | undefined => {
    for (let course of courses) {
      if (course.title) {
        if (toLowerDash(course.title) === name) {
          return course
        }
      }
    }
  }