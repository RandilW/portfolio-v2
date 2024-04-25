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

  const calculateTime = () => {
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

    const seconds = () => {
      const sec = cdtTime.getSeconds();
      if (sec <= 9) {
        return `0${sec}`;
      } else {
        return sec;
      }
    };

    return `${cdtTime.getHours() > 12 ? hours() - 12 : hours()}:${
        minutes()}:${seconds()} ${amOrPm()} CDT`;
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const validateForm = () => {
    let errors = {};

    if (formState.name.trim() === "") {
      errors.name = "Please enter a valid name";
    }

    if (!/^.+@.+..+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (formState.message.length < 3 || formState.message.length > 3000) {
      errors.message = "Please enter a text between 3 and 3000 characters";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);

  const [captchaError, setCaptchaError] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!captchaSolved) {
      console.log('Please solve the captcha before submitting the form.');
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);

    setLoading(true);

    if (formRef.current) {
      formRef.current.submit();
    }

    fetch('https://script.google.com/macros/s/AKfycbwQHLUma22jhalTsmex1IMvkSk76eJxlhFu-0wxW07_Tsa3_P0DhVo6Bl28coJLeC-5/exec', {
      method: 'POST',
      body: new FormData(event.target),
    }).then(() => {
      console.log('Form submitted');
      setIsSubmitted(true);
      setLoading(false);
      // Reset the form state
      setFormState({
        name: "",
        email: "",
        message: ""
      });
    });
  };

  return (

        <section ref={connectSectionRef} className={styles.parent_container} data-bgcolor="#eeeeee" data-textcolor="#181818">
          <p className={styles.heading}>Connect</p>

          <div className={styles.flexCol}>
            <form id="myForm" className={styles.form} method="post" action=""
                  enctype="multipart/form-data" novalidate="" onSubmit={handleSubmit}>
              <div className={styles.formCol}>
                <h5>01</h5>
                <label className={styles.label} htmlFor="name">What's your name?</label>
                <input className={styles.field} type="text" id="form-name" name="name" required placeholder="John Doe *"
                       onChange={handleChange} value={formState.name}/>
                {formErrors.name &&
                    <div className={`${styles.alert} ${styles.alertError}`}><span>{formErrors.name}</span></div>}
              </div>
              <div className={styles.formCol}>
                <h5>02</h5>
                <label className={styles.label} htmlFor="email">What's your email?</label>
                <input className={styles.field} type="email" id="form-email" name="email" required
                       placeholder="john@doe.com *" onChange={handleChange} value={formState.email}/>
                {formErrors.email &&
                    <div className={`${styles.alert} ${styles.alertError}`}><span>{formErrors.email}</span></div>}
              </div>
              <div className={styles.formCol}>
                <h5>03</h5>
                <label className={styles.label} htmlFor="message">Your message</label>
                <textarea className={styles.field} type="text" id="form-message" name="message" rows="8" required
                          placeholder="Enter your message here ... *" onChange={handleChange}
                          value={formState.message}></textarea>
                {formErrors.message &&
                    <div className={`${styles.alert} ${styles.alertError}`}><span>{formErrors.message}</span></div>}
              </div>
              <div className={styles.formCol}>
                <h5>06</h5>
                <label className={styles.label} htmlFor="message">Are you a human?</label>
                <div className={styles.cap}>
                  <FriendlyCaptcha setCaptchaSolved={setCaptchaSolved}/>
                </div>
                {captchaError && <div className={`${styles.alert} ${styles.alertError}`}><span>Please solve the captcha before submitting the form.</span></div>}
              </div>
              <div className={styles.successCol}>
                {isSubmitted && <div className={`${styles.success}`}><span>Success. Message sent!</span></div>}
              </div>
              <section className={styles.connect_links_container}>
                <AnimatedButton>
                  <button type="submit" className={styles.connect_links} style={{zIndex: 100, background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </AnimatedButton>


              </section>
            </form>

          </div>


          <footer>
          <section className={styles.footer_details_container}>
              <div className={styles.footer_moredetails_container}>
                <div className={styles.footer_meta_container}>
                <span>Version</span>
                <p>© 2024 </p>
              </div>

              <div className={styles.footer_meta_container}>
                <span>Local Time</span>
                <p>{time}</p>
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
