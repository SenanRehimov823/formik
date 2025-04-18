import React from 'react';
import { useFormik } from 'formik';
import styles from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      phone: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    },
    onSubmit: values => {
      axios.post("https://northwind.vercel.app/api/categories", values);
      formik.resetForm()
    },
  });

  return (
<div>
<h1>Create success campaign with us!</h1>
<h2>Elit, sed do eiusmod tempor </h2>
<p >
            Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate.
        </p>
<div className={styles.row}>
<div className={styles.row1}>
    <p>Media Contact</p>


</div>

</div>
<form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className={styles.input}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={styles.input}
        />
      </div>

      <div className={styles.row}>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className={styles.input}
        />
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company Name"
          onChange={formik.handleChange}
          value={formik.values.company}
          className={styles.input}
        />
      </div>

      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="Subject"
        onChange={formik.handleChange}
        value={formik.values.subject}
        className={styles.input}
      />

      <textarea
        id="message"
        name="message"
        placeholder="Message"
        onChange={formik.handleChange}
        value={formik.values.message}
        className={styles.textarea}
      />

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>Send Message</button>
      </div>
    </form>
</div>

  
  );
};

export default Form;
