import FormHeader from '../../../partials/formheader';
import style from '../../../styles/form.module.css'
const Step2 = () => {
    return (
        <div className={style.wrapper}>
            <FormHeader title="Select Your Plan" 
                description="You have the option for monthly or yearly billing"    
            />
        </div>
    );
}

export default Step2;