import { useAppContext } from "../useAppContext"
import Loader from "./Loader"
import FeedbackComponent from "./FeedbackComponent"


export default function Response() {

    const { feedbacks} = useAppContext()

    if(feedbacks.length < 1){
        return (
            <div className="grid place-content-center min-h-[80vh]">
                <Loader />
            </div>
        )
    }

    return (
        <div className="p-4 flex flex-col gap-5">
            {feedbacks.map((feedback, index)=>{
                return (
                    <FeedbackComponent feedback={feedback} key={index}/>
                )
            })}
        </div>
    )
    
}
