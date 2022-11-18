import React, {useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

function Admin() {
    const [error, setError] = React.useState(null);
    const history = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/users/users/token/" + document.cookie.split("=")[1]);
            const result = await response.json();

            if (!result.error) {
                console.log(result);
                if (result.length === 0 || result[0].isAdmin === false) {
                    setError("NotAuthorized");
                } else {
                    setError("Authorized");
                }
            }
        }
        fetchData().then(r => console.log(r));
    }, []);
    if (error === "NotAuthorized" || error === null) {
        return (
            <div>
                <Header/>
                <main>
                    <h1>Not Authorized</h1>
                    <Button onClick={() => history("../")}>Go back</Button>
                </main>
                <Footer/>
            </div>
        );
    } else {
    return (
        <div>
            <Header/>
            <main>
                <h1>Admin page</h1>
                <Button variant="primary" onClick={() => history("/admin/kupony")}>Manage coupons</Button>
                <Button variant="primary" onClick={() => history("/users")}>Manage users</Button>
                <Button variant="primary" onClick={() => history("/zbozi")}>Manage menu</Button>
                <Button variant="primary" onClick={() => history("/objednavky")}>Manage orders</Button>
            </main>
            <Footer/>
        </div>
    );}
}

export default Admin;