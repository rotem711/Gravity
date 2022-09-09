/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { FunctionComponent, useState } from 'react'
import submitForm from 'utils/hubspot'
import Button from 'components/generic/button/button'
import Fade from 'components/generic/fade/fade'
import { validateEmail } from 'utils/hooks'
import ImageComponent from 'components/generic/image/image'
import styles from './BookADemo.module.scss'
import IBookADemo from './BookADemo.interface'

const BookADemoModule: FunctionComponent<IBookADemo> = (props) => {
  const {
    bookADemo: { subline, headline, image, checkboxDisclaimer },
  } = props

  const emptyFormObject = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    checkbox: false,
  }
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState(emptyFormObject)
  const errorObject = {
    firstName: false,
    lastName: false,
    companyName: false,
    email: false,
  }
  const [errors, setErrors] = useState(errorObject)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    setFormData({ ...formData, [key]: e.target.value })
    if (e.target.value && e.target.value.length > 0) {
      let tmp = Object.assign({}, errors)
      tmp[key] = false
      setErrors(tmp)
    }
  }

  const validateFields = () => {
    const { firstName, lastName, companyName, email } = formData
    if (firstName && lastName && companyName && email && validateEmail(email)) {
      setErrors(errorObject)
      return true
    }
    let tmp = Object.assign({}, errors)
    if (!firstName) {
      console.log('firstName is empty')
      tmp.firstName = true
    }
    if (!lastName) {
      tmp.lastName = true
    }
    if (!companyName) {
      tmp.companyName = true
    }
    if (!email || !validateEmail(email)) {
      tmp.email = true
    }
    setErrors(tmp)
    return false
  }

  const submit = async () => {
    if (validateFields()) {
      setSuccess(true)
      await submitForm(formData)
      setFormData(emptyFormObject)
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }
  }

  return (
    <div className={`${styles.root} pt-130 pb-45 md:pt-140 md:pb-50 lg:py-200`}>
      <div className="container">
        <div className="default-grid">
          <Fade className=" col-span-12 lg:col-span-6">
            {subline && <h4 className="mb-30 uppercase">{subline}</h4>}
            {headline && <h2 className="typo-headlines">{headline}</h2>}
            <div
              className={`${styles.form} mt-35 md:mt-40 grid md:grid-cols-2 gap-y-25 md:gap-y-40 gap-x-15 md:gap-x-20 xl:gap-x-30`}
            >
              <input
                placeholder="First Name*"
                type="text"
                value={formData.firstName}
                className={`col-span-2 md:col-span-1 ${
                  errors.firstName ? styles.hasError : ''
                }`}
                onChange={(e) => handleChange(e, 'firstName')}
              />
              <input
                placeholder="Last Name*"
                type="text"
                value={formData.lastName}
                className={`col-span-2 md:col-span-1 ${
                  errors.lastName ? styles.hasError : ''
                }`}
                onChange={(e) => handleChange(e, 'lastName')}
              />
              <input
                placeholder="Company Name*"
                type="text"
                value={formData.companyName}
                className={`col-span-2 ${
                  errors.companyName ? styles.hasError : ''
                }`}
                onChange={(e) => handleChange(e, 'companyName')}
              />
              <input
                placeholder="Business Email Address*"
                type="email"
                value={formData.email}
                className={`col-span-2 md:col-span-1 ${
                  errors.email ? styles.hasError : ''
                }`}
                onChange={(e) => handleChange(e, 'email')}
              />
              <input
                placeholder="Phone Number"
                type="text"
                value={formData.phoneNumber}
                className="col-span-2 md:col-span-1"
                onChange={(e) => handleChange(e, 'phoneNumber')}
              />
              <div className="col-span-2 relative mt-10 md:mt-0 lg:mt-10 flex items-center gap-20">
                <div className="relative flex">
                  <input
                    type="checkbox"
                    checked={formData.checkbox}
                    onChange={() =>
                      setFormData({ ...formData, checkbox: !formData.checkbox })
                    }
                  />
                  <span className={styles.checkmark} />
                </div>
                <span>{checkboxDisclaimer}</span>
              </div>
              <div
                className={`col-span-2 mt-15 ${
                  success ? 'pointer-events-none' : ''
                }`}
              >
                <Button variant="dark" onClick={() => submit()}>
                  {success ? 'Success!' : 'Book a Demo'}
                </Button>
              </div>
            </div>
          </Fade>
          <Fade
            delay={250}
            className={`col-span-12 lg:col-span-6 mt-85 md:mt-70 lg:mt-0 lg:pl-30 ${styles.imageContainer}`}
          >
            <div className="w-full">
              <ImageComponent image={image} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default BookADemoModule
