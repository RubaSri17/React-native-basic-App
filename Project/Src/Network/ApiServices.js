import {create} from 'apisauce';
import Url from '../Constants/Url';

const api = create({
  baseURL: Url.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

async function postApi(endPoint, data) {
  return await api.post(endPoint, data);
}

function getApi(endPoint, token) {
  if (token) {
    api.setHeader('Authorization', 'Bearer' + token);
  }
  return api.get(endPoint, endPoint);
}

export const ApiService = {
  postApi,
  getApi,
};
