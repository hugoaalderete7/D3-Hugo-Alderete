import "./AdminPage.css";
import Navbar from "../../Componentes/Navbar/Navbar";
import TableComponent from "../../Componentes/Table/TableComponent";

function AdminPage() {
    return (
        <div>
            <Navbar />
            <div className="p-5">
                <TableComponent />
            </div>
        </div>

    )
}
export default AdminPage;