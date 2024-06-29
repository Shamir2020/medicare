import Link from 'next/link'
import styles from './login.module.css'

const Login = ()=>{
    return (
        <div className={styles.loginContainer}>
            <form action="" className={styles.loginForm}>
                <h4 style={{marginBottom: '20px', textAlign:'center'}}>Login Here</h4>

                <label htmlFor="username">Username</label>
                <input type="text" name='username' placeholder='Username or Email' autoComplete='off'/>
                
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password here'/>

                <Link href='' >Forgot Password ?</Link>

                <button className=''>Login</button>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                <p>Don'have an account?</p> <Link href='/register' >Create account</Link>
                </div>
            </form>
        </div>
    )
}

export default Login