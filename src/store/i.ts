import { Dispatch } from 'redux';
import { IArticlesState } from '../store/articles/i';

export interface IState {
  articles: IArticlesState;
}

export type IAxiosInit = ({ token }: { token: string }) => void;

export interface IRequestCreatorAction {
  type: string;
  requestType: string;
  requestUrl: string;
  resultField?: string;
  headers?: { [key: string]: string };
  sendObject?: { [key: string]: any };
  sendParams?: { [key: string]: any };
  other?: { [key: string]: any };
}

export type IAction<P, R> = (obj: P) => (dispath: Dispatch) => R;
export type IAsyncAction<P, R> = (obj: P) => Promise<(dispath: Dispatch) => R>;

export interface ILoadingState {
  [actionType: string]: boolean | undefined;
}
