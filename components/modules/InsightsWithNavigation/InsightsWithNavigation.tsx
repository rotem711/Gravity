import { GlobalContext } from 'pages/_app'
import React, { useContext } from 'react'
import IInsightsWithNavigation from './InsightsWithNavigation.interface'
import styles from './InsightsWithNavigation.module.scss'

const InsightsWithNavigationModule = ({ textVideoCombinationV2 }: IInsightsWithNavigation) => {
  const ctx = useContext(GlobalContext)
  const { insights, insightsCategories } = ctx
  console.log(insights, insightsCategories, textVideoCombinationV2)
  return (
    <div className={`${styles.root}`}>
      <div className="container">Insightswithnavigation Module</div>
    </div>
  )
}

export default InsightsWithNavigationModule
