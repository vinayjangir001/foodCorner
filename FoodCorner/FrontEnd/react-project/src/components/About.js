import React, { Component } from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card.css";
import { lightBlue, lightGreen } from "@mui/material/colors";
class About extends Component {
  render() {
    return (
      <>
        <div className="bg-image1">
          <Container>
            <Row>
              <Col sm><div className="text-header">
                <Card style={{ width: "13rem", height: "13rem", color: "black", background: "beige" }}>
                  {/* <div class="card bg-warning"> */}
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title >Our Founders</Card.Title>
                    <Card.Text>
                      All of them passed out from Cdac acts batch of 2022.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                  {/* </div> */}
                </Card>
              </div></Col>

              <Col sm>
                {" "}
                <div className="text-header">
                  <Card style={{ width: "12rem", height: "12rem", color: "black", background: "lightBlue" }}>
                    {/* <div class="card bg-primary"> */}
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>Vinay Jangir</Card.Title>
                      <Card.Text>
                        Eat cheese before clicking the selfie !
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    {/* </div> */}
                  </Card>
                </div>
              </Col>
              <Col sm>
                {" "}
                <div className="text-header">
                  <Card style={{ width: "12rem", height: "12rem", color: "black", background: "lightBlue" }}>
                    {/* <div class="card bg-primary"> */}
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>Krishna Yadav</Card.Title>
                      <Card.Text>
                        If you are sad then eat so BAD !
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    {/* </div> */}
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm>
                {" "}
                <div className="text-header">
                  <Card style={{ width: "12rem", height: "12rem", color: "black", background: "lightBlue" }}>
                    {/* <div class="card bg-primary"> */}
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>
                        Never count calories, it’s just a number !
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    {/* </div> */}
                  </Card>
                </div>
              </Col>
              <Col sm>
                <div className="text-header" >
                  <Card style={{ width: "12rem", height: "12rem", color: "black", background: "lightBlue" }}>
                    {/* <div class="card bg-primary"> */}
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>
                        Committed with my pizza !
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    {/* </div> */}
                  </Card>
                </div>
              </Col>
              <Col sm> <div className="text-header">
                <Card style={{ width: "12rem", height: "12rem", color: "black", background: "lightBlue" }}>
                  {/* <div class="card bg-primary"> */}
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>np</Card.Title>
                    <Card.Text>
                      Dosa is an Indian style pizza !
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                  {/* </div> */}
                </Card>
              </div></Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default About;
