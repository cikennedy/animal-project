import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import Layout, { siteTitle } from '../components/layout'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>Hello World</div>
      <Footer />
    </div>
  );
}
