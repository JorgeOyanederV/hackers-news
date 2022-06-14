export const types = {
   NEWS_LOADING: "NEWS_LOADING",
   NEWS_FAIL: "NEWS_FAIL",
   NEWS_SUCCESS: "NEWS_SUCCESS",
   NEWS_TYPES: "NEWS_TYPES",
   NEWS_SOURCE: "NEWS_SOURCE",
   NEWS_FAVES: "NEWS_FAVES",
   FAVE_ADD: "FAVE_ADD",
   FAVE_REMOVE: "FAVE_REMOVE",
   FAVE_INITIALIZE: "FAVE_INITIALIZE",
   LOADING_BUTTON: 'LOADING_BUTTON'
}
export interface New {
   objectID: string,
   author: string,
   story_title: string,
   story_url: string,
   created_at: string,
   isFaves: boolean
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
export interface AddFave {
   type: typeof types.FAVE_ADD,
   payload: {
      fave: New
   }
}
export interface RemoveFave {
   type: typeof types.FAVE_REMOVE,
   payload: {
      newFavs: New[]
   }
}
export interface NewsInitialize {
   type: typeof types.FAVE_INITIALIZE,
   payload: {
      faves: New[]
   }
}

export interface ButtonLoading {
   type: typeof types.LOADING_BUTTON,
   payload: boolean
}


export type NewsDispatchTypes = NewsTypes | NewsLoading | NewsFail | NewsSuccess | AddFave | RemoveFave | NewsInitialize | ButtonLoading;

