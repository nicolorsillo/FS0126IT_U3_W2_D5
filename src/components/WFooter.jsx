const WFooter = function () {
  return (
    <div
      className=" mt-auto"
      style={{ backgroundColor: "#240c3b", color: "white" }}
    >
      <p className="text-center m-0 py-3 fs-5">
        &copy; EPICODE - {new Date().getFullYear()}
        <a
          className="text-center ms-2 fs-6"
          href="https://ui8.net/hosein_bagheri/products/3d-weather-icons40"
        >
          Icons
        </a>
        <a className="text-center ms-2 fs-6" href="https://openweathermap.org/">
          API
        </a>
      </p>
    </div>
  )
}

export default WFooter
