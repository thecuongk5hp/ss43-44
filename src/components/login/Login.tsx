import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <Col sm={6}>
          <img
            style={{ objectFit: "cover", width: "400px", height: "400px" }}
            src="https://tse4.mm.bing.net/th?id=OIP.MZk__RXOEgaif8GCngydjwHaEo&pid=Api&P=0&h=180"
            alt=""
          />
        </Col>
        <Col sm={6}>
          <Form>
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="email" placeholder="Placehadelr contnet" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Placehadelr contnet" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <p style={{ textAlign: "end" }}>Forgot password?</p>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", marginBottom: "20px" }}
            >
              Submit
            </Button>
          </Form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                border: "1px",
                backgroundColor: "#dbdbdb",
              }}
            ></div>
            <span>or</span>
            <div
              style={{
                width: "100%",
                height: "1px",
                border: "1px",
                backgroundColor: "#dbdbdb",
              }}
            ></div>
          </div>
          <Button
            variant="Light"
            type="submit"
            style={{
              width: "100%",
              marginBottom: "20px",
              border: "1px solid #dbdbdb",
            }}
          >
            Register now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}