import FormHeader from '../../../partials/formheader';
import style from '../../../styles/form.module.css'

const Step1 = () => {
    return (
        <div className={style.wrapper}>
            <FormHeader title="Your Info"
                description="Please enter your email address, name and phone number"
            />
            <div>
                <label htmlFor='name'  >Name</label>
                <input
                    className={style.input}
                    id="name"
                    type="text"
                    placeholder='eg. Gold D. Roger'
                />

                <label htmlFor='email' >Email</label>
                <input
                    className={style.input}
                    id="email"
                    type="text"
                    placeholder='eg. roger66@gmail.com'
                />

                <label htmlFor='num' >Phone no.</label>
                <input
                    className={style.input}
                    id="num"
                    type="text"
                    placeholder='eg. 3321456789'
                />
            </div>

        </div>
    );
}

export default Step1;
