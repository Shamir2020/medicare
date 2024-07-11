import styles from './selectUser.module.css'
import Link from 'next/link'
const SelectUser = ()=> {
    return (
        <div className={styles.selectUserPage}>
            <div className={styles.selectUserInside}>
                <div className={styles.col1}>
                    <div>
                    <h4>Get the best</h4>
                    <h4>Doctors online</h4>
                    </div>
                    <ul>
                        <li>Book consultations online</li>
                        <li>Order medical tests</li>
                        <li>Subscribe to medical plans</li>
                        <li>Order medicines online</li>
                    </ul>
                    <div className={styles.buttonsContainer}>
                        <Link href='/register/patient'><button className={styles.registerBtns}>Register as a Patient</button></Link>
                    </div>
                </div>

                <div className={styles.col1}>
                    <div>
                    <h4>Be the best</h4>
                    <h4>Doctor online</h4>
                    </div>
                    <ul>
                        <li>Take consultations online</li>
                        <li>Order medical tests for patients</li>
                        <li>Provide prescription to patients</li>
                    </ul>
                    <div className={styles.buttonsContainer}>
                    <Link href='/register/doctor'><button className={styles.registerBtns}>Register as a Doctor</button></Link>
                    </div>
                </div>

                <div className={styles.col2}>

                </div>
            </div>
        </div>
    )
}

export default SelectUser