import React, { FunctionComponent } from 'react'
import styles from './TeamGrid.module.scss'
import ITeamGrid from './TeamGrid.interface'

const TeamGridModule:FunctionComponent<ITeamGrid> = (props) => {
  console.log(props)
  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container">
        Teamgrid Module
      </div>
    </div>
  )
}

export default TeamGridModule
