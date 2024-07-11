"use client"
import styles from './yourblogs.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const YourBlogs = () => {
    const [role, setRole] = useState('')
    const router = useRouter()

    const FetchUserData = async () => {
        const response = await axios.get('/api/users/me')
        if (response.status == 200) {
            setRole(response.data['account']['role'])
            console.log(response.data['account']['role'])
            console.log(role)
        }
    }
    useEffect(() => {
        FetchUserData()
    }, [])

    const MoveToCreateBlogPage = ()=>{
        router.push('/createBlog')
    }

    if (role == 'doctor') {
        return (
            <div className={styles.yourBlogsContainer}>
                <div className={styles.yourBlogHeader}>
                    <h5>Manage your Blogs</h5>
                </div>
                <div className={styles.yourBlogsInside}>

                    <div className={styles.blogCard}>
                        <Image src='/fever.jpg' width='200' height='200' alt='Error' />
                        <h5>Blog title</h5>
                        <div>
                            <button className={styles.manageBtns}>Edit</button><button className={styles.manageBtns}>Delete</button>
                        </div>
                    </div>

                </div>

                <div className={styles.createBtnContainer}>
                    <button onClick={MoveToCreateBlogPage} className={styles.createBlogBtn}>Create a blog</button>
                </div>

            </div>
        )
    }
    else if (role == 'admin') {
        return (
            <div className={styles.yourBlogsContainer}>
                <div className={styles.yourBlogsInside}>

                </div>
            </div>
        )
    }
    else if (role == 'patient') {
        return (
            <div className={styles.yourBlogsContainer}>
                <div className={styles.yourBlogsInside}>
                    <h3>Your are not authorized to see this page</h3>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="nothing">
                
            </div>
        )
    }
}


export default YourBlogs