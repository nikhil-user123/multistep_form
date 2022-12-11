import Head from 'next/head'
import { useState } from 'react'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CountriesTable from '../component/countriestable/CountriesTable'
import Layout from '../component/layout/layout'
import SearchInput from '../component/searchinput/SearchInput'



export default function Home({countries}) {
  console.log(countries)

  const [keyword, setKeyword] = useState(""); 

  const filteredCountries = countries.filter(
  (country) => 
  country.name.toLowerCase().includes(keyword) || 
  country.region.toLowerCase().includes(keyword) ||  
  country.subregion.toLowerCase().includes(keyword)   
  )

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase())
  }

  return <Layout >
    <div className={styles.counts}>Found {countries.length} countries
    </div>
    
    <SearchInput placeholder="Filter by name, Region or Subregion" 
    onChange={onInputChange}/>

    <CountriesTable countries={filteredCountries}/>

    </Layout>
}



export const getStaticProps = async () => {
  const res= await fetch("https://restcountries.com/v2/all")
  const countries = await res.json()
  return{
    props:{
      countries
    }
  }
}
