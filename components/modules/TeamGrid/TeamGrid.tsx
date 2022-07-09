import React, { FunctionComponent } from 'react'
import Image from 'components/generic/image/image'
import Link from 'next/link'
import Fade from 'components/generic/fade/fade'
import styles from './TeamGrid.module.scss'
import ITeamGrid from './TeamGrid.interface'

const TeamGridModule:FunctionComponent<ITeamGrid> = (props) => {
  const { teamGrid } = props

  return (
    <div
      className={`${styles.root}`}
    >
      <div className="container default-grid pt-35 pb-85">
        <h2 className="typo-subhead uppercase mb-110 lg:mb-155 col-span-12">
          <Fade>{teamGrid.topline}</Fade>
        </h2>
        <Fade
          className={`${styles.copyContainer} typo-headlines col-span-10 mb-230 sd:mb-70 lg:mb-100`}
          delay={200}
        >
          <div dangerouslySetInnerHTML={{ __html: teamGrid.bigCopy }} />
        </Fade>
        <ul className="default-grid col-span-12">
          {teamGrid.members.map((item, index) => (
            <div
              key={`${item.name}-${item.position}-${index * 2}`}
              className={`${teamGrid.members.length === 4 ? 'col-span-3' : 'col-span-3 sd:col-span-2 md:col-span-4'} mb-75 sd:mb-100 md:mb-140`}
            >
              <Fade delay={index * 150 + 200}>
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
                              <p><span className={`${styles.underlinedItem} typo-body`}>{item.name}</span></p>
                              <p><span className={`${styles.underlinedItem} typo-body`}>{item.position}</span></p>
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
              </Fade>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamGridModule
