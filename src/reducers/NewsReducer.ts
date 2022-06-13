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
   news: [],
   faves: []
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
            news: action.payload.news,
            totalPages: action.payload.totalPages,
            page: action.payload.currentPage
         };
      case types.NEWS_TYPES:
         return {
            ...state,
            types: action.payload.activeNews,
            totalPages: 0
         };
      case types.NEWS_SOURCE:
         return {
            ...state,
            source: action.payload.sourceNews,
            totalPages: 0
         };
      case types.FAVE_ADD:
         return {
            ...state,
            faves: [action.payload.fave, ...state.faves],
         }
      case types.FAVE_REMOVE:
         return {
            ...state,
            faves: state.faves?.filter((item) => (item.objectID !== action.payload._new.objectID)),
         }
      default:
         return state;
   }

};

export default newsReducer;