import { GlobalSet } from 'interfaces/globals'
import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import loadFonts from 'utils/fonts'
import '../styles/globals.scss'

/* eslint react/jsx-props-no-spreading: "off", curly: "error" */
/* eslint react/prop-types: "off", curly: "error" */
const PXLPWebContainer = ({ Component, pageProps }) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    const load = async () => {
      const x = await loadFonts()
      console.log(x)
      if (x) {
        setRender(true)
      } else {
        throw new Error('E')
      }
    }
    try {
      load()
    } catch {
      setRender(true)
    }
  }, [])

  if (!render) {
    return null
  }
  return <Component {...pageProps} />
}

export const GlobalContext = React.createContext<GlobalSet>({} as any)
export const GlobalContextProvider = GlobalContext.Provider

export default PXLPWebContainer
