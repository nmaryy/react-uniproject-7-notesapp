import { useState, useContext, createContext, useEffect } from 'react'

const AppContext = createContext()

export function useMode() {
    return useContext(AppContext)

}

function ContextProvider({ children }) {
    const [appMode, setAppMode] = useState(null)

    function modeHandler() {
        setAppMode(prevMode => !prevMode)
        localStorage.setItem('mode', appMode)
    }

    useEffect(() => {
        const mode = localStorage.getItem('mode')
        if (mode !== null) {
            setAppMode(JSON.parse(mode))
        } else {
            setAppMode(true)
        }
    }, [])


    return (
        <AppContext.Provider value={{
            mode: appMode
            , setMode: modeHandler
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider