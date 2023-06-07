import { feedbacksType } from '../types'
import {BsChatFill} from 'react-icons/bs'
import {RxCaretUp} from 'react-icons/rx'
import { Link } from 'react-router-dom'

export default function FeedbackComponent({feedback}: {feedback: feedbacksType}) {
    
    const { name, profilePhoto, description, title, upvotes, comments, category, _id } = feedback
    
    return (
        <div className="rounded-lg bg-white p-6 transition transform md:hover:scale-105 md:flex items-center gap-10">
            <button className='hidden md:flex rounded-lg py-2 px-3 bg-[#f4f5fd] text-center cursor-pointer font-bold items-center gap-2'>
                <i className='text-lg text-blue-400'><RxCaretUp /></i>
                <p className='text-sm'>{upvotes.length}</p>
            </button>
            <Link to={`/feedback/${_id}`} state={{...feedback}}>
                <div className="flex items-center mb-2 gap-3">
                    <img src={profilePhoto} alt={`${name}'s Profile Photo`} className="w-[40px] cursor-pointer"/>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <h2 className='text-lg text-blue-400 font-semibold'>{title}</h2>
                <p className='text-sm py-3'>{description}</p>
                <span className='px-3 py-1 rounded-full font-medium text-xs text-blue-400 bg-[#f4f5fd]'>{category}</span>
            </Link>
                <div className='flex justify-between mt-6  md:hidden'>
                    <button className='rounded-lg py-1 px-3 bg-[#f4f5fd] text-center cursor-pointer font-bold flex items-center gap-2'>
                        <i className='text-lg text-blue-400'><RxCaretUp /></i>
                        <p className='text-sm'>{upvotes.length}</p>
                    </button>
                    <div  className='flex items-center gap-3 px-3 py-2 rounded-lg'>
                        <i className='text-[#e4e7fe]'><BsChatFill /></i>
                        <p className='text-blue-400'>{comments.length}</p>
                    </div>
                </div>
            
            <div className='hidden md:flex items-center gap-3  text-blue-400 px-3 py-2 rounded-lg ml-auto'>
                <i className='text-[#e4e7fe]'><BsChatFill /></i>
                <p>{comments.length}</p>
            </div>
        </div>
    )

}
