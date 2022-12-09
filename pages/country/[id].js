import Layout from '../component/layout/layout'
import styles from './country.module.css'
import Image from 'next/image'

const Country = ({country}) => {
    console.log(country.name)
  return (
  <Layout title={country.name}>
    <div>
        <div className={styles.overview_panel}>
            <Image src={country.flag} alt={country.flag} />
            <h1>{country.name}</h1>
            <div>{country.region}</div>        

        </div>
    </div>
  </Layout>)
 
}

export default Country

export const getServerSideProps = async ({params}) => {
    const res =await fetch(
        `https://restcountries.com/v2/name/${params.id}`
    )

    const country = await  res.json();

    return{
        props: {
            country,
        },
    }
}