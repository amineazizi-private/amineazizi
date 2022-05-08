import Head from 'next/head'
import { default as Content } from '../components/partials/About-me';
import Layout from '../components/common/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> About - Amine Azizi</title>
      </Head>
      <Content />
    </Layout>
  )
}
