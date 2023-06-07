export type AppContextType = {
    feedbacks: feedbacksType[];
    dispatch: React.Dispatch<AppActionType>;
}

export type feedbacksType = {
    "category": string;
    "creator": string;
    "createdAt": string;
    "comments": CommentType[]
    "description": string;
    "name": string;
    "profilePhoto": string;
    "status": string;
    "title": string;
    "updatedAt": string;
    "upvotes": string[];
    "__v": string;
    "_id": string;
}

export type AppActionType = {
    type: string;
    payload?: {
        feedbackPayload: feedbacksType[]
    }
}

export type CommentType = {
    "author": string;
    "profilePhoto": string;
    'text': string;
}