import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from './wp-client'
import insightsQuery from './insights-query'

export const getAllInsightsQuery = /* GraphQL */ `
  query getAllInsights {
    posts {
      edges {
        node {
          id
          slug
          uri
          databaseId
        }
      }
    }
  }
`
export const getDatabaseIdQuery = /* GraphQL */ `
  query getDatabaseIdQuery($uri: String) {
    post: postBy(slug: $uri) {
      databaseId
    }
  }
`

export const getWpInsightsStaticPaths = async () => {
  const { posts } = await fetch({
    query: getAllInsightsQuery,
  })
  const res = {
    paths: posts.edges.map(
      // eslint-disable-next-line arrow-body-style
      ({ node }: { node: { slug: string; uri: string; id: string } }) => ({
        params: {
          slug: node.uri,
        },
      }),
    ),
    fallback: 'blocking',
  }
  return res
}

export const getWpInsightsStaticProps = async (
  ctx: GetStaticPropsContext,
): Promise<GetStaticPropsResult<any>> => {
  const dbPost = await fetch({
    query: getDatabaseIdQuery,
    variables: {
      uri: ctx.params?.slug,
    },
  })
  const { post: { databaseId } } = dbPost

  const res = await fetch({
    query: insightsQuery,
    variables: {
      uri: ctx.params?.slug,
      databaseId: databaseId.toString(),
    },
  })
  if (!res || !res.entry) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      insight: res.entry,
      footer: res.footer.footer,
      settings: res.settings.globalSettings,
      header: res.header.header,
      nextPosts: res.nextPosts,
    },
    revalidate: undefined,
  }
}
