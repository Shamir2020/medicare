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

    const [blogs, setBlogs] = useState([])


    const FetchUserData = async () => {
        const response = await axios.get('/api/users/me')
        if (response.status == 200) {
            setRole(response.data['account']['role'])
            console.log(response.data['account']['role'])
            console.log(role)
        }
    }

    const FetchAllBlogs = async () => {
        const response = await axios.get('/api/getMyBlogs')
        if (response.status == 200) {
            setBlogs(response.data['blogs'])
            console.log(response.data)

        }
    }
    useEffect(() => {
        FetchUserData()
        FetchAllBlogs()
    }, [])

    const MoveToCreateBlogPage = () => {
        router.push('/createBlog')
    }

    if (role == 'doctor') {
        return (
            <div className={styles.yourBlogsContainer}>
                <div className={styles.yourBlogHeader}>
                    <h5>Manage your Blogs</h5>
                </div>
                <div className={styles.yourBlogsInside}>

                    {blogs && blogs.map((blog) => {
                        return (
                            <div className={styles.blogCard}>
                                <Image src={`${blog.image}`} width='200' height='200' alt='Error' />
                                <h5>{blog.title}</h5>
                                <div>
                                    <button className={styles.manageBtns}>Edit</button><button className={styles.manageBtns}>Delete</button>
                                </div>
                            </div>
                        )
                    })}

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