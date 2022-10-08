import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/header';
import Footer from "../components/footer";

function Register() {
    return (
        <div>
            <Header />
            <main>
                <h1>Registrace</h1>
                <form>
                    <label form="email">Email:</label><br />
                    <input type="email" id="email" name="email" /><br />
                    <label form="password">Heslo:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <label form="password">Potvrzení hesla:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <input type="submit" value="Registrovat" />
                </form>
            </main>
            <Footer />
        </div>
    );
}