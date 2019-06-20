/**
 * Session Object to manage local storage state for the APP
 * 
 * Author: odigie Oseme
 */

const userKey = '__pdf_annox_demo_user_key';
const tokenKey = '__pdf_annox_demo_token_key';
const settingKey = '__pdf_annox_demo_setting_key';

const Session = {

  currentUser: async () => {
    const user = await Session.getData(userKey);
    return user ? JSON.parse(user) : user;
  },

  saveUser: async (user) => {
    await Session.setData(userKey, JSON.stringify(user));
  },

  saveAccessToken: async (token) => {
    await Session.setData(tokenKey, JSON.stringify(token));
  },

  getAccessToken: async() => {
    const accessToken  = await Session.getData(tokenKey);
    return accessToken ? JSON.parse(accessToken) : accessToken;
  },

//   gotoDashboardOnLoginTokenFound: async () => {
//     // the auth string is decoded here due to cookies encryption...
//     const basicAuthToken = await Session.getCookie(loginCookieKey);
//     //checks here to see if the cookies with the auth data is available 
//     // before the component is mounted
    
//     if (basicAuthToken !== undefined || basicAuthToken != null) {
//       window.location.assign("#/"); // redirect to the dashboard
//     }
//     else { // clear other unwanted data from storage
//       await Session.clearData(userKey);
//       await Session.clearData(tokenKey);
//       await Session.clearData(settingKey);
//     }
//   },

//   logOutOnLoginTokenNotFound: async () => {
//     // the auth string is decoded here due to cookies encryption...
//     const basicAuthToken = await Session.getCookie(loginCookieKey);
//     //checks here to see if the cookies with the auth data is available 
//     // before the component is mounted
//     if (basicAuthToken === undefined || basicAuthToken === null) {
//       await Session.clearData(userKey);
//       await Session.clearData(tokenKey);
//       await Session.clearData(settingKey);
//       window.location.assign("#/login"); // redirect to the login page
//      // window.location.replace("#/login"); // redirect to the login page
//     }
//   },

  logout: async (options = {}) => {
    await Session.clearData(userKey);
    await Session.clearData(tokenKey);
    await Session.clearData(settingKey);
    // and do nothing here...
    
  },

  logoutAndExit: async (history, options = {}) => {
    await Session.clearData(userKey);
    await Session.clearData(tokenKey);
    await Session.clearData(settingKey);
    // call the App Exit here...
    window.location.href = "/login"; // redirect to the login page
  },

  saveSetting: async (setting) => {
    await Session.setData(settingKey, JSON.stringify(setting));
  },

  loadSetting: async () => {
    const setting = await Session.getData(settingKey);
    return setting ? JSON.parse(setting) : setting;
  },

  setData: async (key, data) => {
    try {
      await localStorage.setItem(key, data);
    } catch(exception) {
      return console.log(exception);
    }
  },

  getData: async (key) => {
    const data = await localStorage.getItem(key);
    return data
  },

  clearData: async (key) => {
    try {
      await localStorage.removeItem(key);
    } catch(exception) {
      return console.log(exception);
    }
  }

}

export default Session