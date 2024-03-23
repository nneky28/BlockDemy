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
                <span>LOGO</span>
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
                <button className={styles.profile}>Your Profile</button>
                <button className={styles.whyUs}>Why Us</button>
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
            <button className={styles.profile} onClick={(e) => openMenuLink(e, "")}>Your Profile</button>
            <button className={styles.whyUs} onClick={(e) => openMenuLink(e, "")}>Why Us</button>
        </div>
    </>
  );
};

export default Header;