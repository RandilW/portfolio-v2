'use client'

import React, { useState, useRef, useEffect } from "react";
import AnimatedButton from "./commonComponents/AnimatedButton";
import styles from "../styles/connect.module.css";
import socialLinks from "./json/socialLinks";
import { WidgetInstance } from 'friendly-challenge';

const FriendlyCaptcha = ({ setCaptchaSolved }) => {
  const container = useRef();
  const widget = useRef();

  const doneCallback = (solution) => {
    console.log('Captcha was solved. The form can be submitted.');
    console.log(solution);
    setCaptchaSolved(true); // Set captcha as solved
  }

  const errorCallback = (err) => {
    console.log('There was an error when trying to solve the Captcha.');
    console.log(err);
  }

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, {
        startMode: "none",
        doneCallback: doneCallback,
        errorCallback: errorCallback
      });
    }

    return () => {
      if (widget.current != undefined) widget.current.reset();
    }
  }, [container]);

  return (
      <div ref={container} className="frc-captcha dark" data-sitekey="FCMIA1BQB776MIE7" data-start="none" name="captchaSolution" />
  );
}

const Connect = ({ connectSectionRef }) => {

  const [captchaSolved, setCaptchaSolved] = useState(false);

  const d = new Date();
  const offSetTime = d.getTimezoneOffset();
  const cdtOffset = 5 * 60;
  const totalOffset = offSetTime - cdtOffset;
  const cdtTime = new Date(d.getTime() + totalOffset * 60000);

  const amOrPm = () => {
    const hours = cdtTime.getHours();
    if (hours >= 12) {
      return "PM";
    }
    return "AM";
  };

  const hours = () => {
    const hrs = cdtTime.getHours();
    if (hrs <= 9) {
      return `0${hrs}`;
    } else {
      return hrs;
    }
  };

  const minutes = () => {
    const min = cdtTime.getMinutes();
    if (min <= 9) {
      return `0${min}`;
    } else {
      return min;
    }
  };

  const formattedTime = `${cdtTime.getHours() > 12 ? hours() - 12 : hours()}:${
      minutes() + ` ${amOrPm()}`
  } CDT`;

  const [formState, setFormState] = useState({
    tel: "",
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.captchaSolved) {
      console.log('Please solve the captcha before submitting the form.');
      return;
    }

    fetch('https://script.google.com/macros/s/AKfycbxZ6QdYsR2wVyceayqXRSxynfTPbzhv7Mo_BbBH1L342hHItMzsOVsuHOa4ecYjJ46M/exec', {
      method: 'POST',
      body: new FormData(event.target),
    }).then(() => {
      console.log('Form submitted');
      // Reset the form state
      setFormState({
        tel: "",
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    });
  };

  return (

        <section ref={connectSectionRef} className={styles.parent_container} data-bgcolor="#eeeeee" data-textcolor="#181818">
          <p className={styles.heading}>Connect</p>

          <div className={styles.flexCol}>
            <form className={styles.form} method="post" action="https://dennissnellenberg.com/contact"
                  enctype="multipart/form-data" novalidate="">
              {/*<div className={styles.websiteField}>*/}
              {/*  <label className={styles.label} htmlFor="tel">Phone Number</label>*/}
              {/*  <input className={styles.field} type="text" id="form-tel" name="tel" tabIndex="-1"*/}
              {/*         onChange={handleChange} value={formState.tel}/>*/}
              {/*</div>*/}
              <div className={styles.formCol}>
                <h5>01</h5>
                <label className={styles.label} htmlFor="name">What's your name?</label>
                <input className={styles.field} type="text" id="form-name" name="name" required placeholder="John Doe *"
                       onChange={handleChange} value={formState.name}/>
              </div>
              <div className={styles.formCol}>
                <h5>02</h5>
                <label className={styles.label} htmlFor="email">What's your email?</label>
                <input className={styles.field} type="email" id="form-email" name="email" required
                       placeholder="john@doe.com *" onChange={handleChange} value={formState.email}/>
              </div>
              {/*<div className={styles.formCol}>*/}
              {/*  <h5>03</h5>*/}
              {/*  <label className={styles.label} htmlFor="company">What's the name of your organization?</label>*/}
              {/*  <input className={styles.field} type="text" id="form-company" name="company" required*/}
              {/*         placeholder="John & Doe ®" onChange={handleChange} value={formState.company}/>*/}
              {/*</div>*/}
              {/*<div className={styles.formCol}>*/}
              {/*  <h5>04</h5>*/}
              {/*  <label className={styles.label} htmlFor="service">What services are you looking for?</label>*/}
              {/*  <input className={styles.field} type="text" id="form-service" name="service" required*/}
              {/*         placeholder="Web Design, Web Development ..." onChange={handleChange} value={formState.service}/>*/}
              {/*</div>*/}
              <div className={styles.formCol}>
                <h5>03</h5>
                <label className={styles.label} htmlFor="message">Your message</label>
                <textarea className={styles.field} type="text" id="form-message" name="message" rows="8" required
                          placeholder="Enter your message here ... *" onChange={handleChange}
                          value={formState.message}></textarea>
              </div>
              <div className={styles.formCol}>
                <h5>06</h5>
                <label className={styles.label} htmlFor="message">Are you a human?</label>
                <div className={styles.cap}>
                  <FriendlyCaptcha/>
                </div>
              </div>
              <section className={styles.connect_links_container}>
                <AnimatedButton>
                  <a
                      href="/"
                      target=""
                      rel="noopener noreferrer"
                      className={styles.connect_links}
                  >
                    submit
                  </a>
                </AnimatedButton>
              </section>
            </form>
          </div>


        <footer>
          <section className={styles.connect_links_container}>
            {/*<AnimatedButton>*/}
            {/*  <a*/}
            {/*      href="mailto:hello@pavanbhaskar.com"*/}
            {/*      target="_blank"*/}
            {/*      rel="noopener noreferrer"*/}
            {/*      className={styles.connect_links}*/}
            {/*  >*/}
            {/*    hello@pavanbhaskar.com*/}
            {/*  </a>*/}
            {/*</AnimatedButton>*/}
            {/*<AnimatedButton>*/}
            {/*  <a*/}
            {/*      href="tel:+919440777253"*/}
            {/*      target="_blank"*/}
            {/*      rel="noopener noreferrer"*/}
            {/*      className={styles.connect_links}*/}
            {/*  >*/}
            {/*    +91 9440777253*/}
            {/*  </a>*/}
            {/*</AnimatedButton>*/}
          </section>

          <section className={styles.footer_details_container}>
            <div className={styles.footer_moredetails_container}>
              <div className={styles.footer_meta_container}>
                <span>Version</span>
                <p>© 2024 </p>
              </div>

              <div className={styles.footer_meta_container}>
                <span>Local Time</span>
                <p>{formattedTime}</p>
              </div>
            </div>

            <div className={styles.footer_meta_container}>
              <span>Socials</span>

              <div className={styles.social_links}>
                {socialLinks.map((details, index) => {
                  const {name, url} = details;
                  return (
                      <a
                          href={url}
                          rel="noopener noreferrer"
                          target="_blank"
                          key={index}
                      >
                        {name}
                      </a>
                  );
                })}
              </div>
              <hr className={styles.divider}/>
            </div>
          </section>
        </footer>
        </section>
  );
};

export default Connect;
