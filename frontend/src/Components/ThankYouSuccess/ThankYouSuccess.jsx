import React, { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import styles from './ThankYouSuccess.module.scss'

const ThankYouSuccess = () => {
    useEffect(() => {
        document.body.classList.add('triger_overflow');

        return () => {
          document.body.classList.remove('triger_overflow');
        };
      }, []);
      
    
    const nexusTarget = () => {
        window.location.reload(false);
    };
  return (
    <>
    <div className={styles.overlay}></div>
    <Alert className={styles.alert_trigger}  variant="success">
      <p>
      "Your message has been successfully sent. We will contact you as soon as possible. Thank you for your interest in NexusBeans. Let's innovate together!"
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button className="btn-four" onClick={nexusTarget} >
          Close me
        </Button>
      </div>
    </Alert>
  </>
  )
}

export default ThankYouSuccess