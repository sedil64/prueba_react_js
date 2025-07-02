const Carousel = () => (
  <div id="carouselExample" className="carousel slide mb-4">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2023/03/16/08/42/camping-7856198_640.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUvUwcX0J36rqz2CamVH2_BJAb_qQ697oerVBpdOq-jHFc7yeW94g8pMaDNuweq8XGC8&usqp=CAU" className="d-block w-100" alt="..." />
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
