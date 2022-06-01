import React, { FunctionComponent } from 'react'
import styles from './FeaturedInsights.module.scss'
import IFeaturedInsights from './FeaturedInsights.interface'

const FeaturedInsightsModule:FunctionComponent<IFeaturedInsights> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root} container`}
    >
      Featuredinsights Module
    </div>
  )
}

export default FeaturedInsightsModule
