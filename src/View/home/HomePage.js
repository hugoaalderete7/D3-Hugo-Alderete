import "./HomePage.css";
import Navbar from '../../Componentes/Navbar/Navbar';
import ModalLoginComponent from '../../Componentes/Modal/ModalLoginComponent';

function HomePage () {

    return (
        <div>
            <Navbar/>
            <ModalLoginComponent />
            <p>
                hola mundo soy el home
            </p>
        </div>
    )
}
export default HomePage;