import axios from 'axios';
import { Dispatch } from 'redux';
import { API_URL, RequestState, RequestType } from '../constants';
import { IAxiosInit, IRequestCreatorAction } from './i';

export const axiosInit: IAxiosInit = ({ token }) => {
  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common['Authorization'] = `${token}`;
};

export async function requestCreator(
  dispatch: Dispatch,
  action: IRequestCreatorAction
): Promise<any> {
  const {
    type,
    requestType,
    requestUrl: url,
    resultField = 'data',
    headers = {},
    sendObject,
    sendParams,
    other
  } = action;
  dispatch({
    type: type + RequestState.REQUEST,
    actionType: type,
    requestType,
    other
  });
  let method;
  let data;
  let params;
  switch (requestType) {
    case RequestType.GET: {
      method = 'get';
      params = sendParams;
      break;
    }
    case RequestType.POST: {
      method = 'post';
      data = sendObject;
      break;
    }
    case RequestType.PUT: {
      method = 'put';
      data = sendObject;
      break;
    }
    case RequestType.DELETE: {
      method = 'delete';
      params = sendParams;
      data = sendObject;
      break;
    }
    default: {
      console.log(`${requestType} - неизвестный тип запроса`);
      return;
    }
  }
  await axios({ method, url, data, params, headers })
    .then(result => {
      dispatch({
        type: type + RequestState.SUCCESS,
        payload: result[resultField],
        fullResponse: result,
        actionType: type,
        requestType,
        other
      });
    })
    .catch(error => {
      dispatch({
        type: type + RequestState.FAIL,
        msg: error.message,
        fullResponse: error,
        actionType: type,
        requestType,
        error,
        other
      });
    });
}
