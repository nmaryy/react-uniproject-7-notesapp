import { useState, useContext, createContext, useEffect } from 'react'

const AppContext = createContext()

export function useMode() {
    return useContext(AppContext)

}

function ContextProvider({ children }) {
    const [appMode, setAppMode] = useState(null)

    useEffect(() => {
        const mode = localStorage.getItem('mode')
        if (mode !== null) {
            setAppMode(JSON.parse(mode))
        } else {
            setAppMode(true)
        }
    }, [])

    function modeHandler() {
        setAppMode((prevMode) => {
            const currMode = !prevMode
            localStorage.setItem('mode', JSON.stringify(currMode))
            return currMode
        }
        )
    }



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