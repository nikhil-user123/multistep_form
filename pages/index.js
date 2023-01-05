import Head from 'next/head'
import Form from '../components/form/form';
import styles from '../styles/Home.module.css'


export default function Home({page}) {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Nikhil</title>
      </Head>
      <main className={styles.main}>
        <Form />
      </main>
    </div>
  );
}


