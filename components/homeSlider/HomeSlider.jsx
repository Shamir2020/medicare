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
                        height='400'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                    <div className={styles.sliderCaption}>
                            <h3>Best doctors available. Book an appointment and get your prescription</h3>
                            <Link href='/'><button className='btn btn-primary'>Book An Appointment</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor2.avif"
                        width='1000'
                        height='400'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                        <div className={styles.sliderCaption}>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor3.avif"
                        width='1000'
                        height='400'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                    <div className={styles.sliderCaption}>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default HomeSlider