import Head from 'next/head'
import {default as Content } from '../../components/partials/Learn-article';
import Layout from '../../components/common/Layout'
import { getAllArticlesIds, getArticlesData, getRecentArticlesData } from '../../utils/learn-articles'

export default function LearnArticle({ articlesData, recentArticles }) {
  return (
    <Layout>
      <Head>
        <title>{articlesData.title} - The Product Guy </title>
      </Head>
      <Content articleData={articlesData} recentArticleList={recentArticles}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllArticlesIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const articlesData = await getArticlesData(params.id)
  const recentArticles = getRecentArticlesData(params.id)
  return {
    props: {
      articlesData,
      recentArticles
    }
  };
}