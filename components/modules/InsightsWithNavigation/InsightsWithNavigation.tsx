import { GlobalContext } from 'pages/_app'
import React, { useContext } from 'react'
import styles from './InsightsWithNavigation.module.scss'

const InsightsWithNavigationModule = () => {
  const ctx = useContext(GlobalContext)
  const { insights, insightsCategories } = ctx
  console.log(insights, insightsCategories)
  return (
    <div className={`${styles.root}`}>
      <div className="container">Insightswithnavigation Module</div>
    </div>
  )
}

export default InsightsWithNavigationModule
