import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";
import "./css/footer.css";
function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="footer__address" xs="12" md="4">
            <h4>Address</h4>
            <hr />
            <p>
              Sreenidhi Institute of Science & Technology Yamnampet, Ghatkesar
              Hyderabad - 501 301, Telangana <br />
              Mail:info@sreenidhi.edu.in
            </p>
          </Col>
          <Col className="footer__timings" xs="12" md="4">
            <h4>Office Timings</h4>
            <hr />
            <p>
              Mon-Sat
              <br />
              9:00AM-4:00PM
            </p>
          </Col>
          <Col className="footer__connect" xs="12" md="4">
            <Row>
              <h4 style={{ fontFamily: "serif" }}>
                Connect with us
                <hr />
              </h4>

              <Col xs="3">
                <SocialIcon url="https://twitter.com/Sreenidhi_SNIST" />
              </Col>
              <Col xs="3">
                <SocialIcon url="https://www.instagram.com/snist_sreenidhi/" />
              </Col>
              <Col xs="3">
                <SocialIcon url="https://www.facebook.com/SNIST.SreenidhiEducationalGroup/" />
              </Col>
              <Col xs="3">
                <SocialIcon url="https://www.linkedin.com/school/sreenidhi-institure-of-science-and-technology/" />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <p style={{ textAlign: "center", fontFamily: "serif" }}>
          Copyright © 2021 BINGO.
          <br /> All Rights Reserved
        </p>
      </Container>
      <p
        style={{ textAlign: "right", marginRight: "10px", fontFamily: "serif" }}
      >
        Designed,Developed and Maintained by <br /> <b>SOHAIL</b>
      </p>
    </div>
  );
}

export default Footer;
