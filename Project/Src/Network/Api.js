import loginUrl from '../Constants/Url';

export default {
  isLoginValid(email, pass) {
    console.log('email', email, pass);
    let req = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password: pass,
      }),
    };
    console.log('req', req);
    return fetch(loginUrl.LOGIN_URL, req)
      .then(res => res.json())
      .then(responsejson => {
        console.log('responseJson', responsejson);
        return responsejson.data;
      })
      .catch(e => {
        console.log(e);
      });
  },
};
