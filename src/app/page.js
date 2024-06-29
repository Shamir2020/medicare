import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "../../components/homeSlider/HomeSlider";
import Link from "next/link";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <>
      <HomeSlider />

      <div className={styles.servicesContainer}>
        <h2>Our Services</h2>
        <div className={styles.servicesContainerInside}>

          <Link href=''>
            <div className={styles.serviceCard}>

              <Image src='/service1.jpg' width='100' height='200' alt='error' />
              <h5>Online Doctor Consultation</h5>
              <p>for your health issues</p>

              <Image style={{ height: '30px', width: '30px' }} src='/check.svg' width='20' height='20' alt="error" />

            </div>
          </Link>

          <Link href=''>
            <div className={styles.serviceCard}>

              <Image src='/service2.jpg' width='100' height='200' alt='error' />
              <h5>Medical Test</h5>
              <p>get it done home</p>

              <Image style={{ height: '30px', width: '30px' }} src='/check.svg' width='20' height='20' alt="error" />
            </div>
          </Link>

          <Link href=''>
            <div className={styles.serviceCard}>

              <Image src='/service3.avif' width='100' height='200' alt='error' />
              <h5>Subscribcion plans</h5>
              <p>for affordable health care</p>
              <Image style={{ height: '30px', width: '30px' }} src='/check.svg' width='20' height='20' alt="error" />
            </div>
          </Link>

          <Link href=''>
            <div className={styles.serviceCard}>

              <Image src='/service4.png' width='100' height='200' alt='error' />
              <h5>Order Medicines Online</h5>
              <p>for your convenience</p>
              <Image style={{ height: '30px', width: '30px' }} src='/check.svg' width='20' height='20' alt="error" />
            </div>
          </Link>

        </div>
      </div>


      <div className={styles.homeRow1}>
        <div className={styles.homeRow1Header}>
          <div className={styles.homeRow1HeaderCol1}>
            <h4>Get best medical consulations online from the best doctors for your health issues</h4>
          </div>
          <div className={styles.homeRow1HeaderCol2}>
            <Link href=''><button className="btn btn-primary">View All Specialists</button></Link>
          </div>
        </div>
        <div className={styles.homeRow1Inside}>

          <Link href=''>
            <div className={styles.homeRow1Card}>
              <Image src='/fever.jpg' width='100' height='100' alt="error" />
              <h5>Cough, Cold or Fever</h5>
              <p>Consult Now</p>
            </div>
          </Link>

          <Link href=''>
            <div className={styles.homeRow1Card}>
              <Image src='/depression.jpg' width='100' height='100' alt="error" />
              <h5>Depression or Anxiety</h5>
              <p>Consult Now</p>
            </div>
          </Link>

          <Link href=''>
            <div className={styles.homeRow1Card}>
              <Image src='/cough.webp' width='100' height='100' alt="error" />
              <h5>Children feeling sick</h5>
              <p>Consult Now</p>
            </div>
          </Link>

          <Link href=''>
            <div className={styles.homeRow1Card}>
              <Image src='/acne.avif' width='100' height='100' alt="error" />
              <h5>Acne, pimple, skin diseases</h5>
              <p>Consult Now</p>
            </div>
          </Link>

          <Link href=''>
            <div className={styles.homeRow1Card}>
              <Image src='/headache.png' width='100' height='100' alt="error" />
              <h5>Troublesome headache</h5>
              <p>Consult Now</p>
            </div>
          </Link>


        </div>
      </div>


      <div className={styles.homeRow2}>

        <div className={styles.homeRow2Inside}>
          <h4>Why Medicare ?</h4>

          <div className={styles.homeRow2CardContainer}>

            <div className={styles.homeRow2Card}>
              <h4>150+</h4>
              <p>Best Doctors</p>
            </div>

            <div className={styles.homeRow2Card}>
              <h4>5+</h4>
              <p>Experience of most Doctors</p>
            </div>

            <div className={styles.homeRow2Card}>
              <h4>30+</h4>
              <p>Specialists</p>
            </div>

            <div className={styles.homeRow2Card}>
              <h4>4.7+</h4>
              <p>Google Rating</p>
            </div>

            <div className={styles.homeRow2Card}>
              <Image src='/privacy.png' width='50' height='50' />
              <p>Best Security of Data</p>
            </div>

          </div>

        </div>
      </div>


      <div className={styles.homeRow3}>
        <h4>How it works</h4>
        <div className={styles.homeRow3Inside}>

          <div className={styles.homeRow3Card}>
            <Image src='/register.png' height='32' width='32' alt="error" />
            <h5>Register</h5>
          </div>

          <div className={styles.homeRow3Card}>
            <Image src='/book.png' height='32' width='32' alt="error" />
            <h5>Book</h5>
          </div>

          <div className={styles.homeRow3Card}>
            <Image src='/pay.png' height='32' width='32' alt="error" />
            <h5>Pay</h5>
          </div>

          <div className={styles.homeRow3Card}>
            <Image src='/consult.png' height='32' width='32' alt="error" />
            <h5>Consult</h5>
          </div>

          <div className={styles.homeRow3Card}>
            <Image src='/check.svg' height='32' width='32' alt="error" />
            <h5>Receive </h5>
            <h5>prescription</h5>
          </div>

        </div>
      </div>


      <div className={styles.homeRow4}>
        <div className={styles.homeRow4Inside}>
          <div className={styles.homeRow4Header}>
            <h4>Available Specialists</h4>
            <p>Book your online consultation effortlessly and connect with leading doctors via video call or in-person soon.
              Please choose the specialty of the doctor you need below:</p>
          </div>

          <div className={styles.homeRow4Content}>
            <div className={styles.homeRow4CardContainer}>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>General Physician</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Neurologist</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
                <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Pediatrics</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Neurosurgery</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Endocrinology</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Dermatology</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Psychiatry</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Nephrology</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Obstetrics & Gyanaecology</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Dentist</h5>
              </div>
              </Link>
              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Cardiologist</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>General Surgery</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Pulmonology</h5>
              </div>
              </Link>

              <Link href=''>
              <div className={styles.homeRow4Card}>
              <Image src='/check-black.svg' height='20' width='20' alt="error" />
                <h5>Physiotherapy</h5>
              </div>
              </Link>

            </div>

            <div className={styles.HomeRow4PicContainer}>
              <Image src='/consult-doctor.webp' height='400' width='400' alt="error" />
            </div>
          </div>

        </div>
      </div>


      <div className={styles.homeRow5}>
        <div className={styles.homeRow5Inside}>
          <h3>Best quality treatment that saves lives</h3>

          <p>In our platform, you will get quality treatment that saves lives with the most affordable price.</p>
          <p>When you use our services, you are also contributing to bringing quality healthcare to disadvantaged and marginalized communities.</p>
          <p>Your support helps us save more lives.</p>
        </div>
      </div>

      <div className={styles.homeRow6}>
        <div className={styles.homeRow6Header}>
          <h3>Health Blogs from Doctors</h3>
          <Link href=''><button className="btn btn-primary">View All Blogs</button></Link>
        </div>
        <div className={styles.homeRow6Inside}>
          <div className={styles.homeRow6Card}>
              <Image src='/heart-attack.jpg' height='200' width='200' alt="error" />
              <h5>Reason behind the increased heart attacks</h5>

              <Link href=''><button className="btn btn-primary">Read More</button></Link>
          </div>

          <div className={styles.homeRow6Card}>
              <Image src='/heart-attack.jpg' height='200' width='200' alt="error" />
              <h5>Reason behind the increased heart attacks</h5>

              <Link href=''><button className="btn btn-primary">Read More</button></Link>
          </div>

          <div className={styles.homeRow6Card}>
              <Image src='/heart-attack.jpg' height='200' width='200' alt="error" />
              <h5>Reason behind the increased heart attacks</h5>

              <Link href=''><button className="btn btn-primary">Read More</button></Link>
          </div>

          <div className={styles.homeRow6Card}>
              <Image src='/heart-attack.jpg' height='200' width='200' alt="error" />
              <h5>Reason behind the increased heart attacks</h5>

              <Link href=''><button className="btn btn-primary">Read More</button></Link>
          </div>

          <div className={styles.homeRow6Card}>
              <Image src='/heart-attack.jpg' height='200' width='200' alt="error" />
              <h5>Reason behind the increased heart attacks</h5>

              <Link href=''><button className="btn btn-primary">Read More</button></Link>
          </div>
        </div>
      </div>




    </>

  );
}
