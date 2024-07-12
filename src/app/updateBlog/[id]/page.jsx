"use client"
import axios from 'axios';
import styles from './updateBlog.module.css'
import JoditEditor from 'jodit-react'
import { useRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const UpdateBlog = ({ params }) => {

    const router = useRouter()

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)

    const id = params.id

    console.log(`ID - ${id}`)

    const FetchBlog = async ()=> {
        try {
            const response = await axios.get(`/api/blogs/${id}`)

            if (response.status == 200) {
                setTitle(response.data['blog']['title'])
                setContent(response.data['blog']['content'])
                setImage(response.data['blog']['image'])
            }
        }
        catch(error){
            toast.error('Invalid Blog parameter')
        }

    
    }
    
    useEffect(()=>{
        FetchBlog()
    },[])

    const SubmitForm = async (e, id) => {
        e.preventDefault()

        if (image == null || content == '' || title == '') {
            toast.error('Fill all the fields !')
        }
        else {

            console.log(title)
            console.log(content)

            const formData = new FormData()
            formData.append('title', title)
            formData.append('content', content)
            formData.append('image', image)

            console.log(formData)
            const response = await axios.post(`/api/getMyBlogs/${id}`, formData)

            if (response.status == 200) {
                toast.success('Blog has been updated successfully !')
                router.push('/your-blogs')
            }
        }
    }

    return (
        <div className={styles.createBlogContainer}>
            <div className={styles.createBlogContainerInside}>
                <form action="">
                    <h5>Update the blog</h5>
                    <label htmlFor="title">Blog Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name='title' placeholder='Blog title' />

                    <label htmlFor="content">Blog Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />

                    <label htmlFor="image">blog Image</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} name='image' placeholder='Blog Image' />

                    <button onClick={(e)=>SubmitForm(e, blog._id)} className={styles.createBlogBtn}>Update blog</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlog