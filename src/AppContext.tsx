import { createContext, ReactNode, useReducer } from "react";
import { AppContextType } from "./types";
import { useAppContext } from "./useAppContext";
import { appReducer } from "./appReducer";

export const AppContext = createContext<AppContextType>({
    feedbacks: [],
    dispatch: ()=>{return}
})

export const AppProvider = ({children}: {children: ReactNode}) => {
    
    const value = useAppContext()
    const [mainstate, dispatch] = useReducer(appReducer, value)
    
    console.log(mainstate)

    return (
        <AppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}