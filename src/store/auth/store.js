import { EventEmitter } from "events";

import Dispatcher from "../dispatcher";
import Constants from "./constants";
import Session from "../../utils/Session";
import Axios from "../../api/Axios";
import AppConstants from "../../utils/AppConstants";

let _store = {
  isLoggedIn: false,
  accessToken: null
};

export default class Store extends EventEmitter {

  fields = {
    username: '',
    password: ''
  }

  constructor() {
    super();
    this.checkLoggedIn();
    this.onInputChange = this.onInputChange.bind();
    this.registerToActions = this.registerToActions.bind(this);
    Dispatcher.register(this.registerToActions.bind(this));
  }

  async registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.LOGIN:
        await this.login();
        break;
      case Constants.LOG_OUT:
        await this.logout();
        break;
      default:
    }
  }

  async checkLoggedIn() {
    const accessToken = await Session.getAccessToken();
    _store.accessToken = accessToken;
    _store.isLoggedIn = (accessToken !== null);
    return _store.isLoggedIn;
  }

  isLoggedIn() {
    return _store.isLoggedIn;
  }

  async getLoggedInAccessToken() {
    return _store.accessToken;
  }

  async login() {
    // Make API call to log into account
    // Save user token in localStorage
    let error = null;
    const axiosInstance = await Axios.getAxiosInstance(); 
    const { data: response } = await axiosInstance.post(
      AppConstants.ENDPOINTS.LOG_IN,
      this.fields
    ).catch(err => error = err);

    if((!response && !response.access_token) || error) {
      const { data: err } = error;
      console.log('Error Payload ', JSON.stringify(err));
      return;
    }

    await Session.saveAccessToken(response.access_token);
    await this.checkLoggedIn();

    this.emit(Constants.STATE_CHANGED);
  }

  async logout() {
    // Remove token and logout
    await Session.logoutAndExit();
    this.emit(Constants.STATE_CHANGED);
  }

  onInputChange = (event) => {
    this.fields[event.target.name] = event.target.value.trim()
    this.emit(Constants.STATE_CHANGED);
  }

  addStateChangedListener(callback) {
    this.on(Constants.STATE_CHANGED, callback);
  }

  removeStateChangedListener(callback) {
    this.removeListener(Constants.STATE_CHANGED, callback);
  }
}
