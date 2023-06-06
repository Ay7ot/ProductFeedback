export type AppContextType = {
    feedbacks: feedbacksType[];
    dispatch: React.Dispatch<AppActionType>;
}

export type feedbacksType = {
    "category": string;
    "creator": string;
    "createdAt": string;
    "comments": {
        "author": string;
        "profilePhoto": string;
        'text': string;
    }[]
    "description": string;
    "name": string;
    "profilePhoto": string;
    "status": string;
    "title": string;
    "updatedAt": string;
    "upvotes": string[];
    "_v": string;
    "__id": string;
}

export type AppActionType = {
    type: string;
    payload?: {
        feedbackPayload: feedbacksType[]
    }
}