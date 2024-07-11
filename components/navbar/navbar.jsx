"use client"
import Link from "next/link"
import styles from './navbar.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import Image from "next/image"
const Navbar = ()=>{

    const [isClient, setIsClient] = useState(false)

    const [token , setToken] = useState(false)

    const [name, setName] = useState('')

    useEffect(()=>{
        setIsClient(true)
    },[])

    var authenticated = false
    if (isClient) {
        authenticated = localStorage.getItem('authenticated') || false
    }
    const FetchUserData = async ()=>{
        try {
            const response = await axios.get('/api/users/me')
            if (response.status == 200){
        
                setName(response.data.account.name)
                setToken(true)
            }
        }catch (error){
            console.log('Token not found')
        }
    }

    useEffect(()=>{
        FetchUserData()
    },[token])


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

    const Logout = async ()=>{
        try {
            const response = await axios.get('/api/users/logout')
            if (response.status == 200){
                toast.success('Logout successful !')
                localStorage.removeItem('authenticated')
                window.location.reload()
            }
        }
        catch(error){
            toast.error('Login failed')
        }
    }

    const [displayCard, setDisplayCard] = useState(false)
    const dropdownRef = useRef(null)

    const handleClickOutside = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setDisplayCard(false)
        }
    }
    const toggleProfileNavCard = (event)=>{
        setDisplayCard(!displayCard)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

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

                    {displayCard && <div ref={dropdownRef} className={styles.profileNavCard} >
                        <ol>
                            <Link href=''><li><Image src='/userPic.png' height='80' width='80' /> {name}</li></Link>
                            <Link href='/profile'><li>Your Profile</li></Link>
                            <Link href='/account'><li>Your Account</li></Link>
                            <Link href='/dashboard'><li>Your Dashboard</li></Link>
                            <Link href=''><li>Your Consultations</li></Link>
                            <Link href='' onClick={Logout}><li>Logout</li></Link>
                        </ol>
                    </div>}
                        
                        {token ? (
                            <button className={styles.profileNavCardBtn} onClick={toggleProfileNavCard}><Image src='/userPic.png' height='80' width='80' /></button>
                        ): 
                        (<Link href='/login'><button className='btn btn-primary'>Login / Register</button></Link>)} 
                        


                </div>
            </div>
        </div>


    )
}

export default Navbar