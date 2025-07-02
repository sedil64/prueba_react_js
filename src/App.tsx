import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Cards from './components/cards'
import Alerts from './components/alerts'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-3">
            <h1 className="display-5 fw-bold">¡Bienvenido a Mi App!</h1>
            <h2 className="display-7"> Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design.</h2>
            <p className="col-md-8 fs-4">
            </p>
          </div>
        </div>
        <Carousel />
        <Cards />
        <Alerts />
      </div>
      <Footer />
    </>
  )
}

export default App
