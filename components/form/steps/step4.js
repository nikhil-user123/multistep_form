import FormHeader from "../../../partials/formheader";
import style from '../../../styles/form.module.css';

const Step4 = () => {
    return (
        <div className={style.wrapper}>
            <FormHeader 
            title="Finishing Up"
            description="Double-Check everything looks OK before conferming"/>
        </div>
    );
}

export default Step4;