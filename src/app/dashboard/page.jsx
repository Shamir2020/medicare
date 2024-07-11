"use client"
import { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import axios from 'axios'
import Link from 'next/link'
const Dashboard = ()=> {

    const [role, setRole] = useState('')

    const FetchUserData = async ()=>{
        const response = await axios.get('/api/users/me')
        if (response.status == 200){
            setRole(response.data['account']['role'])
            console.log(response.data['account']['role'])
            console.log(role)
        }
    }
    useEffect(()=>{
        FetchUserData()
    },[])

    if (role == 'patient'){
        return (
            <div className={styles.dashboardPage}>
                <div className={styles.dashboardInside}>
                <h4>Patient's Dashboard</h4>
                </div>
            </div>
        )
    }
    else if (role == 'doctor'){
        return (
            <div className={styles.dashboardPage}>
                <div className={styles.dashboardInside}>
                <h4>Doctor's Dashboard</h4>
                <div className={styles.doctorLinkCard}>
                <Link href='/your-blogs'>Manage your blogs</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Dashboard