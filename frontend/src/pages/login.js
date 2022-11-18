import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);

    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        const fetchData = async () => {
            const response = await fetch("/users/users/" + username);
            const result = await response.json();

            if (!result.error) {
                console.log(result.password);
                if (result.find((item) => item.password === password)) {
                    let token = result.find((item) => item.password === password).token;
                    document.cookie = "token=" + token;
                    history("../");
                } else {
                    setError("Špatné heslo");
                }
            } else {
                setError(result.error);
            }
        }
        fetchData().then(r => console.log(r));
    };

return (
    <div>
        <Header/>
        <main>
            <h1>Přihlášení</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Uživatelské jméno</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <label form="password">Heslo:</label><br/>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <button type="submit">Přihlásit</button>
            </form>
            <p>{error}</p>
        </main>
        <Footer/>
    </div>
);
}

export default Login;