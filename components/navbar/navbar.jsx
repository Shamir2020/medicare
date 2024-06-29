"use client"

import Link from "next/link"
import Image from "next/image"
import styles from './navbar.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react"

const Navbar = ()=>{

    const [navFixed, setNavFixed] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=> {
            if (window.scrollY > 80){
                setNavFixed(true)
            }
            else {
                setNavFixed(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

    },[])

    return (
        <div className={navFixed? `${styles.navbar} ${styles.fixed}` : styles.navbar}>
            <div className={styles.navInside}>
                <div className={styles.navCol1}>
                <Link href='/'><h2 className={styles.logo}>Medicare</h2></Link>
                </div>
                
                <div className={styles.navCol2}>
                    <ol>
                        <Link href='/'><li>See A Doctor</li></Link>
                        <Link href='/'><li>Health Services</li></Link>
                        <Link href='/'><li>Health & Wellness</li></Link>
                        <Link href='/'><li>Corporate</li></Link>
                        <Link href='/'><li>Support</li></Link>
                    </ol>
                </div>
                
                <div className={styles.navCol3}>
                    <Link href='/login'><button className='btn btn-primary'>Login / Sign Up</button></Link>
                </div>
            </div>
        </div>


    )
}

export default Navbar