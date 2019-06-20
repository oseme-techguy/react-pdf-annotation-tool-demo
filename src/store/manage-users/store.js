import { EventEmitter } from "events";

import Dispatcher from "../dispatcher";
import Constants from "./constants";
import Session from "../../utils/Session";

let _store = {
  isLoggedIn: false,
  accessToken: null
};

class Store extends EventEmitter {

  fields = {
    username: '',
    password: ''
  }

  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind();
    this.registerToActions = this.registerToActions.bind(this);
    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.LOGIN:
        this.login(payload);
        break;
      default:
    }
  }

  login(payload) {
    // Make API call to log into account
    // 
    alert('Login Details ' + JSON.stringify(payload));
    this.emit(Constants.LOGGED_IN);
  }

  async checkLoggedIn() {
    const accessToken = await Session.getAccessToken()
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

  onInputChange = (event) => {
    this.fields[event.target.name] = event.target.value.trim()
    this.emit(Constants.STATE_CHANGED);
  }

  // getMenuState() {
  //   return _store.menuVisible;
  // }

  // getSidebarItems() {
  //   return _store.navItems;
  // }

  addLoggedInListener(callback) {
    this.on(Constants.LOGGED_IN, callback);
  }

  removeLoggedInListener(callback) {
    this.removeListener(Constants.LOGGED_IN, callback);
  }

  addStateChangedListener(callback) {
    this.on(Constants.STATE_CHANGED, callback);
  }

  removeStateChangedListener(callback) {
    this.removeListener(Constants.STATE_CHANGED, callback);
  }
}

export default new Store();
