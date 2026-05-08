import "./assets/App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import WBar from "./components/WBar"
import WCity from "./components/WCity"
import WNotFound from "./components/WNotFound"
import WHome from "./components/WHome"
import WFooter from "./components/WFooter"

function App() {
  return (
    <BrowserRouter>
      <div className="position-relative min-vh-100 d-flex flex-column">
        <WBar />
        <Routes>
          <Route path="/" element={<WHome />} />
          <Route path="/city/:city" element={<WCity />} />
          <Route path="*" element={<WNotFound />} />
        </Routes>
        <WFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
