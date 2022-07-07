import React, { FunctionComponent, ReactElement } from 'react'
import parse from 'html-react-parser'
import ImageComponent from 'components/generic/image/image'
import styles from './TextWithImage.module.scss'
import ITextWithImage from './TextWithImage.interface'

const TextWithImageModule:FunctionComponent<ITextWithImage> = ({ image, text }) => {
  const content = React.Children.toArray(parse(text))
  const imageEl = (<ImageComponent className={styles.image} image={image} />)

  return (
    <div
      className={`${styles.root} typo-body mb-70`}
    >
      <div className="container-insights">
        {/* insert image into first p tag to make float right work */}
        {content.map((component: ReactElement, index) => {
          if (!component?.type) return component
          const children = [
            index === 0 && imageEl,
            ...React.Children.toArray(component.props.children),
          ]
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <component.type {...component.props}>
              {children}
            </component.type>
          )
        })}

      </div>
    </div>
  )
}

export default TextWithImageModule
