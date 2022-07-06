import { GlobalSet } from 'interfaces/globals'
import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import Fonts from 'utils/fonts'
import '../styles/globals.scss'

/* eslint react/jsx-props-no-spreading: "off", curly: "error" */
/* eslint react/prop-types: "off", curly: "error" */
const PXLPWebContainer = ({ Component, pageProps }) => {
  useEffect(() => {
    Fonts()
  }, [])

  return <Component {...pageProps} />
}

export const GlobalContext = React.createContext<GlobalSet>({} as any)
export const GlobalContextProvider = GlobalContext.Provider

export default PXLPWebContainer
