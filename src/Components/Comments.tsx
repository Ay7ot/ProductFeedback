import { CommentType } from "../types";


export default function Comments({comments}: {comments: CommentType[]}) {
    
    return (
        <div className="rounded-lg bg-white p-6 transition transform mt-6">
            <h3 className="font-bold text-blue-400 text-medium mb-6">{`${comments.length} Comment${comments.length > 1 ? 's' : ''}`}</h3>
            <div className="">
                {comments.map((comment, index) => {
                    const username = comment.author.toLowerCase().split(' ').join('')

                    return (
                        <div className="mb-6 comments">
                            <div className="flex w-full items-center justify-between">
                                <div className="flex gap-2">
                                    <img 
                                        src={comment.profilePhoto}
                                        className="w-[50px] rounded-full "
                                    />
                                    <div>
                                        <p className="font-semibold">{comment.author}</p>
                                        <p className="text-[0.8rem] text-slate-500">{`@${username}${index}`}</p>
                                    </div>
                                </div>
                                <button className="text-blue-400 font-semibold ">Reply</button>
                            </div> 
                            <p className="text-[#647196] text-sm my-6">{comment.text}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
