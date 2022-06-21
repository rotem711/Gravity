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
  const isMobile = useIsMobile()
  const [index, setIndex] = useState(0)
  const [tabHeight, setTabHeight] = useState(0)
  const [titleHeight, setTitleTabHeight] = useState(0)
  const tabContentRefs = useRef([])
  const tabTitleRefs = useRef([])

  const onClickItem = (e) => {
    setIndex(parseInt(e.currentTarget.dataset.index, 10))
  }

  const recalculate = () => {
    setTabHeight(0)
    setTitleTabHeight(0)
    let height = 0
    for (let i = 0; i < tabContentRefs.current.length; i += 1) {
      if (!tabContentRefs.current[i]) return
      if (tabContentRefs.current[i].children[0].clientHeight > height) {
        height = tabContentRefs.current[i].children[0].getBoundingClientRect().height
      }
    }
    let height_2 = 0
    for (let i = 0; i < tabTitleRefs.current.length; i += 1) {
      if (!tabTitleRefs.current[i]) return
      if (tabTitleRefs.current[i].clientHeight > height_2) {
        height_2 = tabTitleRefs.current[i].getBoundingClientRect().height + 50
      }
    }
    setTabHeight(height)
    setTitleTabHeight(height_2)
  }

  useEffect(() => {
    if (isMobile) {
      setIndex(tabNavigationContent.mobileDefaultOpenIndex)
    }
  }, [isMobile])

  useEffect(() => {
    recalculate()
    // eslint-disable-next-line no-restricted-globals
    const hook = typeof screen.orientation !== 'undefined' ? 'resize' : 'orientationchange'
    window.addEventListener(hook, recalculate)
    return () => {
      window.removeEventListener(hook, recalculate)
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
                  id="accordion"
                  key={item.title}
                  style={{ backgroundColor: item.backgroundColor }}
                  className={`${styles.accordion} ${index === itemIndex ? styles.accordionItemActive : ''}`}
                >
                  <button
                    type="button"
                    className="typo-subhead uppercase container flex items-center justify-between pt-25 pb-25"
                    onClick={() => {
                      document.getElementById('accordion').scrollIntoView({ behavior: 'smooth' })
                      setTimeout(() => {
                        setIndex(index === itemIndex ? -1 : itemIndex)
                      }, 1000)
                    }}
                  >
                    <p>
                      {item.titleIcon}
                      {item.title}
                    </p>
                    <DropdownArrow />
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
                            className="mt-100 first:mt-0 sm:w-[70%] lg:w-full"
                          >
                            <h2
                              className="typo-headlines-late mb-50"
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
                      itemIndex === 0 ? styles.navTopItemFirst : ''
                    } flex-1`}
                  >
                    <button
                      className={`${styles.navItem} ${
                        index === itemIndex ? styles.isActive : ''
                      } typo-subhead uppercase block w-full pt-30 pb-30 pl-40`}
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
                  <div className="col-span-full" style={{ order: 10 }}>
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
                      className={`container default-grid lg:col-span-12 pt-50 ${
                        headlineSeparator.headline ? '' : 'pb-150'
                      }`}
                    >
                      {item.content.length === 3 ? (
                        <>
                          {item.content.map((subItem) => (
                            <div
                              key={subItem.headline}
                              className="mt-75 col-span-12 lg:col-span-4 default-grid lg:flex lg:flex-col"
                            >
                              <h2
                                className="typo-headlines-late mb-50 col-span-6 lg:w-full block"
                                dangerouslySetInnerHTML={{
                                  __html: subItem.headline,
                                }}
                                style={{
                                  height: titleHeight !== 0 ? titleHeight : '',
                                }}
                                ref={(element) => {
                                  tabTitleRefs.current[itemIndex] = element
                                }}
                              />
                              <div className="typo-body col-span-5 col-start-8 lg:w-10/12 block">
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
                          {headlineSeparatorModule}
                        </>
                      ) : (
                        <>
                          {item.content.map((subItem) => (
                            <div
                              key={subItem.headline}
                              className="mt-55 lg:mt-100f col-span-12 default-grid"
                            >
                              <h2 className="typo-headlines-late mb-50 col-span-5">
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
