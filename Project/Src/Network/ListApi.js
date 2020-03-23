import listUrl from 'Src/Constants/Url.js';

export default {
  listData(token, page) {
    console.log(page);
    let req = {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    return fetch(listUrl.LIST_URL + page, req)
      .then(res => res.json())
      .then(responsejson => {
        console.log('responseJson', responsejson.data);
        return responsejson.data;
      })
      .catch(e => {
        console.log(e);
      });
  },
};
