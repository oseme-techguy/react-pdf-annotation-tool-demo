import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
  Row, Col
} from "shards-react";
import { Redirect } from 'react-router-dom';
import { Grid, Form } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
import { Store as DocumentStore, Constants } from "../store/document";
import AppDispatcher from "../store/dispatcher.js"; 
import PageTitle from "../components/common/PageTitle";


const Store = new DocumentStore();

class UploadDocument extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      file: null,
      pdfContent: 'N/A',
      numPages: 0,
      pageNumber: 1
    };

    this.onStateChanged = this.onStateChanged.bind(this);
    this.uploadDocument = this.uploadDocument.bind(this);
  }

  componentWillMount() {
    Store.checkLoggedIn();
    this.onStateChanged();
    Store.addStateChangedListener(this.onStateChanged);
  }

  componentWillUnmount() {
    Store.removeStateChangedListener(this.onStateChanged);
  }

  onStateChanged() {
    this.setState({ });
  }

  async getBase64(file) {
    if (!file) return "N/A";

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  uploadDocument() {
    AppDispatcher.dispatch({
      actionType: Constants.UPLOAD_DOCUMENT,
      payload: {
        name: this.state.file.name,
        pdf_content: this.state.pdfContent
      }
    });
  }

  onFileChange = async (event) => {
    const file = event.target.files[0];
    const pdfContent = await this.getBase64(file);
    this.setState({
      file: file,
      pdfContent: pdfContent
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {
    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;

    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }

    this.setState({
      pageNumber: nextPageNumber
    });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {!Store.isLoggedIn() && <Redirect to='/login' /> }
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Upload Document" subtitle="Upload New Document" className="text-sm-left" />
        </Row>

        <Row>
          {/* PDF Previewer */}
          <Col lg="9" md="12">
            <Grid centered columns={2}>
              <Grid.Column textAlign="center" onClick={this.nextPage}>

                <Document 
                  file={this.state.file}
                  onLoadSuccess={this.onDocumentLoadSuccess} 
                  noData={<h4>Please select a PDF via the input box on the left</h4>}
                >
                  <Page pageNumber={pageNumber} />
                </Document>

                {this.state.file ? <p>Page {pageNumber} of {numPages}</p> : null}
              </Grid.Column>
            </Grid>
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            <Card small className="mb-3">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Document Details</h6>
              </CardHeader>

              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">flag</i>
                      <strong className="mr-1">Name:</strong> {this.state.file ? this.state.file.name : "N/A"}{" "}
                    </span>
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">visibility</i>
                      <strong className="mr-1">Size:</strong>{" "}
                      <strong className="text-danger">
                        {this.state.file ? parseInt(this.state.file.size/1000) + " kB" : "N/A"}
                      </strong>{" "}
                    </span>
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">score</i>
                      <strong className="mr-1">Current Page:</strong>{" "}
                      <strong className="text-warning">{pageNumber}</strong>
                    </span>
                    <span className="d-flex mb-2">
                      <i className="material-icons mr-1">calendar_today</i>
                      <strong className="mr-1">Total Pages:</strong> {numPages}{" "}
                    </span>
                  </ListGroupItem>
                    <ListGroupItem>
                    <div className="custom-file mb-3">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile2"
                        onChange={this.onFileChange}
                      />
                      <label className="custom-file-label" htmlFor="customFile2">
                        Choose file...
                      </label>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex px-3 border-0">
                    <Button outline theme="accent" size="sm" className="ml-auto" onClick={this.uploadDocument}>
                      <i className="material-icons">save</i> Upload PDF
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UploadDocument;

