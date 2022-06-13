import React, { FunctionComponent } from 'react'
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
  const isMobile = useIsMobile()

  return (
    <div
      className={`${styles.root}`}
    >
      <div className="">
        {isMobile ? (
          <Accordion
            // preExpanded={tabNavigationContent.mobileDefaultOpenIndex}
          >
            {tabNavigationContent.tabs.map((item, itemIndex) => (
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
                  {item.content.map((subItem, itemIndex) => (
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
          <div>dazdaz desktop</div>
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
