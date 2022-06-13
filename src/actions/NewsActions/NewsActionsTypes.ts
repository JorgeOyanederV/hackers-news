export const types = {
   NEWS_LOADING: "NEWS_LOADING",
   NEWS_FAIL: "NEWS_FAIL",
   NEWS_SUCCESS: "NEWS_SUCCESS",
   NEWS_TYPES: "NEWS_TYPES",
   NEWS_SOURCE: "NEWS_SOURCE"
}
export interface New {
   objectID: string,
   author: string,
   story_title: string,
   story_url: string,
   created_at: string
}

export interface NewsLoading {
   type: typeof types.NEWS_LOADING
}
export interface NewsFail {
   type: typeof types.NEWS_FAIL
}
export interface NewsSuccess {
   type: typeof types.NEWS_SUCCESS,
   payload: {
      news: New[],
      totalPages: number,
      currentPage: number
   }
}
export interface NewsTypes {
   type: typeof types.NEWS_TYPES,
   payload: {
      activeNews: string
   }
}

export type NewsDispatchTypes = NewsTypes | NewsLoading | NewsFail | NewsSuccess;

