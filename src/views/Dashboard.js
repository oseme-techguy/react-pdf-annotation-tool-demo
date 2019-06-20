/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import { Redirect } from 'react-router-dom';
import { Store as DocumentStore, Constants } from "../store/document";
import AppDispatcher from "../store/dispatcher.js"; 
import PageTitle from "../components/common/PageTitle";


const Store = new DocumentStore();

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      documentId: null
    };

    this.onStateChanged = this.onStateChanged.bind(this);
    this.addDocumentAnnotations = this.addDocumentAnnotations.bind(this);
  }

  componentWillMount() {
    Store.checkLoggedIn();
    this.onStateChanged();
    AppDispatcher.dispatch({
      actionType: Constants.FETCH_DOCUMENTS
    });
    Store.addStateChangedListener(this.onStateChanged);
  }

  componentWillUnmount() {
    Store.removeStateChangedListener(this.onStateChanged);
  }

  onStateChanged() {
    this.setState({ });
  }

  addDocumentAnnotations(event) {
    this.setState({
      documentId: event.target.name
    });
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {!Store.isLoggedIn() && <Redirect to='/login' /> }
        {this.state.documentId !== null && <Redirect to={`/annotate-document/${this.state.documentId}`} /> }

        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Dashboard" subtitle="Uploaded Documents" className="text-sm-left" />
        </Row>

        {/* Document List */}
        <Row>
        {
            !Store.getDocuments().length && (
              <Col lg="6" key='1'>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <h5 className="card-title">No Documents Available</h5>
                    <p className="card-text text-muted">
                      Please upload a document to annotate
                    </p>
                  </CardBody>
                </Card>
              </Col>
            )
          }
          {Store.getDocuments().map((document, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{document.name}</h5>
                  <p className="card-text text-muted">
                    Ref_ID: {document.ref_id}
                  </p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${require("../images/avatars/1.jpg")}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {document.user_id.first_name != null ? document.user_id.first_name : ''}
                        {" "}
                        {document.user_id.last_name != null ? document.user_id.last_name : ''}
                      </span>
                      <small className="text-muted">{document.created_at}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white" name={document.ref_id} onClick={this.addDocumentAnnotations}>
                      <i className="far fa-bookmark mr-1" /> Annotate Document
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
