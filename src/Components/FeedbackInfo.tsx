import { useLocation, useNavigate } from "react-router-dom"
import {RxCaretLeft, RxCaretUp} from 'react-icons/rx'
import {BsChatFill} from 'react-icons/bs'
import Comments from "./Comments"

export default function FeedbackInfo() {
    
    const location = useLocation()
    const history = useNavigate()
    const { name, upvotes, profilePhoto, description, comments, title, category } = location.state

    function goBack(){
        history(-1)
    }

    //Feedback Component without Link tag
    const MainFeedback = () => {
        return (
            <div className="rounded-lg bg-white p-6 transition transform md:hover:scale-105 md:flex items-center gap-10">
            <button className='hidden md:flex rounded-lg py-2 px-3 bg-[#f4f5fd] text-blue-400 text-center cursor-pointer font-bold items-center gap-2'>
                <i className='text-2xl'><RxCaretUp /></i>
                <p>{upvotes.length}</p>
            </button>
            <div>
                <div className="flex items-center mb-2 gap-3">
                    <img src={profilePhoto} alt={`${name}'s Profile Photo`} className="w-[60px] cursor-pointer rounded-full"/>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <h2 className='text-lg text-blue-400 font-semibold'>{title}</h2>
                <p className='text-sm py-3'>{description}</p>
                <span className='px-3 py-1 rounded-full font-medium text-xs text-blue-400 bg-[#f4f5fd]'>{category}</span>
                <div className='flex justify-between mt-6 text-blue-400 md:hidden'>
                    <button className='rounded-lg py-2 px-3 bg-[#f4f5fd] text-center cursor-pointer font-bold flex items-center gap-2'>
                        <i className='text-2xl'><RxCaretUp /></i>
                        <p>{upvotes.length}</p>
                    </button>
                    <div  className='flex items-center gap-3 bg-[#f4f5fd] px-3 py-2 rounded-lg'>
                        <i><BsChatFill /></i>
                        <p>{comments.length}</p>
                    </div>
                </div>
            </div>
            <div  className='hidden md:flex items-center gap-3 bg-[#f4f5fd] text-blue-400 px-3 py-2 rounded-lg ml-auto'>
                <i><BsChatFill /></i>
                <p>{comments.length}</p>
            </div>
        </div>
        )
    }

    
    
    return (
        <div className="px-6 pt-14 md:px-[10%] lg:px-[15%]">
            <div className="flex justify-between items-center mb-6">
                <button onClick={goBack} className="flex items-center gap-3">
                   <i className="text-blue-400 font-bold text-[1.3rem]"> <RxCaretLeft /></i>
                    <p>Go back</p>
                </button>
                <button className="bg-blue-400 py-3 px-6 rounded-lg font-semibold text-white">
                    Edit Feedback
                </button>
            </div>
            <MainFeedback />
            {comments.length > 0 && <Comments comments={comments} />}
        </div>
    )
}
