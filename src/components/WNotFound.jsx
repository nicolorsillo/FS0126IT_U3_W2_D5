import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router"

const WNotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <div className=" h-25"></div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="m-0">404 - Page not found</h3>
            <div>
              {" "}
              <img
                src="/images/places/earth.gif"
                alt="not-found-page"
                className="my-3"
              />
            </div>

            <div>
              <Button
                variant="info"
                onClick={() => {
                  navigate("/")
                }}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default WNotFound
