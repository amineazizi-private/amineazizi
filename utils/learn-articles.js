import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import remarkHeadingId from 'remark-heading-id'

const articlesDirectory = path.join(process.cwd(), 'data/articles')

export function getSortedArticlesData() {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the article metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
          id,
          ...matterResult.data
      }
  })
  // Sort articles by date
    return allArticlesData.sort((a, b) => {
  })
    if (a.date < b.date) {
        return 1
    } else {
        return -1
    }
}

export function getRecentArticlesData(idx) {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the article metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllArticlesIds() {
  const fileNames = fs.readdirSync(articlesDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getArticlesData(id) {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the article metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHeadingId)
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}