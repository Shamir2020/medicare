import styles from './register.module.css'
import Link from 'next/link'

const Register = ()=>{
    return (
        <div className={styles.registerContainer}>
            <form action="" className={styles.registerForm}>
                <h3>Register here</h3>

                <input type="text" autoComplete='off' name='name' placeholder='Your name'/>

                <input type="email" autoComplete='off' name='email' placeholder='Your Email'/>

                <input type="text" autoComplete='off' name='username' placeholder='Your Username'/>

                <input type="tel" autoComplete='off' placeholder='Your Phone' name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />


                <input type="password" name='password1' placeholder='Password here'/>

                <input type="password" name='password2' placeholder='Confirm Password'/>

                <button>Register</button>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p>Already have an account?</p> <Link href='/login' >Login now</Link>
                </div>
                
            </form>
        </div>
    )
}

export default Register