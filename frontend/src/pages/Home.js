import Header from "../components/header";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
        <Header />
        <main>
            <h1>Aktuální novinky</h1>
            <Link to={"/novinky"}><img src="" alt="novinka1"/></Link>
        </main>
        </div>
    );
}

export default Home;