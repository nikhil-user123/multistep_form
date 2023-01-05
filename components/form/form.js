import style from '../../styles/form.module.css';
import styles from '../../styles/sidebar.module.css';
import { useState } from 'react';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Button from '../Button';


const Form = () => {

    const [page, setPage] = useState(0)

    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 />
        } if (page === 1) {
            return <Step2 />
        } if (page === 2) {
            return <Step3 />
        } else {
            return <Step4 />
        }
    }

    return (
        <>
            <Stepper page={page} />
            <div className={style.container}>
                <div className={style.form}>
                    {PageDisplay()}
                </div>
                <div className={style.buttons_area}>
                    <div >
                        <Button color="dark" variant="text" page={page} onClick={() => { setPage((prev) => prev - 1) }} >Go Back</Button>
                    </div>
                    <div >
                        <Button color="dark" variant="contained" onClick={() => { setPage((prev) => prev + 1) }}>Next Step</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;


const Step = ({ step, text, fill }) => {
    return (
        <li className={styles.step}>
            <span className={`${styles.marker} ${fill}`}>
                {step}
            </span>
            <div>
                <span className={styles.number}>step {step}</span>
                <span className={styles.description}>{text}</span>
            </div>
        </li>
    )
}

export const Stepper = ({ page }) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.stepper}>
                <Step fill={`${page === 0 ? styles.active : ''}`} step={1} text="Your info" />
                <Step fill={`${page === 1 ? styles.active : ''}`} step={2} text="Select plan" />
                <Step fill={`${page === 2 ? styles.active : ''}`} step={3} text="Add-ons" />
                <Step fill={`${page === 3 ? styles.active : ''}`} step={4} text="Summary" />
            </div>
        </div>
    )
}

