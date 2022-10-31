import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import Header from '../components/header';
import Footer from "../components/footer";

function Register() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState("false");
    const [error, setError] = React.useState(null);

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {username, password, email, isAdmin};
        const response = await fetch("/users/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await response.json();

        if(result.error) {
            setError(result.error);
        }
        else {
            document.cookie = "username=" + result.username;
            document.cookie = "isAdmin=" + result.isAdmin;
            document.cookie = "email=" + result.email;
            history("../");
        }
    }
    return (
        <div>
            <Header />
            <main>
                <h1>Registrace</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Uživatelské jméno</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br />
                    <label form="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <label form="password">Heslo:</label><br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <label form="password">Potvrzení hesla:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <button>Add user</button>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default Register;