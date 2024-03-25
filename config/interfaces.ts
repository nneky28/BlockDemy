///This would contain all interfaces that will be used

///Libraries -->
import { StaticImport } from "next/dist/shared/lib/get-img-props";

///Commencing the code
///This is the interface for the courses
export interface ICourse {
    image?: StaticImport,
    title?: string,
    description?: string,
    keyword?: string,
    rating?: string,
}

///This is the interface for the nfts
export interface INFT {
    image?: StaticImport,
    name?: string,
    floor?: string, 
    volume?: string
}

//Interface for modal store
export interface IModalStore {
    modal: boolean;
    setModal: (status: boolean) => void
}

//Interface for menu store
export interface IMenuStore {
    menu: boolean;
    setMenu: (status: boolean) => void
}

//Interface for is enrolled store
export interface IIsEnrolledStore {
    isEnrolled: boolean;
    setIsEnrolled: (status: boolean) => void
}

//Declaring the global scope for windows interface
declare global {
    interface Window {
        ethereum?: any; // Define ethereum property on the window object
        coinbase?: any;
    }
}