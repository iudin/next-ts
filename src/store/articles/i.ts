import { IAction } from '../i';

// state
export interface IArticlesState {
  data: IArticlesData[];
}

// actions
export interface IArticlesActions {
  getArticlesList?: IGetArticlesList;
}
export enum ActionTypes {
  GET_ARTICLES_LIST = 'GET_ARTICLES_LIST'
}

// other
export type IGetArticlesList = IAction<IArticlesListArgs, Promise<any>>;

export interface IArticlesListArgs {
  articleId?: string;
  author?: string;
  tags?: string;
  size?: number;
  page?: number;
}

export interface IArticlesData {
  articleId: string;
  created?: string;
  updated?: string;
  date: string;
  author?: string;
  deleted?: boolean;
  header: string;
  description: string;
  body: string;
  shortBody: string;
  tags: string[];
  photos: string[];
  viewsCount?: number;
  commentsCount?: number;
  raiting?: number;
}
