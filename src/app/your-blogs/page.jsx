"use client"
import styles from './yourblogs.module.css'
import './yourblogs.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import './yourblogs.css'
import toast from 'react-hot-toast'


const YourBlogs = () => {
    const [role, setRole] = useState('')
    const router = useRouter()

    const [isClient, setIsClient] = useState(false)

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
        setIsClient(true)
    }, [])

    const MoveToCreateBlogPage = () => {
        router.push('/createBlog')
    }

    const ReadMore = (id) => {
        router.push(`/blogs/${id}`)
    }

    const EditBlogPage = (id) => {
        router.push(`/updateBlog/${id}`)
    }

    const DeletePrompt= async (id, index)=>{
        const confirmed = confirm('Are you sure to Delete ?')

        if (confirmed){
            const response = await axios.delete(`/api/getMyBlogs/${id}`)

            if (response.status == 200){
                toast.success('Blog has been deleted')
                router.refresh()
                window.location.reload()
                
            }
        }
        
    }

    if (role == 'doctor') {
        return (
            <div className={styles.yourBlogsContainer}>
                <div className={styles.yourBlogHeader}>
                    <h5>Manage your Blogs</h5>
                </div>
                <div className={styles.yourBlogsInside}>

                    {blogs && blogs.map((blog, index) => {
                        return (
                            <div className={styles.blogCard}>


                                <Image src={`${blog.image}`} width='200' height='200' alt='Error' />
                                <h5>{blog.title}</h5>
                                
                                
                                <div>
                                    <button onClick={(e)=>EditBlogPage(blog._id)} className={styles.manageBtns}>Edit</button>
                                    <button onClick={(e)=>DeletePrompt(blog._id, index)} className={styles.manageBtns}>Delete</button>
                                </div>

                                <button onClick={(e)=>ReadMore(blog._id)} className={styles.readMoreBtn}>Read more</button>
                            
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