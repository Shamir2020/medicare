"use client"

import styles from './register.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useEffect, useState } from 'react'

const Register = ({params})=>{

    const router = useRouter()

    if (!['patient','doctor'].includes(params.type)){
        router.push('/select-user')
    }

    const [userType, setUserType] = useState('patient')

    useEffect(()=>{
        if (params.type == 'doctor') {
            setUserType('doctor')
        }
    },[userType])

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const [gender, setGender] = useState('')

    const FormSubmit = async (e)=>{
        e.preventDefault()

        if (name == '' || username == '' || email == '' || phone == '' || password1 == "" || password2 == '' || birthDate == '' || gender == ''){
            toast.error('Fill all the fields first')
        }
        else if (password1 != password2 ){
            toast.error("Passwords do not match !")
        }
        else {

            const response = await axios.post("/api/users/register", {
                name: name,
                username: username,
                email: email,
                phone: phone,
                password1: password1,
                password2: password2,
                role: userType,
                birthDate: birthDate,
                gender: gender
            })

            console.log(response.data)

            router.push('/login')

            toast.success("Form submitted !")
        }
    }

    return (

        <div className={styles.registerContainer}>
            <form action="" className={styles.registerForm}>
                <h3><span style={{textTransform: 'capitalize'}}>{userType}</span> Registration</h3>

                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} autoComplete='off' name='name' placeholder='Your name' required/>

                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' name='email' placeholder='Your Email' required/>

                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} autoComplete='off' name='username' placeholder='Your Username' required/>

                <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} autoComplete='off' placeholder='Your Phone' name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />


                <input type="password" value={password1} onChange={(e)=>setPassword1(e.target.value)} name='password1' placeholder='Password here' required/>

                <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} name='password2' placeholder='Confirm Password' required/>

                <input type="text" onFocus={(e)=>(e.target.type = 'date')}  value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} placeholder='Your date of birth' />

                <select name="gender" id="" onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <button onClick={FormSubmit}>Register</button>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p>Already have an account?</p> <Link href='/login' >Login now</Link>
                </div>
                
            </form>
        </div>
    )
}

export default Register