import { GlobalSet } from 'interfaces/globals'
import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

/* eslint react/jsx-props-no-spreading: "off", curly: "error" */
/* eslint react/prop-types: "off", curly: "error" */
const PXLPWebContainer = ({ Component, pageProps }) => (<Component {...pageProps} />)

export const GlobalContext = React.createContext<GlobalSet>({} as any)
export const GlobalContextProvider = GlobalContext.Provider

export default PXLPWebContainer
