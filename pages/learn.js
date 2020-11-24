import Head from 'next/head'
import {default as Content } from '../components/partials/Learn';
import Layout from '../components/common/Layout'
import { getSortedArticlesData } from '../utils/learn-articles'

export default function Learn({ allArticlesData }) {
  return (
    <Layout>
      <Head>
        <title>Learn - The Product Guy </title>
      </Head>
      <Content articlesInfo={allArticlesData}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData()
  return {
    props: {
      allArticlesData
    }
  }
}