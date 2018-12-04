import { AnyAction } from 'redux';
import { IArticlesState, ActionTypes } from './i';

import { RequestState } from '../../constants';

export const initialState: IArticlesState = {
  data: []
};

export default (state = initialState, { type, payload = {} }: AnyAction) => {
  switch (type) {
    case ActionTypes.GET_ARTICLES_LIST + RequestState.SUCCESS: {
      return {
        ...state,
        data: payload.articles
      };
    }
    default: {
      return state;
    }
  }
};
