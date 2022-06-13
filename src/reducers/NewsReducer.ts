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

      case types.NEWS_LOADING:
         return {
            ...state,
            loadingNews: true
         };
      case types.NEWS_FAIL:
         return {
            ...state,
            loadingNews: false
         };
      case types.NEWS_SUCCESS:
         return {
            ...state,
            loadingNews: false,
            news: action.payload.news
         };
      case types.NEWS_TYPES:
         return {
            ...state,
            types: action.payload.activeNews
         };
      case types.NEWS_SOURCE:
         return {
            ...state,
            source: action.payload.sourceNews
         };
      case types.NEWS_SOURCE:
         return {
            ...state,
            source: action.payload
         };


      default:
         return state;
   }

};

export default newsReducer;