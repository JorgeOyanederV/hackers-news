import { Dispatch } from "redux";
import { New, NewsDispatchTypes, NewsFail, NewsLoading, NewsSuccess, types } from "./NewsActionsTypes";

// Set the initial state of the app
export const getInitialData = () => (dispatch: Dispatch<NewsDispatchTypes>) => {

   // Get the selected news from local Store if was selected
   const activeNews = localStorage.getItem("activeNews");

   // Get the fave news from the local store if there is
   const sourceNews = localStorage.getItem("sourceNews");

   const favesNews = localStorage.getItem("faves");

   if (!!favesNews) {
      dispatch(setFavesNews(JSON.parse(favesNews)));
   }

   // if there was the type of news selected, set on the store
   if (!!activeNews) {
      dispatch(setActiveTypes(activeNews));
   } else {
      dispatch(setActiveTypes('all'));
   }

   // if there was the source of the news selected, set on the store
   if (!!sourceNews) {
      dispatch(setSourceNews(sourceNews));
   } else {
      localStorage.setItem("source", 'DEFAULT');
   }

   // if there was a source and the active news is all, then search
   if (!!sourceNews && sourceNews !== "DEFAULT" && activeNews !== 'faves') {
      dispatch(getNews(sourceNews));
   }
};

export const getNews = (source: string, page: number = 0) => async (dispatch: Dispatch<NewsDispatchTypes>, getState) => {
   try {
      dispatch(setLoadingNews());

      //Get the news
      const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${source}&page=${page}`;
      const { hits: data, nbPages: totalPages, page: currentPage } = await fetch(URL).then(res => res.json());
      let filteredData = filterNullData(data);

      let formatedData = formatedLikedData(filteredData, getState);

      dispatch(setSuccessfullNews(formatedData, (totalPages), currentPage));
   } catch (error) {
      dispatch(setFailNews());
   }
};

export const startRemoveFave = (fave: New) => async (dispatch: Dispatch<NewsDispatchTypes>, getState) => {

   dispatch(setLoadingButton(true));
   const { faves } = getState().news;
   let newFaves = await faves.filter((item: New) => (item.objectID !== fave.objectID))
   localStorage.setItem('faves', JSON.stringify(newFaves));
   dispatch(setRemoveFave(newFaves));
   dispatch(setLoadingButton(false));

}

const setRemoveFave = (newFavs: New[]) => {
   return {
      type: types.FAVE_REMOVE,
      payload: { newFavs }
   }
};

export const setFaveNew = (fave: New) => async (dispatch: Dispatch<NewsDispatchTypes>, getState) => {

   const { faves } = getState().news;
   let _fave = { ...fave, isFaves: true };
   let newFavs = [_fave, ...faves]
   localStorage.setItem('faves', JSON.stringify(newFavs))
   dispatch(setFave(newFavs))
}

const setFave = (newFavs: New[]) => {
   return {
      type: types.FAVE_ADD,
      payload: { newFavs }
   }
}

const setLoadingButton = (isLoading: boolean) => {
   return {
      type: types.LOADING_BUTTON,
      payload: isLoading
   }
}
export const setFavesNews = (faves: New[]) => {
   return {
      type: types.FAVE_INITIALIZE,
      payload: { faves }
   }
}

const formatedLikedData: (news: New[], getState) => NewsSuccess = (news: New[], getState) => {
   let formatedData = news.map((_new) => ({ ..._new, isFaves: isFaves(_new.objectID, getState) }));
   return formatedData;
}
const isFaves = (objectID: string, getState) => {
   const { faves } = getState().news;
   let isFave = false;
   faves.forEach((fave: New) => {
      if (fave.objectID === objectID) {
         isFave = true;
         return;
      }
   })
   return isFave;
}

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

export const startActiveAllNews = (activeNews: string) => async (dispatch: Dispatch<NewsDispatchTypes>, getState) => {

   const { source, page } = getState().news;
   if (source !== 'DEFAULT') {
      dispatch(getNews(source, page));
   }
   localStorage.setItem('activeNews', activeNews);
   dispatch(setActiveTypes(activeNews))

}
const setActiveTypes = (activeNews: string) => {
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

