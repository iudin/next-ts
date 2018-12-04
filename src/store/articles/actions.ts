import { requestCreator } from '../request-creator';
import { IGetArticlesList, ActionTypes } from './i';

import { RequestType, API_ECOMMERCE } from '../../constants';

export const getArticlesList: IGetArticlesList = ({
  articleId,
  author,
  tags,
  size,
  page
}) => {
  return dispatch =>
    requestCreator(dispatch, {
      type: ActionTypes.GET_ARTICLES_LIST,
      requestUrl: `${API_ECOMMERCE}/article`,
      requestType: RequestType.GET,
      sendParams: { articleId, author, tags, size, page },
      other: { articleId, author, tags, size, page }
    });
};
