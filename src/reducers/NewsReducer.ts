import { New, NewsDispatchTypes, types } from "../actions/NewsActions/NewsActionsTypes";

interface DefaultStateI {
   loadingNews: boolean,
   news: New[],
   faves?: New[],
   totalPages?: number,
   page?: number,
   source?: string,
   types?: string
}

const defaultState: DefaultStateI = {
   loadingNews: false,
   news: []
};

const newsReducer = (state: DefaultStateI = defaultState, action: NewsDispatchTypes): DefaultStateI => {

   switch (action.type) {
      case types.NEWS_TYPES:
         return {
            ...state,
            types: action.payload
         };

      default:
         return state;
   }

};

export default newsReducer;