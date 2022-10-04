import Header from "../components/header";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div>
        <Header />
        <main>
            <h1>Aktuální novinky</h1>
            <div className="novinky">
                <Button variant="light" size="lg" block>
                    <Link to={"/"}><img src="" alt="novinka1"/></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/"}><img src="" alt="novinka1"/></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/"}><img src="" alt="novinka1"/></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/"}><img src="" alt="novinka1"/></Link>
                </Button>
            </div>
        </main>
        <Footer />
        </div>
    );
}

export default Home;