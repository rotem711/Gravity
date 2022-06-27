import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
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
  console.log(ctx)
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
  console.log(ctx.params)
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
