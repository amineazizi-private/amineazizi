import Head from 'next/head'
import { default as Content } from '../components/partials/Home';
import Layout from '../components/common/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Amine Azizi - The Product Guy </title>
      </Head>
      <Content />
    </Layout>
  )
}
