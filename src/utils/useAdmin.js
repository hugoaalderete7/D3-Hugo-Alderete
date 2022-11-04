import {useState, useEffect} from "react"

function useAdmin () {

    const [users, setusers] = useState([])

    useEffect(() => {
        GetUsers()
    }, []);

    function GetUsers() {
        let getUsers = JSON.parse(localStorage.getItem("users")) || [];
        setusers(getUsers);
    }

    const mapUsers = users.map((item, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.date}</td>
        </tr>
    ));

    return {
        mapUsers
    }   
}
export default useAdmin;