import React, { FunctionComponent } from 'react'
import Image from 'components/generic/image/image'
import Link from 'next/link'
import styles from './TeamGrid.module.scss'
import ITeamGrid from './TeamGrid.interface'

const TeamGridModule:FunctionComponent<ITeamGrid> = (props) => {
  const { teamGrid } = props
  const membersLength = teamGrid.members.length

  return (
    <div
      className={`${styles.root}`}
      // style={}
    >
      <div className="container default-grid pt-35 pb-85">
        <h2 className="typo-subhead uppercase mb-155 col-span-12">{teamGrid.topline}</h2>
        <p
          className={`${styles.copyContainer} typo-headlines col-span-10 mb-100`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: teamGrid.bigCopy }}
        />
        <ul className="default-grid col-span-12">
          {teamGrid.members.map((item) => (
            <div
              key={item.name}
              className={`${membersLength === 4 ? 'col-span-3' : 'col-span-4'} mb-140`}
            >
              <figure>
                <div className={`${styles.mediaContainer}`}>
                  <Image image={item.image} />
                </div>
                <figcaption className="mt-25">
                  {
                    item.linkedUrl ? (
                      <Link href={item.linkedUrl}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.underlinedContainer}`}
                        >
                          <p className={`${styles.underlinedItem} typo-body`}>{item.name}</p>
                          <p className={`${styles.underlinedItem} typo-body`}>{item.position}</p>
                        </a>
                      </Link>
                    ) : (
                      <div>
                        <p className="typo-body">{item.name}</p>
                        <p className="typo-body">{item.position}</p>
                      </div>
                    )
                  }
                </figcaption>
              </figure>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamGridModule
