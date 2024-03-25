"use client"
///Header component

///Libraries -->
import styles from "./header.module.scss"
import { useState, MouseEvent } from "react";
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useMenuStore } from "@/config/store";
import Image from "next/image";
import logo from "@/public/images/logo.png"
///Commencing the code 

/**
 * @title Header Component
 * @returns The Header component
 */
const Header = () => {
    const router = useRouter()
    //const [menu, setMenu] = useState<boolean>(false)
    const [query, setQuery] = useState<string>("")
    const setMenu = useMenuStore(state => state.setMenu);
    const menu = useMenuStore(state => state.menu);

    ///This function is triggered when menu is clicked
    const viewMenu = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
        e.preventDefault()

        setMenu(!menu)
    }

    //This function is triggered when a link in the menu bar is clicked
    const openMenuLink = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, link: string): void => {
        e.preventDefault()

        setMenu(!menu)

        if (link) {
            router.push(link)
        }
        
    }

  return (
    <>
        <header className={styles.header}>
            <button className={styles.logo} onClick={() => router.push('/')}>
            <span>        
            <Image
            className={styles.logo}
            alt="logo"
            objectFit="contain"
            src={logo}
        /></span>
            </button>
            <div className={styles.navBar}>
                <form>
                    <button>
                        <SearchIcon className={styles.icon} />
                    </button>
                    <input  
                      type="text" 
                      placeholder="Search courses" 
                      onChange={(e) => setQuery(() => e.target.value)}
                      value={query}
                    />
                </form>
                <button className={styles.profile} onClick={(e) => router.push("/profile")}>Your Profile</button>
                <button className={styles.whyUs} onClick={(e) => router.push("/#why-us")}>Why Us</button>
            </div>
            <button className={styles.menu} onClick={(e) => viewMenu(e)}>
                {menu ? (
                    <MenuOpenIcon className={styles.icon}/>
                ) : (
                    <MenuIcon className={styles.icon}/>
                )}
            </button>
        </header>
        <div className={menu ? styles.activeMenu : styles.inactiveMenu}>
            <form>
                <button>
                    <SearchIcon className={styles.icon} />
                </button>
                <input  
                    type="text" 
                    placeholder="Search courses" 
                    onChange={(e) => setQuery(() => e.target.value)}
                    value={query}
                />
            </form>
            <button className={styles.profile} onClick={(e) => openMenuLink(e, "/profile")}>Your Profile</button>
            <button className={styles.whyUs} onClick={(e) => openMenuLink(e, "/#why-us")}>Why Us</button>
        </div>
    </>
  );
};

export default Header;