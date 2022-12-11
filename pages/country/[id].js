import styles from './country.module.css'
import Image from 'next/image'
import Layout from '../../component/layout/layout'

const Country = ({country}) => {
    console.log(country.flags)
  return (
  <Layout title={country.name}>
    <div>
        <div className={styles.overview_panel}>
            <Image src={country.flags} alt={country.flags} />
            <h1>{country.name}</h1>
            <div>{country.region}</div>        

        </div>
    </div>
  </Layout>)
 
}

export default Country

export const getServerSideProps = async ({params}) => {
    const res =await fetch(
        `https://restcountries.com/v2/all/${params.id}`
    )

    const country = await  res.json();

    return{
        props: {
            country,
        },
    }
}