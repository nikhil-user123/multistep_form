import FormHeader from '../../../partials/formheader';
import style from '../../../styles/form.module.css'
const Step3 = () => {
    return (
        <div className={style.wrapper}>
            <FormHeader 
            title="Pick add-ons" 
            description="Add-ons enhance your gaming experience"/>
        </div>
    );
}

export default Step3;