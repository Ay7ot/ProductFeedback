import { useAppContext } from "../useAppContext";
import HeaderBoard from "./NavComponents/HeaderBoard";
import Response from "./Response";
import { useEffect } from "react"


export default function FeedbackBoard() {
    
    const { dispatch } = useAppContext()

    useEffect(()=>{
        fetch('https://web-production-8749.up.railway.app/feedbacks')
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: 'setfeedbacks',
                    payload: {
                        feedbackPayload: data
                    }
                })
            })
    },[dispatch])

    return (
        <div>
            <HeaderBoard />
            <Response />
        </div>
    )
}
