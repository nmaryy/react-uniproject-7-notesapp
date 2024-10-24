import { useState, useContext, createContext } from 'react'

const AppContext = createContext()

export function useMode() {
    return useContext(AppContext)

}

function ContextProvider({ children }) {
    const [appMode, setAppMode] = useState(true)

    function modeHandler() {
        setAppMode(prevMode => !prevMode)
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