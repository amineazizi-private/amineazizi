import Head from 'next/head'
import { default as Content } from '../components/partials/Home';
import Layout from '../components/common/Layout';
import { getRecentArticlesData } from '../utils/learn-articles';

export default function Home({recentArticles }) {
  return (
    <Layout>
      <Head>
        <title> Amine Azizi - The Product Guy </title>
      </Head>
      <Content recentArticleList={recentArticles}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const recentArticles = getRecentArticlesData()
  return {
    props: {
      recentArticles
    }
  };
}
