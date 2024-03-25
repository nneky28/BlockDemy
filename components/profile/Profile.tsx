"use client"
import styles from "./profile.module.scss"
import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import pro1 from "@/public/images/pro1.png"


/**
 * @title Profile Component
 * @returns The Profile component
 */
const Profile = () => {
    const [emailAddress, setEmailAddress] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [fullName, setFullName] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const router = useRouter()

    const setProfile = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <div className={styles.imageDiv}>
                <Image 
                    className={styles.pro1}
                    alt=""
                    src={pro1}
                />
            </div>
            <div className={styles.links}>
                <button><span>Dashboard</span></button>
                <button className={styles.btn2}><span>Profile Settings</span></button>
                <button><span>Apply for Course</span></button>
                <button><span>My Certificate</span></button>
                <button><span>Purchase Token</span></button>
                <button><span>Help & Support</span></button>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.profile}>
                <div className={styles.imageDiv}>
                    <Image 
                        className={styles.pro1}
                        alt=""
                        src={pro1}
                    />
                </div>
                <span>Edit</span>
            </div>
            <form className={styles.form} onSubmit={(e) => setProfile(e)}>
                <label>Email Address</label>
                <input
                    placeholder="Add your email address"
                    type="email"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                />
                <br /> 
                <label>Name</label>
                <input
                    placeholder="Add your name"
                    type="email"
                    onChange={(e) =>  setFullName(e.target.value)}
                    value={fullName}
                />
                <br />
                <label>Phone Number</label>
                <input
                    placeholder="Add your phone number"
                    type="tel"
                    onChange={(e) =>  setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                />
                <br />
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                </select>
                <br />
                <label>Country of residence</label>
                <input
                    placeholder="e.g. Ghana"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                />
                <br />
                <button className={styles.button}>
                    <span>Save Changes</span>
                </button>
            </form>
        </div>
    </div>
  );
};

export default Profile;