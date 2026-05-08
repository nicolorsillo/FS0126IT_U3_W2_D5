import { Container, Image, Row, Col, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router"
import { useState } from "react"

const WHome = () => {
  const [city, setCity] = useState("")
  const navigate = useNavigate()
  const formSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      navigate(`/city/${city}`)
    }
  }
  return (
    <>
      <Container
        fluid
        className=" mt-5 d-flex flex-column justify-content-center align-items-center"
      >
        {" "}
        <h1 className="mt-lg-5">Welcome to 3D Weather</h1>
        <Container className="mb-5">
          <Form className="my-5" onSubmit={formSubmit}>
            <Form.Group controlId="exampleForm.search">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rome IT"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Container>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <Link
              className=" text-decoration-none text-light d-flex flex-column align-items-center"
              to="/city/Rome IT"
            >
              {" "}
              <h2 className="text-center">Rome</h2>
              <Image
                style={{ maxWidth: "200px" }}
                src="images/places/rome.webp"
              ></Image>
            </Link>
          </Col>
          <Col>
            <Link
              className=" text-decoration-none text-light d-flex flex-column align-items-center"
              to="/city/New York US"
            >
              {" "}
              <h2 className="text-center">New York</h2>
              <Image
                style={{ maxWidth: "200px" }}
                src="images/places/ny.png"
              ></Image>
            </Link>
          </Col>
          <Col>
            <Link
              className=" text-decoration-none text-light d-flex flex-column align-items-center"
              to="/city/Tokyo JP"
            >
              {" "}
              <h2 className="text-center">Tokyo</h2>
              <Image
                style={{ maxWidth: "200px" }}
                src="images/places/tokyo.webp"
              ></Image>
            </Link>
          </Col>
          <Col>
            <Link
              className=" text-decoration-none text-light d-flex flex-column align-items-center"
              to="/city/Paris FR"
            >
              {" "}
              <h2 className="text-center">Paris</h2>
              <Image
                style={{ maxWidth: "200px" }}
                src="images/places/paris.webp"
              ></Image>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WHome
