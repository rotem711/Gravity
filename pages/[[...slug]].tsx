import Layout from 'layouts/page'
import { getWpStaticPaths, getWpStaticProps } from 'wordpress/wp'

export const getStaticProps = getWpStaticProps

export const getStaticPaths = getWpStaticPaths

export default Layout
