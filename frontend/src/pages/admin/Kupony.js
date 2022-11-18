import React, {useEffect} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Kupony() {
    const [kupony, setKupony] = React.useState([]);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/kupony/kupony");
            const result = await response.json();
            if (!result.error) {
                setKupony(result);
            } else {
                setError(result.error);
            }
        }
        fetchData().then(r => console.log(r));
    }, []);
    return (
        <div>
            <Header/>
            <main>
                <h1>Kupony</h1>
                {error && <p>{error}</p>}
                {kupony.map((item) => (
                    <div className="card" key={item.id}>
                        <h2>{item.nazev}</h2>
                        <p>{item.popis}</p>
                        <p>{item.cena}</p>
                        <p>{item.kod}</p>
                    </div>
                ))}
            </main>
            <Footer/>
        </div>
    );
}

export default Kupony;