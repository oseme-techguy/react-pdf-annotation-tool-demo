import { Store as AuthStore } from "../auth";

import Dispatcher from "../dispatcher";
import Constants from "./constants";
import Session from "../../utils/Session";
import Axios from "../../api/Axios";
import AppConstants from "../../utils/AppConstants";

let _store = {
  documents: []
};

export default class Store extends AuthStore {

  constructor() {
    super();
    this.fetchDocuments = this.fetchDocuments.bind(this);
    this.registerToActions = this.registerToActions.bind(this);
    Dispatcher.register(this.registerToActions.bind(this));
  }

  async registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.FETCH_DOCUMENTS:
        await this.fetchDocuments();
        break;
      case Constants.UPLOAD_DOCUMENT:
        await this.uploadDocuments(payload);
        break;
      default:
    }
  }

  getDocuments() {
    return _store.documents;
  }

  async fetchDocuments() {
    // Make API call to fetch documents
    let error = null;
    const axiosInstance = await Axios.getAxiosInstance();
    const { data: response } = await axiosInstance.get(
      AppConstants.ENDPOINTS.DOCUMENTS
    ).catch(err => error = err);

    if(!response.response.length || error) {
      const { data: err } = error;
      _store.documents = [];
      console.log('Error Payload ', JSON.stringify(err));
    }
    else {
      _store.documents = response.response;
      console.log('response Payload ', JSON.stringify(response.response));
    }

    this.emit(Constants.STATE_CHANGED);
  }


  async uploadDocuments(payload) {
    // Make API call to upload the document
    _store.documents = _store.DocumentList;
    
    let error = null;
    const axiosInstance = await Axios.getAxiosInstance();
    const { data: response } = await axiosInstance.post(
      AppConstants.ENDPOINTS.DOCUMENTS,
      payload
    ).catch(err => error = err);

    if(!response.length || error) {
      const { data: err } = error;
      _store.documents = [];
      console.log('Error Payload ', JSON.stringify(err));
    }
    else {
      _store.documents = response;
      console.log('response Payload ', JSON.stringify(response));
    }

    this.emit(Constants.STATE_CHANGED);
  }

}
