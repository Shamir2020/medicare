"use client"
import Image from "next/image"
import styles from './account.module.css'
import { useEffect, useState } from "react"
import axios from "axios"

const Account = () => {
    const [isClient, setIsclient] = useState(false)

    const [profile, setProfile] = useState({})

    const [account, setAccount] = useState({})
    
    useEffect(() => {
        setIsclient(true)
    }, [])

    if (isClient) {
        const profileURL = 'http://localhost:3000/profile';
        document.getElementById('qr-code').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(profileURL)}`;
    }

    const FetchProfileData = async ()=> {
        const response = await axios.get('/api/users/me')

        if (response.status == 200){
            console.log(response.data)
            setAccount(response.data['account'])
            setProfile(response.data['profile'])
        }

    }
    useEffect(()=>{
        FetchProfileData()
    },[])


    return (
        <>


            <div className={styles.profileContainer}>
                <div className={styles.profileHeader}>
                    <div className={styles.profileInfo}>
                        <Image src="/userPic.png" height='200' width='200' alt="User Profile Picture" />
                        <div className="profile-details">
                            <h1>{account.name}</h1>
                            <p>Member since: January 2020</p>
                            
                        </div>
                    </div>
                    <div className={styles.qrCode}>
                        <Image id="qr-code" src="/qr code.webp" alt="QR Code" height='150' width='150' />
                    </div>
                </div>
                <div className={styles.profileContent}>
                    <div className={styles.profileCard}>
                        <p><strong>Username:</strong> {account.username}</p>
                        <p><strong>Contact:</strong> {profile.phone}</p>
                        
                    </div>
                    <div className={styles.profileCard}>
                        <p><strong>Email:</strong> {account.email}</p>
                        <p><strong>Account type:</strong> {account.role}</p>
                    </div>
                </div>
                <div className={styles.profileActions}>
                    <button className={styles.delete}>Delete Account</button>
                </div>
            </div>
        </>
    )
}

export default Account