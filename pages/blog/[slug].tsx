import Insight from 'layouts/insight'
import {
  getWpInsightsStaticPaths,
  getWpInsightsStaticProps,
} from 'wordpress/wp-insights'

export const getStaticProps = getWpInsightsStaticProps
export const getStaticPaths = getWpInsightsStaticPaths

export default Insight
