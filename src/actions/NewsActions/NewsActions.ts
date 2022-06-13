import { Dispatch } from "redux";
import { RootStore } from "../../store/store";
import { New, NewsDispatchTypes, NewsFail, NewsLoading, NewsSuccess, types } from "./NewsActionsTypes";

// Set the initial state of the app
export const getInitialData = () => (dispatch: Dispatch<NewsDispatchTypes>) => {
   // Get the selected news from local Store if was selected
   const activeNews = localStorage.getItem("activeNews");

   // Get the fave news from the local store if there is
   const sourceNews = localStorage.getItem("sourceNews");

   // if there was the type of news selected, set on the store
   if (!!activeNews) {
      dispatch(setActiveNews(activeNews));
   } else {
      dispatch(setActiveNews('all'));
   }

   // if there was the source of the news selected, set on the store
   if (!!sourceNews) {
      dispatch(setSourceNews(sourceNews));
   }

   // if there was a source and the active news is all, then search
   if (!!sourceNews && sourceNews !== "DEFAULT" && activeNews !== 'faves') {
      dispatch(getNews(sourceNews));
   }

};

export const getNews = (source: string, page: number = 0) => async (dispatch: Dispatch<NewsDispatchTypes>) => {
   try {
      dispatch(setLoadingNews());

      //Get the news
      const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${source}&page=${page}`;
      const { hits: data, nbPages: totalPages, page: currentPage } = await fetch(URL).then(res => res.json());
      let filteredData = await filterNullData(data);

      dispatch(setSuccessfullNews(filteredData, (totalPages - 1), currentPage));
   } catch (error) {
      dispatch(setFailNews());
   }
};


const setLoadingNews: () => NewsLoading = () => {
   return { type: types.NEWS_LOADING }
}

const setFailNews: () => NewsFail = () => {
   return { type: types.NEWS_FAIL }
}

const setSuccessfullNews: (news: New[], totalPages: number, currentPage: number) => NewsSuccess = (news: New[], totalPages: number, currentPage: number) => {
   return {
      type: types.NEWS_SUCCESS,
      payload: { news, totalPages, currentPage }
   }
}

// Filter the data with null values.
const filterNullData: (news: New[]) => New[] = (news: New[]) => {
   let filteredData = news.filter(({ author, story_title, story_url, created_at }: New) =>
      (author !== null && story_title !== null && story_url !== null && created_at !== null))

   return filteredData;
}

export const setActiveNews = (activeNews: string) => {
   localStorage.setItem('activeNews', activeNews);
   return {
      type: types.NEWS_TYPES,
      payload: { activeNews }
   }
}
export const setSourceNews = (sourceNews: string) => {
   localStorage.setItem('sourceNews', sourceNews);
   return {
      type: types.NEWS_SOURCE,
      payload: { sourceNews }
   }
}

