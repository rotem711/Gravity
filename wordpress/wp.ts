import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import fetch from './wp-client'
import pageQuery from './page-query'
import { getCategoryIdBySlug, getPosts, getPostsByCategory } from './insights'

export const getAllPagesQuery = `
  query getAllPages {
    pages {
      edges {
        node {
          id
          slug
          uri
        }
      }
    }
  }
`

export const getWpStaticPaths = async (ctx: GetStaticPropsContext) => {
  const { pages } = await fetch({
    query: getAllPagesQuery,
  })
  const res = {
    paths: pages.edges.map(
      // eslint-disable-next-line arrow-body-style
      ({ node }: { node: { slug: string; uri: string; id: string } }) => ({
        params: {
          slug: node.uri
            .substring(1)
            .split('/')
            .filter((i) => !!i),
        },
      }),
    ),
    fallback: 'blocking',
  }
  return res
}

export const getWpStaticProps = async (
  ctx: GetStaticPropsContext,
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: pageQuery,
    variables: {
      uri: (ctx.params?.slug as string[])?.join('/') || '/',
    },
  })
  if (!res || !res.entry) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      page: res.entry,
      footer: res.footer.footer,
      settings: res.settings.globalSettings,
      header: res.header.header,
      platformNavigation: res.platformNavigation.platformNavigation,
      insights: res.insights.nodes,
      insightsCategories: res.insightsCategories,
    },
    revalidate: undefined,
  }
}

export const getWpServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<any>> => {
  const res = await fetch({
    query: pageQuery,
    variables: {
      uri: 'insights',
    },
  })

  let posts
  if (ctx.query.cat && ctx.query.cat !== 'all') {
    const categoryBySlug = await fetch({
      query: getCategoryIdBySlug,
      variables: {
        slug: [ctx.query.cat],
      },
    })
    const {
      categories: { nodes },
    } = categoryBySlug
    if (nodes && nodes.length > 0) {
      posts = await fetch({
        query: getPostsByCategory,
        variables: {
          category: nodes[0].databaseId,
        },
      })
    }
  } else {
    posts = await fetch({
      query: getPosts,
      variables: {
        // eslint-disable-next-line radix
        total: parseInt(ctx.query.offset as string) || 4,
      },
    })
  }

  if (!res || !res.entry) {
    return {
      notFound: true,
    }
  }

  const insightsCategories = res.insightsCategories.nodes.filter(
    (e) => e.name !== 'Uncategorized',
  )

  return {
    props: {
      page: res.entry,
      footer: res.footer.footer,
      settings: res.settings.globalSettings,
      header: res.header.header,
      platformNavigation: res.platformNavigation.platformNavigation,
      insights: posts.insights,
      insightsCategories,
    },
  }
}
