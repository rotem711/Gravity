import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
} from 'react'
import useIsMobile from 'utils/hooks'
import Image from 'components/generic/image/image'
import DropdownArrow from 'public/icons/icon-drop-arrow.svg'
import styles from './TabNavigationContent.module.scss'
import ITabNavigationContent from './TabNavigationContent.interface'
import HeadlineSeparatorModule from '../HeadlineSeparator/HeadlineSeparator'

const TabNavigationContentModule: FunctionComponent<ITabNavigationContent> = (
  props,
) => {
  const { tabNavigationContent } = props
  const { headlineSeparator } = tabNavigationContent
  const isMobile = useIsMobile('sd')
  const isTablet = useIsMobile('md')
  const [index, setIndex] = useState(0)
  const [tabHeight, setTabHeight] = useState(0)
  const [titleHeight, setTitleHeight] = useState(0)
  const tabContentRefs = useRef([])
  const tabTitleRefs = useRef([])

  const debounce = (func) => {
    const timeX = 150 // 100 by default if no param
    let timer
    return (event) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, timeX, event)
    }
  }

  const calculateTitleHeight = () => {
    let heightTitle = 0
    setTitleHeight(0)
    setTimeout(() => {
      const elementsToIterate = [...tabTitleRefs.current].splice(index * 3, 3)
      for (let i = 0; i < elementsToIterate.length; i += 1) {
        if (!elementsToIterate[i]) return
        if (elementsToIterate[i].clientHeight > heightTitle) {
          heightTitle = elementsToIterate[i].getBoundingClientRect().height
        }
      }
      setTitleHeight(heightTitle)
    }, 10)
  }

  const recalculate = () => {
    setTabHeight(0)
    let height = 0
    for (let i = 0; i < tabContentRefs.current.length; i += 1) {
      if (!tabContentRefs.current[i]) return
      if (tabContentRefs.current[i].children[0].clientHeight > height) {
        height = tabContentRefs.current[i].children[0].getBoundingClientRect().height
      }
    }
    calculateTitleHeight()
    setTabHeight(height)
  }

  const onClickItem = (e) => {
    setIndex(parseInt(e.currentTarget.dataset.index, 10))
  }

  useEffect(() => {
    if (isMobile) {
      setIndex(tabNavigationContent.mobileDefaultOpenIndex)
    }
  }, [isMobile])

  useEffect(() => {
    calculateTitleHeight()
  }, [index])

  useEffect(() => {
    calculateTitleHeight()
    recalculate()
    // eslint-disable-next-line no-restricted-globals
    const hook = typeof screen.orientation !== 'undefined' ? 'resize' : 'orientationchange'
    window.addEventListener(hook, debounce(recalculate))
    return () => {
      window.removeEventListener(hook, debounce(recalculate))
    }
  }, [])

  const getHeadlineSeparatorModule = (item) => (
    (headlineSeparator.headline && headlineSeparator.link) ? (
      <HeadlineSeparatorModule
        disableContainer
        fieldGroupName="headlineSeparator"
        headlineSeparator={{
          headline: headlineSeparator.headline,
          backgroundColor: item.backgroundColor,
          link: headlineSeparator.link,
          enableSubscribe: false,
        }}
      />
    ) : null
  )

  return (
    <div id="tabNavigationContent" className={`${styles.root}`}>
      <div className="">
        {isMobile ? (
          tabNavigationContent.tabs
            .slice(0)
            .reverse()
            .map((item, itemIndex) => {
              const headlineSeparatorModule = (
                <div className="w-full px-0" style={{ order: 10 }}>
                  {getHeadlineSeparatorModule(item)}
                </div>
              )
              return (
                <div
                  id={`accordion-${itemIndex}`}
                  key={item.title}
                  style={{ backgroundColor: item.backgroundColor }}
                  className={`${styles.accordion} ${index === itemIndex ? styles.accordionItemActive : ''}`}
                >
                  <button
                    type="button"
                    className="typo-subhead uppercase container flex items-center justify-between pt-25 pb-25"
                    onClick={() => {
                      if (index === itemIndex) return
                      document.getElementById('tabNavigationContent').scrollIntoView({ behavior: 'auto' })
                      setIndex(itemIndex)
                      window.scrollBy({ behavior: 'smooth', top: 1 })
                    }}
                  >
                    <p>
                      {item.titleIcon}
                      {item.title}
                    </p>
                    {index !== itemIndex && <DropdownArrow />}
                  </button>

                  <div
                    className={`${styles.accordionItem} ${
                      itemIndex === index ? styles.active : ''
                    }`}
                  >
                    <div>
                      <div
                        className={`container pt-85 ${
                          headlineSeparator.headline ? '' : 'pb-145'
                        }`}
                      >
                        {item.content.map((subItem) => (
                          <div
                            key={subItem.headline}
                            className="mt-100 first:mt-0 sm:w-[70%] lg:w-[85%]"
                          >
                            <h2
                              className="typo-headlines-late mb-55 md:mb-0 lg:mb-100"
                              dangerouslySetInnerHTML={{
                                __html: subItem.headline,
                              }}
                            />
                            <div className="typo-body">{subItem.copy}</div>
                          </div>
                        ))}
                        <div
                          className={`${styles.mediaContainer} mt-45`}
                          style={{ color: item.backgroundColor }}
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
                        {headlineSeparatorModule}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
        ) : (
          <div>
            <nav>
              <ul className="flex container w-full">
                {tabNavigationContent.tabs.map((item, itemIndex) => (
                  <li
                    key={item.title}
                    style={{
                      backgroundColor: item.backgroundColor,
                      color: item.backgroundColor,
                    }}
                    className={`${styles.navTopItem} ${
                      itemIndex === 0 ? styles.navTopItemFirst : 'pl-40'
                    } flex-1 pt-30 pb-30`}
                  >
                    <button
                      className={`${styles.navItem} ${
                        index === itemIndex ? styles.isActive : ''
                      } typo-subhead uppercase block ${index !== itemIndex ? 'hover-link' : ''}`}
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
              {tabNavigationContent.tabs.map((item, itemIndex) => {
                const headlineSeparatorModule = (
                  <div className="col-span-6 sd:col-span-12" style={{ order: 10 }}>
                    {getHeadlineSeparatorModule(item)}
                  </div>
                )
                return (
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
                    <div
                      className="container default-grid sd:gap-y-105 pt-50 sd:pt-80"
                    >
                      {item.content.length === 3 ? (
                        <>
                          {item.content.map((subItem, subItemIndex) => (
                            <div
                              key={subItem.headline}
                              className="mt-45 sd:mt-0 col-span-12 md:col-span-4 default-grid md:flex md:flex-col"
                            >
                              <h2
                                className="typo-headlines-late col-span-6 sd:col-span-3 md:w-[85%] block mb-55 sd:mb-0 md:mb-70"
                                dangerouslySetInnerHTML={{
                                  __html: subItem.headline,
                                }}
                                ref={(element) => {
                                  tabTitleRefs.current[subItemIndex + itemIndex * 3] = element
                                }}
                                // eslint-disable-next-line max-len
                                style={isTablet ? {} : { height: titleHeight > 0 ? titleHeight : null }}
                              />
                              <div className="typo-body col-span-5 col-start-8 sd:col-span-3 md:w-10/12 block">
                                {subItem.copy}
                              </div>
                            </div>
                          ))}
                          <div
                            className={`${styles.mediaContainer} mt-45 sd:-mt-45 col-span-12`}
                            style={{ color: item.backgroundColor }}
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
                          {headlineSeparatorModule}
                        </>
                      ) : (
                        <>
                          {item.content.map((subItem) => (
                            <div
                              key={subItem.headline}
                              className="mt-55 xl:mt-100 col-span-12 default-grid"
                            >
                              <h2 className="typo-headlines-late col-span-5 mb-55 md:mb-0 xl:mb-100">
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
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TabNavigationContentModule
