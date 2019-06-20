import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Container,
  Row, Col
} from "shards-react";
import { Redirect } from 'react-router-dom';
import AppDispatcher from "../store/dispatcher.js";
import { Store as AuthStore, Constants } from "../store/auth";

const Store = new AuthStore();


class Login extends React.Component {

  constructor(props) {
    super(props);

    Store.checkLoggedIn();
    this.onStateChanged = this.onStateChanged.bind(this);
    this.handloginButtonClick = this.handloginButtonClick.bind(this);
  }

  async componentWillMount() {
    await Store.checkLoggedIn();
    this.onStateChanged();
    Store.addStateChangedListener(this.onStateChanged);
  }

  componentWillUnmount() {
    Store.removeStateChangedListener(this.onStateChanged);
  }

  onStateChanged() {
    this.setState({ });
  }

  handloginButtonClick() {
    AppDispatcher.dispatch({
      actionType: Constants.LOGIN
    });
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {Store.isLoggedIn() && <Redirect to='dashboard' /> }
        <div style={{
          display: 'block',
          width: '40%',
          margin: '10% auto'
        }}>
          <div className="error__content" style={{textAlign: 'justify'}}>
            <Col lg="12" md="12">
              <Card className="mb-3">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Login</h6>
                </CardHeader>
                <CardBody className="p-0">
                  <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Col lg="12">
                          <Form>
                            <FormGroup>
                              <label htmlFor="feUsername">Username</label>
                              <FormInput
                                id="feUsername"
                                name="username"
                                type="text"
                                value={Store.fields.username}
                                onChange={Store.onInputChange}
                                placeholder="Enter username for user"
                              />
                            </FormGroup>
                            <FormGroup>
                              <label htmlFor="fePassword">Password</label>
                              <FormInput
                                id="fePassword"
                                name="password"
                                type="password"
                                value={Store.fields.password}
                                onChange={Store.onInputChange}
                                placeholder="Enter Password for user"
                              />
                            </FormGroup>
                            <Row form>
                              <Col md="12" className="form-group">
                                <FormCheckbox>
                                  {/* eslint-disable-next-line */}I agree with your{" "}
                                  <a href="#">Privacy Policy</a>.
                                </FormCheckbox>
                              </Col>
                            </Row>
                            <ListGroupItem className="d-flex px-3 border-0">
                              <Button 
                                pill theme="accent" 
                                style={{margin: '0 auto'}}
                                onClick={this.handloginButtonClick}
                              >
                                <i className="material-icons">add</i> Log In
                              </Button>
                            </ListGroupItem>
                          </Form>
                        </Col>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;


