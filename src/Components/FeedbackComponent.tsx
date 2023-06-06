import { feedbacksType } from '../types'
import {BsChatFill} from 'react-icons/bs'
import {RxCaretUp} from 'react-icons/rx'
export default function FeedbackComponent({feedback}: {feedback: feedbacksType}) {
    
    const {name,profilePhoto, description, title, upvotes, comments, category} = feedback
    
    return (
        <div className="rounded-lg bg-white p-6 transition transform md:hover:scale-105">
            <div className="flex items-center mb-2 gap-3">
                <img src={profilePhoto} alt={`${name}'s Profile Photo`} className="w-[40px] cursor-pointer"/>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            <h2 className='text-lg text-blue-400 font-semibold'>{title}</h2>
            <p className='text-sm py-3'>{description}</p>
            <span className='px-3 py-1 rounded-full font-medium text-xs text-blue-400 bg-[#f4f5fd]'>{category}</span>
            <div className='flex justify-between mt-6 text-blue-400 '>
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
    )

}
