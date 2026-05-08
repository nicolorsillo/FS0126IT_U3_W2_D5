import "./assets/App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import WBar from "./components/WBar"
import WCity from "./components/WCity"
import WNotFound from "./components/WNotFound"
import WHome from "./components/WHome"

function App() {
  return (
    <BrowserRouter className="position-relative">
      <WBar />
      <Routes>
        <Route path="/" element={<WHome />} />
        <Route path="/city/:city" element={<WCity />} />
        <Route path="*" element={<WNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
