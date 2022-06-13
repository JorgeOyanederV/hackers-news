import { New, types } from "../actions/NewsActions/NewsActionsTypes";

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

const newsReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {

   switch (action.types) {
      case types:

         return state;

      default:
         return state;
   }

};

export default newsReducer;