const Carousel = () => (
  <div id="carouselExample" className="carousel slide mb-4">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://via.placeholder.com/800x300" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
)

export default Carousel
