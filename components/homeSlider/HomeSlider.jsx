"use client"
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'

import styles from './styles.module.css'

const HomeSlider = () => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor1.jpg"
                        width='1000'
                        height='350'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                    <div className={styles.sliderCaption}>
                            <h4>Best doctors available. Just a video call away !</h4>
                            <p>We have the best doctors available and you can easily consult with them.</p>
                            <Link href='/'><button className='btn btn-primary'>Book An Appointment</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor2.avif"
                        width='1000'
                        height='350'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                        <div className={styles.sliderCaption}>
                            <h5>Online heallthcare at affordable price !</h5>
                            <p>Book an appointment at the most affordable price and consult with doctor.</p>
                            <Link href='/'><button className='btn btn-info'>Book An Appointment</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor3.avif"
                        width='1000'
                        height='350'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                    <div className={styles.sliderCaption}>
                            <h5>Monthly healthcare plans</h5>
                            <p>We have Monthly healthcare plans which you can subscribe to get health care services more easily.</p>
                            <Link href='/'><button className='btn btn-info'>Get Subscription Now</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default HomeSlider