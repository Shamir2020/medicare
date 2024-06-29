import styles from './footer.module.css'
import Link from 'next/link'

const Footer = ()=>{
    return (
        <div className={styles.footer}>
            <div className={styles.footerInside}>
                <div className={styles.footerCols}>
                    <ol>
                        <h3>Learny</h3>
                        <Link href=''><li>About Us</li></Link>
                        <Link href=''><li>Our Services</li></Link>
                        <Link href=''><li>Privacy Policy</li></Link>
                        
                    </ol>
                </div>
                <div className={styles.footerCols}>
                <ol>
                        <h3>Get Help</h3>
                        <Link href=''><li>FAQ</li></Link>
                        <Link href=''><li>Affiliate Programs</li></Link>
                        <Link href=''><li>Live chat with teacher</li></Link>
                        
                    </ol>
                </div>
                <div className={styles.footerCols}>
                <ol>
                        <h3>Online Learning</h3>
                        <Link href=''><li>Enroll Courses</li></Link>
                        <Link href=''><li>Drop Courses</li></Link>
                        <Link href=''><li>Consultation</li></Link>
                        
                    </ol>
                </div>
                <div className={styles.footerCols}>
                <ol>
                        <h3>Follow Us</h3>
                        <div className="socials-container">
                            <div className="socials"><i className="fa-brands fa-facebook"></i></div>
                            <div className="socials"><i className="fa-brands fa-instagram"></i></div>
                            <div className="socials"><i className="fa-brands fa-twitter"></i></div>
                            <div className="socials"><i className="fa-brands fa-youtube"></i></div>
                        </div>
                    </ol>
                </div>
            </div>
            <div className="copyright-container">
            <span>&copy; 2024 - All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer