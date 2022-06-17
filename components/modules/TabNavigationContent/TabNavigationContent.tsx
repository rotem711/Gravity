import React, {
  FunctionComponent,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import useIsMobile from 'utils/hooks'
import Image from 'components/generic/image/image'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import DropdownArrow from 'public/icons/icon-drop-arrow.svg'
import styles from './TabNavigationContent.module.scss'
import ITabNavigationContent from './TabNavigationContent.interface'

const TabNavigationContentModule: FunctionComponent<ITabNavigationContent> = (
  props,
) => {
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
      if (!tabContentRefs.current[i]) return
      if (tabContentRefs.current[i].children[0].clientHeight > tabHeight) {
        setTabHeight(
          tabContentRefs.current[i].children[0].getBoundingClientRect().height,
        )
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
    <div className={`${styles.root}`}>
      <div className="">
        {isMobile ? (
          <Accordion
            allowZeroExpanded
            preExpanded={[tabNavigationContent.mobileDefaultOpenIndex]}
          >
            {tabNavigationContent.tabs.slice(0).reverse().map((item, itemIndex) => (
              <AccordionItem
                uuid={itemIndex}
                key={item.title}
                style={{ backgroundColor: item.backgroundColor }}
                className={`${styles.accordionItem}`}
              >
                <AccordionItemState>
                  {(state) => (
                    <>
                      <AccordionItemHeading>
                        <AccordionItemButton
                          className={`${state.expanded ? styles.accordionItemActive : styles.accordionItemInActive} typo-subhead uppercase container flex items-center justify-between pt-25 pb-25`}
                        >
                          <p>
                            {item.titleIcon}
                            {item.title}
                          </p>
                          <DropdownArrow />
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel
                        className={`${state.expanded ? styles.accordionItemPanelActive : styles.accordionItemPanelInActive} container pt-85 pb-145`}
                      >
                        {item.content.map((subItem) => (
                          <div key={subItem.headline} className="mt-55 lg:mt-155 first:mt-0">
                            <h2 className="typo-headlines mb-50">
                              {subItem.headline}
                            </h2>
                            <div className="typo-body">{subItem.copy}</div>
                          </div>
                        ))}
                        <div
                          className={`${styles.mediaContainer} mt-45`}
                          style={{ color: item.backgroundColor }}
                        >
                          {item.vimeoVideoUrl
                            ? <video src={item.vimeoVideoUrl} playsInline muted loop autoPlay />
                            : (
                              item.image && (
                              <Image image={item.image} />
                              )
                            )}
                          {/* <Image image={item.image} /> */}
                          <span className={`${styles.corners}`} aria-hidden="true">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                        </div>
                      </AccordionItemPanel>

                    </>
                  )}
                </AccordionItemState>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div>
            <nav>
              <ul className="flex w-full">
                {tabNavigationContent.tabs.map((item, itemIndex) => (
                  <li
                    key={item.title}
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
                  key={item.title}
                  style={{ backgroundColor: item.backgroundColor }}
                  className={`${styles.tabItem} ${
                    index === itemIndex ? styles.isActive : ''
                  }`}
                  ref={(element) => {
                    tabContentRefs.current[itemIndex] = element
                  }}
                >
                  <div className="container default-grid lg:col-span-12 pt-50 pb-150">
                    {item.content.length === 3 ? (
                      <>
                        {item.content.map((subItem) => (
                          <div key={subItem.headline} className="mt-75 col-span-12 lg:col-span-4 default-grid lg:flex lg:flex-col">
                            <h2 className="typo-headlines mb-50 col-span-6 lg:w-full lg:flex-1">
                              {subItem.headline}
                            </h2>
                            <div className="typo-body col-span-5 col-start-8 lg:w-10/12">{subItem.copy}</div>
                          </div>
                        ))}
                        <div
                          className={`${styles.mediaContainer} mt-45 md:col-span-12`}
                          style={{ color: item.backgroundColor }}
                        >
                          <Image image={item.image} />
                          <span
                            className={`${styles.corners}`}
                            aria-hidden="true"
                          >
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
                          <div key={subItem.headline} className="mt-55 lg:mt-155 col-span-12 default-grid">
                            <h2 className="typo-headlines mb-50 col-span-5">
                              {subItem.headline}
                            </h2>
                            <div className="typo-body col-span-4 col-start-8">
                              {subItem.copy}
                            </div>
                          </div>
                        ))}
                        <div
                          className={`${styles.mediaContainer} mt-45 md:col-span-12`}
                          style={{ color: item.backgroundColor }}
                        >
                          <Image image={item.image} />
                          <span
                            className={`${styles.corners}`}
                            aria-hidden="true"
                          >
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
