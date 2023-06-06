import { AppContext } from "./AppContext"
import {useContext} from "react"

export function useAppContext(){
    return useContext(AppContext)
}