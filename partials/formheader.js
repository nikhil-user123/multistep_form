import style from '../styles/form.module.css'

const FormHeader = ({title, description}) => {
    return (
        <div className={style.header}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default FormHeader;