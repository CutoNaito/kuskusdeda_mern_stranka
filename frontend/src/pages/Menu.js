import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState} from "react";

function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/zbozi/zbozi");
            const result = await response.json();

            if (!result.error) {
                setMenu(result);
            }
        }
        fetchData().then(r => console.log(r));
    }, []);

    return (
        <div>
            <Header />
            <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Menu</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {menu.map((item) => (
                            <div className="card" key={item.id}>
                                <h2>{item.nazev}</h2>
                                <p>{item.popis}</p>
                                <p>{item.cena}</p>
                                <img src={item.obrazek} alt={item.nazev} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Menu;