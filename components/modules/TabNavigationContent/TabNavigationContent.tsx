import React, {
  FunctionComponent, useState, useEffect, useLayoutEffect, useRef,
} from 'react'
import useIsMobile from 'utils/hooks'
import Image from 'components/generic/image/image'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import DropdownArrow from 'public/icons/icon-drop-arrow.svg'
import styles from './TabNavigationContent.module.scss'
import ITabNavigationContent from './TabNavigationContent.interface'

// temporary
// import 'react-accessible-accordion/dist/fancy-example.css'

const TabNavigationContentModule:FunctionComponent<ITabNavigationContent> = (props) => {
  const { tabNavigationContent } = props
  const [index, setIndex] = useState(0)
  const [tabHeight, setTabHeight] = useState(0)
  const tabContentRefs = useRef([])

  const isMobile = useIsMobile()

  const onClickItem = (e) => {
    setIndex(parseInt(e.currentTarget.dataset.index, 10))
  }

  const recalculate = () => {
    for (let i = 0; i < tabContentRefs.current.length; i += 1) {
      if (tabContentRefs.current[i].children[0].clientHeight > tabHeight) {
        setTabHeight(tabContentRefs.current[i].children[0].getBoundingClientRect().height)
      }
    }
  }

  // set copyContainer height
  useLayoutEffect(() => {
    recalculate()
  })

  useEffect(() => {
    window.addEventListener('orientationchange', recalculate)
    return () => {
      window.removeEventListener('orientationchange', recalculate)
    }
  }, [index])

  return (
    <div
      className={`${styles.root}`}
    >
      <div className="">
        {isMobile ? (
          <Accordion>
            {tabNavigationContent.tabs.map((item) => (
              <AccordionItem style={{ backgroundColor: item.backgroundColor }}>
                <AccordionItemHeading>
                  <AccordionItemButton className="typo-subhead uppercase container flex items-center justify-between pt-25 pb-25">
                    <p>
                      {item.titleIcon}
                      {item.title}
                    </p>
                    <DropdownArrow />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="container pt-85 pb-145">
                  {item.content.map((subItem) => (
                    <div className="mt-155 first:mt-0">
                      <h2 className="typo-headlines mb-50">{subItem.headline}</h2>
                      <div className="typo-body">{subItem.copy}</div>
                    </div>
                  ))}
                  <div
                    className={`${styles.mediaContainer} mt-45`}
                    style={{ color: item.backgroundColor }}
                  >
                    <Image
                      image={item.image}
                    />
                    <span className={`${styles.corners}`} aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div>
            <nav>
              <ul className="flex w-full">
                {tabNavigationContent.tabs.map((item, itemIndex) => (
                  <li
                    style={{ backgroundColor: item.backgroundColor }}
                    className={`${styles.navTopItem} flex-1`}
                  >
                    <button
                      className={`${styles.navItem} ${
                        index === itemIndex ? styles.isActive : ''
                      } typo-subhead uppercase block w-full pt-35 pb-35 pl-40`}
                      onClick={onClickItem}
                      onKeyPress={onClickItem}
                      data-index={itemIndex}
                      type="button"
                    >
                      {item.titleIcon}
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className={`${styles.tabContainer} w-full`}
              style={{ height: tabHeight }}
            >
              {tabNavigationContent.tabs.map((item, itemIndex) => (
                <div
                  style={{ backgroundColor: item.backgroundColor }}
                  className={`${styles.tabItem} ${
                    index === itemIndex ? styles.isActive : ''
                  }`}
                  ref={(element) => {
                    tabContentRefs.current[itemIndex] = element
                  }}
                >
                  <div className="container default-grid xl:col-span-12 pt-50 pb-150">
                    {item.content.length === 3 ? (
                      <>
                        {item.content.map((subItem) => (
                          <div className="mt-155 col-span-4 flex flex-col">
                            <h2 className="typo-headlines mb-50 flex-1">{subItem.headline}</h2>
                            <div className="typo-body">{subItem.copy}</div>
                          </div>
                        ))}
                        <div
                          className={`${styles.mediaContainer} mt-45 xl:col-span-12`}
                          style={{ color: item.backgroundColor }}
                        >
                          <Image
                            image={item.image}
                          />
                          <span className={`${styles.corners}`} aria-hidden="true">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        {item.content.map((subItem) => (
                          <div className="mt-155 col-span-12 default-grid">
                            <h2 className="typo-headlines mb-50 col-span-5">{subItem.headline}</h2>
                            <div className="typo-body col-span-4 col-start-8">{subItem.copy}</div>
                          </div>
                        ))}
                        <div
                          className={`${styles.mediaContainer} mt-45 xl:col-span-12`}
                          style={{ color: item.backgroundColor }}
                        >
                          <Image
                            image={item.image}
                          />
                          <span className={`${styles.corners}`} aria-hidden="true">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* {tabNavigationContent.tabs.map((item, itemIndex) => (isMobile ? (
          <div>
            {item.title}
          </div>
        ) : (
          <div>
            {item.title}
          </div>
        )))} */}
      </div>
    </div>
  )
}

export default TabNavigationContentModule
