import { GraphQLFetcherResult } from '@commerce/api'
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import fetch from './wp-client'
import pageQuery from './page-query'

export const getAllPagesQuery = /* GraphQL */ `
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
      ({ node }: { node: { slug: string; uri: string; id: string } }) => ({
        params: {
          slug: node.uri
            .substring(1)
            .split('/')
            .filter((i) => !!i),
        },
      })
    ),
    fallback: 'blocking',
  }
  return res
}

export const getWpStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> => {
  const res = await fetch({
    query: pageQuery,
    variables: {
      uri: (ctx.params?.slug as string[])?.join('/') || '/',
    },
  })
  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      page: res.entry,
    },
    revalidate: undefined,
  }
}
