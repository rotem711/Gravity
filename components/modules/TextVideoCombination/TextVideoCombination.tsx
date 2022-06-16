import React, { FunctionComponent } from 'react'
import Button from 'components/generic/button/button'
import Image from 'components/generic/image/image'
import styles from './TextVideoCombination.module.scss'
import ITextVideoCombination from './TextVideoCombination.interface'

const TextVideoCombinationModule: FunctionComponent<ITextVideoCombination> = (
  props,
) => {
  const { textVideoCombination } = props
  return (
    <div className={`${styles.root}`}>
      <div className="container">
        {textVideoCombination.items.map((item) => (
          <div
            key={item.copy}
            className={`${styles.item} ${
              item.flipHorizontally ? styles.isFlipped : ''
            } md:default-grid`}
          >
            <header className="md:default-grid md:col-span-12 xl:block xl:col-span-6">
              <div className="md:col-span-5">
                {item.topHeadline && (
                  <span className={`typo-subhead uppercase mb-25 block ${styles.topHeadline}`}>
                    {item.topHeadline}
                  </span>
                )}
                <h2 className="typo-headlines mb-75">{item.headline}</h2>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <div
                  className="typo-body mb-45"
                  dangerouslySetInnerHTML={{ __html: item.copy }}
                />
                <div className="w-full mt-50 xl:mt-60 sm:hidden md:block">
                  <Button variant="light" link={item.link} />
                </div>
              </div>
            </header>
            <div
              className={`${styles.mediaItem} col-span-6 md:col-span-12 xl:col-span-5 xl:col-start-8 md:mb-60 xl:mb-0`}
            >
              {item.vimeoVideoUrl ? (
                <video
                  src={item.vimeoVideoUrl}
                  playsInline
                  muted
                  loop
                  autoPlay
                />
              ) : (
                item.image && <Image image={item.image} />
              )}
            </div>
            <div className="w-full mt-50 md:hidden">
              <Button variant="light" link={item.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TextVideoCombinationModule
