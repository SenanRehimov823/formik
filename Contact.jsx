import React from 'react'
import styles from './Contact.module.css'
import Photo from '../../public/banner-img-01.svg'
import { useFormik } from 'formik';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (
        <section className={styles.container}>
            <div className={styles.py}>
                <div className={styles.row}>
                    <div className={styles.header}>
                        <h1>Contact</h1>
                        <h3>Elit, sed do eiusmod tempor</h3>
                        <p>
                            Vector illustration is from <a rel="nofollow" href="https://storyset.com/" target="_blank">StorySet</a>.
                            Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </p>
                    </div>
                    <div className={styles.image}>
                        <img src={Photo} alt="" />
                    </div>

                </div>

            </div>
    


        </section>


    )
}

export default Contact