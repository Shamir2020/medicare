"use client"
import Link from 'next/link'
import styles from './login.module.css'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Login = ()=>{
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const FormSubmit = async (e)=> {
        e.preventDefault()
        console.log('Login button clicked')

        if (username == '' || password == '') {
            toast.error('Fill all the fields !')
        }
        else {
            try {
                const response = await axios.post('/api/users/login', {
                    username: username,
                    password: password
                })
    
                if (response.status == 200) {
                    localStorage.setItem('authenticated', true)
                    toast.success("Login successful !")
                    router.push('/')
                    window.location.reload()
                }
            }
            catch (error){
                toast.error('Invalid credentials !')
            }

        }

    }
    
    return (
        <div className={styles.loginContainer}>
            <form action="" className={styles.loginForm}>
                <h4 style={{marginBottom: '20px', textAlign:'center'}}>Login Here</h4>

                <label htmlFor="username">Username</label>
                <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username or Email' autoComplete='off'/>
                
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password here' autoComplete='off' />

                <Link href=''>Forgot Password ?</Link>

                <button onClick={FormSubmit} className=''>Login</button>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p>Don'have an account?</p> <Link href='/select-user' >Create account</Link>
                </div>
            </form>
        </div>
    )
}

export default Login