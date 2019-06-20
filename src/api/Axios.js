/**
 * Axios class to manage api calls 
 * 
 * Created by osemeodigie on 17/06/2019
 * Objective: building to scale
 */

import axiosRetry from 'axios-retry'
import * as axios from 'axios'
import { Store as AuthStore, Constants } from "../store/auth";
import AppDispatcher from "../store/dispatcher.js";


class Axios {

  currentUser = null;
  authStore = null
  
  async getAxiosInstance() {
    this.authStore = new AuthStore();
    await this.authStore.checkLoggedIn();
    let accessToken = ''
    if (this.authStore.isLoggedIn()) {
      console.log("Auth State -> ", await this.authStore.getLoggedInAccessToken())
      accessToken = `Bearer ${await this.authStore.getLoggedInAccessToken()}`;
    }
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${accessToken}`
      }
    });
    axiosRetry(instance, { retries: 3 });
    instance.interceptors.response.use(
      r => r,
      (error) => {
        console.log("JHDHF GKJNL -> ", error.response)
        if (
          error.response.status === 401 || 
          (
            error.response.status === 400 && 
            error.response.data.reasons[0] === 'Authorization header is invalid.')
        ) {
            // log out
            AppDispatcher.dispatch({
              actionType: Constants.LOG_OUT
            });
        }
        return Promise.reject(error.response);
      }
    );
    return instance;
  }
}

export default new Axios();