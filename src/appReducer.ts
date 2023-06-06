import { AppActionType, AppContextType } from "./types";

export function appReducer(state: AppContextType, action: AppActionType){
    switch (action.type) {
        case 'setfeedbacks':
            return {
                ...state,
                feedbacks: action.payload?.feedbackPayload ?? []
            };
    
        default:
            return {
                ...state
            };
    }
}