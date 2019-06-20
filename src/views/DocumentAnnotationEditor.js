
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

// import { Grid, Form } from 'semantic-ui-react';
// import { Document, Page } from 'react-pdf';
// import PageTitle from "../components/common/PageTitle";


// class DocumentAnnotationEditor extends React.Component {



//   async getBase64(file) {
//     if (!file) return "N/A";

//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = error => reject(error);
//     });
//   }

//   onFileChange = async (event) => {
//     const file = event.target.files[0];
//     const pdfContent = await this.getBase64(file);
//     this.setState({
//       file: file,
//       pdfContent: pdfContent
//     });
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   nextPage = () => {
//     const currentPageNumber = this.state.pageNumber;
//     let nextPageNumber;

//     if (currentPageNumber + 1 > this.state.numPages) {
//       nextPageNumber = 1;
//     } else {
//       nextPageNumber = currentPageNumber + 1;
//     }

//     this.setState({
//       pageNumber: nextPageNumber
//     });
//   }

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <Container fluid className="main-content-container px-4 pb-4">
//         {/* Page Header */}
//         <Row noGutters className="page-header py-4">
//           <PageTitle sm="4" title="Upload Document" subtitle="Upload New Document" className="text-sm-left" />
//         </Row>

//         <Row>
//           {/* PDF Previewer */}
//           <Col lg="9" md="12">

//           </Col>

//           {/* Sidebar Widgets */}
//           <Col lg="3" md="12">
//             <Card small className="mb-3">
//               <CardHeader className="border-bottom">
//                 <h6 className="m-0">Document Details</h6>
//               </CardHeader>

//               <CardBody className="p-0">
//                 <ListGroup flush>
//                   <ListGroupItem className="p-3">
//                     <span className="d-flex mb-2">
//                       <i className="material-icons mr-1">flag</i>
//                       <strong className="mr-1">Name:</strong> {this.state.file ? this.state.file.name : "N/A"}{" "}
//                     </span>
//                     <span className="d-flex mb-2">
//                       <i className="material-icons mr-1">visibility</i>
//                       <strong className="mr-1">Size:</strong>{" "}
//                       <strong className="text-danger">
//                         {this.state.file ? parseInt(this.state.file.size/1000) + " kB" : "N/A"}
//                       </strong>{" "}
//                     </span>
//                     <span className="d-flex mb-2">
//                       <i className="material-icons mr-1">score</i>
//                       <strong className="mr-1">Current Page:</strong>{" "}
//                       <strong className="text-warning">{pageNumber}</strong>
//                     </span>
//                     <span className="d-flex mb-2">
//                       <i className="material-icons mr-1">calendar_today</i>
//                       <strong className="mr-1">Total Pages:</strong> {numPages}{" "}
//                     </span>
//                   </ListGroupItem>
//                     <ListGroupItem>
//                     <div className="custom-file mb-3">
//                       <input
//                         type="file"
//                         className="custom-file-input"
//                         id="customFile2"
//                         onChange={this.onFileChange}
//                       />
//                       <label className="custom-file-label" htmlFor="customFile2">
//                         Choose file...
//                       </label>
//                     </div>
//                   </ListGroupItem>
//                   <ListGroupItem className="d-flex px-3 border-0">
//                     <Button outline theme="accent" size="sm" className="ml-auto">
//                       <i className="material-icons">save</i> Upload PDF
//                     </Button>
//                   </ListGroupItem>
//                 </ListGroup>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default DocumentAnnotationEditor;







import React, { Component } from "react";
import URLSearchParams from "url-search-params";

import {
  PdfLoader,
  PdfHighlighter,
  Tip,
  Highlight,
  Popup,
  AreaHighlight
} from 'react-pdf-highlighter';

import testHighlights from "../components/annotation-editor/test-highlights";

import Spinner from "../components/annotation-editor/Spinner";
import Sidebar from "../components/annotation-editor/Sidebar";
import "../assets/styles/annotation-editor/App.css";

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () => window.location.hash.slice("#highlight-".length);

const resetHash = () => {
  window.location.hash = "";
};

const HighlightPopup = ({ comment }) =>
  comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null;

const DEFAULT_URL = "https://arxiv.org/pdf/1708.08021.pdf";

const searchParams = new URLSearchParams(window.location.search);
const url = searchParams.get("url") || DEFAULT_URL;

class DocumentAnnotationEditor extends Component {
  // state = {
  //   highlights: testHighlights[url] ? [...testHighlights[url]] : []
  // };


  constructor(props) {
    super(props);

    this.state = {
      file: null,
      pdfContent: 'N/A',
      numPages: 0,
      pageNumber: 1,
      highlights: testHighlights[url] ? [...testHighlights[url]] : []
    };
  }

  componentWillMount() {
    // make API call to fetch the annotations for the document

  }

  resetHighlights = () => {
    this.setState({
      highlights: []
    });
  };

  scrollViewerTo = (highlight) => {};

  scrollToHighlightFromHash = () => {
    const highlight = this.getHighlightById(parseIdFromHash());

    if (highlight) {
      this.scrollViewerTo(highlight);
    }
  };

  componentDidMount() {
    window.addEventListener(
      "hashchange",
      this.scrollToHighlightFromHash,
      false
    );
  }

  getHighlightById(id) {
    const { highlights } = this.state;

    return highlights.find(highlight => highlight.id === id);
  }

  addHighlight(highlight) {
    const { highlights } = this.state;

    console.log("Saving highlight", highlight);

    this.setState({
      highlights: [{ ...highlight, id: getNextId() }, ...highlights]
    });
  }

  updateHighlight(highlightId, position, content) {
    console.log("Updating highlight", highlightId, position, content);

    this.setState({
      highlights: this.state.highlights.map(h => {
        return h.id === highlightId
          ? {
              ...h,
              position: { ...h.position, ...position },
              content: { ...h.content, ...content }
            }
          : h;
      })
    });
  }

  render() {
    const { highlights } = this.state;

    return (
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <Sidebar
          highlights={highlights}
          resetHighlights={this.resetHighlights}
        />
        <div
          style={{
            height: "100vh",
            width: "75vw",
            overflowY: "scroll",
            position: "relative"
          }}
        >
          <PdfLoader url={url} beforeLoad={<Spinner />}>
            {pdfDocument => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={event => event.altKey}
                onScrollChange={resetHash}
                scrollRef={scrollTo => {
                  this.scrollViewerTo = scrollTo;

                  this.scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection
                ) => (
                  <Tip
                    onOpen={transformSelection}
                    onConfirm={comment => {
                      this.addHighlight({ content, position, comment });

                      hideTipAndSelection();
                    }}
                  />
                )}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo
                ) => {
                  const isTextHighlight = !Boolean(
                    highlight.content && highlight.content.image
                  );

                  const component = isTextHighlight ? (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                    />
                  ) : (
                    <AreaHighlight
                      highlight={highlight}
                      onChange={boundingRect => {
                        this.updateHighlight(
                          highlight.id,
                          { boundingRect: viewportToScaled(boundingRect) },
                          { image: screenshot(boundingRect) }
                        );
                      }}
                    />
                  );

                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={popupContent =>
                        setTip(highlight, highlight => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </div>
      </div>
    );
  }
}

export default DocumentAnnotationEditor;


