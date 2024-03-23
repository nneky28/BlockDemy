///This contains all the utilities

///Libraries -->
import { ethers } from 'ethers';

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
//const provider = new ethers.providers.Web3Provider(window.Ethereum)

export const connectToWallet = async (): Promise<void> => {
    // Check if the Ethereum provider is available
    // if (window.ethereum) {
    //     provider.send("eth_requestAccounts", [])
    //         .then(async () => {
    //             await accountChangedHandler(provider.getSigner());
    //         })
    // } else {
    //     setErrorMessage("Please Install MetaMask!!!");
    // }
    // if (window.ethereum) {
    //     try {
    //         // Request access to the user's Ethereum wallet
    //         await window.ethereum.request({ method: 'eth_requestAccounts' });

    //         // Create an ethers.js provider connected to the Ethereum provider
    //         // const provider = new ethers.providers.Web3Provider(window.ethereum);

    //         // // Get the signer (account) from the provider
    //         // const signer = provider.getSigner();

    //         // // Get the Ethereum address of the connected wallet
    //         // const address = await signer.getAddress();

    //         // console.log("Connected wallet address:", address);

    //         // Now you can interact with the connected wallet using ethers.js
    //         // For example, you can send transactions or read blockchain data

    //     } catch (error) {
    //         // Handle errors
    //         console.error("Error connecting to wallet:", error);
    //     }
    // } else {
    //     console.error("Ethereum provider not detected. Please install Trust Wallet or use a compatible browser.");
    // }
}



// // Check if Metamask is installed
// if (window.ethereum) {
//     // Metamask is installed
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     try {
//         // Request account access if needed
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         console.log('Connected to Metamask');
//     } catch (error) {
//         // User denied account access
//         console.error('User denied account access');
//     }
// } else {
//     // Metamask not detected
//     console.error('Metamask not detected');
// }