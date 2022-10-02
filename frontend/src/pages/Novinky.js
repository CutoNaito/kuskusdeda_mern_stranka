import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <main>
            <h1>Aktuální novinky</h1>
            <a><img src="https://cdn.discordapp.com/attachments/841411481693847582/1025873871838121984/Snimek_obrazovky_2022-10-01_225535.png" alt="novinka1"/></a>
        </main>
    </React.StrictMode>
);