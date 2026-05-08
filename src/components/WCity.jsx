import { useEffect, useState } from "react"
import {
  Container,
  Card,
  Spinner,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import { useParams } from "react-router"
import WNotFound from "./WNotFound"

const WCity = () => {
  const { city } = useParams()
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextDay = () => {
    if (forecast && currentIndex + 8 < forecast.list.length) {
      setCurrentIndex(currentIndex + 8)
    }
  }

  const prevDay = () => {
    if (currentIndex - 8 >= 0) {
      setCurrentIndex(currentIndex - 8)
    }
  }

  const getDayLabel = () => {
    const dayOffset = currentIndex / 8
    if (dayOffset === 0) return "Today"
    if (dayOffset === 1) return "Tomorrow"

    const date = new Date()
    date.setDate(date.getDate() + dayOffset)
    return date.toLocaleDateString("en-EN", { weekday: "long" })
  }

  useEffect(() => {
    const search = async () => {
      try {
        const lastIndex = city.lastIndexOf(" ")
        const cityName =
          city.slice(0, lastIndex) + "," + city.slice(lastIndex + 1)
        console.log(cityName)

        const weatherSearch = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=41dcf96fb5719488ec8ecb936054e70f&units=metric`,
        )

        if (weatherSearch.ok) {
          const weatherData = await weatherSearch.json()
          setWeather(weatherData)
          setLoading(false)
        } else {
          throw new Error("City not found")
        }

        const forecastSearch = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=41dcf96fb5719488ec8ecb936054e70f&units=metric`,
        )

        if (forecastSearch.ok) {
          const forecastData = await forecastSearch.json()
          setForecast(forecastData)
          setLoading(false)
        } else {
          throw new Error("Forecast not found")
        }
      } catch (err) {
        setLoading(false)
        setError(err.message)
      }
    }

    if (city) {
      search()
    }
  }, [city])

  if (loading)
    return (
      <Container className="text-center" style={{ marginTop: "100px" }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    )

  if (error) return <WNotFound />

  return (
    <Container style={{ marginTop: "100px" }}>
      <Card className="border-0">
        <Row className="align-items-center">
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center p-3"
          >
            <Card.Img
              src={`/images/icons/${weather.weather[0].icon}.png`}
              alt="meteo icon"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Subtitle className="text-muted mb-1">
                {weather.sys.country}
              </Card.Subtitle>
              <Card.Title className="h2 mb-0">{weather.name}</Card.Title>
              <Card.Text className="text-capitalize text-primary fw-bold">
                {weather.weather[0].description}
              </Card.Text>

              <hr />

              <Row>
                <Col xs={6}>
                  <small className="text-muted d-block">Temperature</small>
                  <span className="h4">{Math.round(weather.main.temp)}°C</span>
                </Col>
                <Col xs={6}>
                  <small className="text-muted d-block">Humidity</small>
                  <span className="h4">{weather.main.humidity}%</span>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-0">Forecast</h3>
        <div className="d-flex flex-row">
          <Button
            variant="outline-primary"
            className="me-2 d-flex justify-content-center align-items-center"
            onClick={prevDay}
          >
            <ChevronLeft />
          </Button>
          <p
            className="fw-bold text-primary mx-2 align-middle text-center my-2"
            style={{ width: "80px" }}
          >
            {getDayLabel()}
          </p>
          <Button
            variant="outline-primary"
            className="me-2 d-flex justify-content-center align-items-center"
            onClick={nextDay}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="table-responsive shadow-sm rounded">
        <Table align="middle" className="mb-0 border-0">
          <thead>
            <tr>
              <th>Hours</th>
              <th>Meteo</th>
              <th className="text-center">Temperature</th>
              <th className="text-center">Humidity</th>
              <th className="text-center">Wind</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {forecast &&
              forecast.list
                .slice(currentIndex, currentIndex + 8)
                .map((item, index) => (
                  <tr key={index}>
                    <td className=" align-middle fw-bold">
                      {new Date(item.dt_txt).toLocaleTimeString("it-IT")}
                    </td>
                    <td className=" align-middle text-capitalize">
                      <img
                        src={`/images/icons/${item.weather[0].icon}.png`}
                        alt="icon"
                        height="40"
                        className="me-2"
                      />
                      {item.weather[0].description}
                    </td>
                    <td className=" align-middle text-center">
                      {Math.round(item.main.temp)}°C
                    </td>
                    <td className=" align-middle text-center">
                      {item.main.humidity}%
                    </td>
                    <td className=" align-middle text-center">
                      {Math.round(item.wind.speed)} km/h
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export default WCity
