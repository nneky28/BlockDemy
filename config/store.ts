///This contains the generally used state variables

//Libraries -->
import { create } from "zustand";
import { IModalStore, IMenuStore } from "@/config/interfaces";

//Commencing code -->

//Modal state store
export const useModalStore = create<IModalStore>((set) => ({
    modal: false,
    setModal: (status) => set(() => ({ modal: status }))
}))

//Menu state store
export const useMenuStore = create<IMenuStore>((set) => ({
    menu: false,
    setMenu: (status) => set(() => ({ menu: status }))
}))