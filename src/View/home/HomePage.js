import "./HomePage.css";
import Navbar from '../../Componentes/Navbar/Navbar';
import ModalLoginComponent from '../../Componentes/Modal/ModalLoginComponent';

function HomePage() {

    return (
        <div>

            <Navbar />
            
            <div className="Padre">

                <div className="Imagen">
                    <img className="imagenEnSeccion" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/F502DA7875EDEF40C34FA261694555784AB6D0E0A6535BF23EDB3A10632DD01A/scale?width=1200&aspectRatio=1.78&format=jpeg"
                         alt=""></img>
                </div>

                <div className="Titulo-Descripcion">
                    <h3 className="Titulo">Consigue la informacion que buscas de tu pelicula favorita, sigue estos simples pasos:</h3>
                    <p className="Descripcion">Registrate!! Haz click en "Crear Contacto"</p>
                    <p className="Descripcion">Si ya te registraste, Inicia Sesion y disfruta la experiencia !!!!</p>
                </div>

                <div className="Login">
                    <ModalLoginComponent />
                </div>

            </div>

        </div>
    )
}
export default HomePage;