import "./AdminPage.css";
import Navbar from "../../Componentes/Navbar/Navbar";
import TableComponent from "../../Componentes/Table/TableComponent";
import { Link } from "react-router-dom"

function AdminPage() {
    return (
        <div>
            <Navbar />
            <div className="mt-3 ms-5 mb-3">
                <Link to="/film"><b>FilmPage</b></Link>
            </div>
            <div className="px-5">
                <TableComponent />
            </div>
        </div>

    )
}
export default AdminPage;