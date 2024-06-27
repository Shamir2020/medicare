"use client"
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
const HomeSlider = () => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor1.jpg"
                        width='1000'
                        height='450'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor2.avif"
                        width='1000'
                        height='450'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image

                        className="d-block w-100"
                        src="/doctor3.avif"
                        width='1000'
                        height='450'
                        alt="First slide"
                        style={{objectFit:"cover"}}
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default HomeSlider