"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import styles from './blogInside.module.css'


const BlogInside = ( {params} ) =>{

    const id = params.id 

    const [blog, setBlog] = useState({})

    const FetchBlog = async ()=> {
        const response = await axios.get(`/api/blogs/${id}`)

        if (response.status == 200) {
            setBlog(response.data['blog'])
        }
    
    }
    
    useEffect(()=>{
        FetchBlog()
    },[])

    return (
        <div className={styles.blogInsidePage}>
            <div className={styles.blogInsideInside}>
                <h4>{blog.title}</h4>
                <div className={styles.picContainer}>
                    <Image src={blog.image} width='600' height='400' />
                </div>
                <div dangerouslySetInnerHTML={{'__html':blog.content}}></div>
            </div>
        </div>
    )
}

export default BlogInside