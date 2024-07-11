"use client"
import styles from './createBlog.module.css'
import JoditEditor from 'jodit-react'
import { useRef, useMemo, useState } from 'react';

const CreateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    

    return (
        <div className={styles.createBlogContainer}>
            <div className={styles.createBlogContainerInside}>
                <form action="">
                    <h5>Create a new blog</h5>
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" name='title' placeholder='Blog title' />

                    <label htmlFor="content">Blog Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                    />

                    <label htmlFor="image">blog Image</label>
                    <input type="file" name='image' placeholder='Blog Image' />

                    <button className={styles.createBlogBtn}>Create blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog