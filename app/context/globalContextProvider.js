'use client'

import React ,{ createContext , useState , useContext } from 'react'
import themes from "./theme";




export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);

    const theme = themes[selectedTheme]

    return (
        <GlobalContext.Provider value={{theme,}}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )

}

export const useGlobalState = () => {
    const context = useContext(GlobalContext)
    return context
}