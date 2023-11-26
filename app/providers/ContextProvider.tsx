'use client'

import React, {useState} from 'react'
import {GlobalProvider} from "@/app/context/globalContextProvider";

interface Props {
    children: React.ReactNode
}

const ContextProvider = ({children}: Props) => {
    const [isReady  , setIsReady  ] = useState(false);

        React.useEffect(() => {
            setTimeout(() => {
                setIsReady(true)
            },200)
        })
    if(!isReady) {
        return null
    }

    return (
        <GlobalProvider>{children}</GlobalProvider>
    )
}
export default ContextProvider
