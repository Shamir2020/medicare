"use client"
import axios from 'axios';
import styles from './createBlog.module.css'
import JoditEditor from 'jodit-react'
import { useRef, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CreateBlog = () => {

    const router = useRouter()

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)

    const SubmitForm = async (e) => {
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
            const response = await axios.post('/api/createBlog', formData)

            if (response.status == 200) {
                toast.success('Blog has been created successfully !')
                router.push('/your-blogs')
            }
        }
    }

    return (
        <div className={styles.createBlogContainer}>
            <div className={styles.createBlogContainerInside}>
                <form action="">
                    <h5>Create a new blog</h5>
                    <label htmlFor="title">Blog Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" name='title' placeholder='Blog title' />

                    <label htmlFor="content">Blog Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />

                    <label htmlFor="image">blog Image</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} name='image' placeholder='Blog Image' />

                    <button onClick={SubmitForm} className={styles.createBlogBtn}>Create blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog