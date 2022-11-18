import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Header = () => {
    if (!document.cookie.includes("token")) {
        return (
            <header className="header">
                <Button variant="light" size="lg" block>
                    <Link to={"../"}><p className="headerLink">Novinky</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/menu"}><p className="headerLink">Menu</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/aplikace"}><p className="headerLink">Kupony a aplikace</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/kontakt"}><p className="headerLink">Kontakt</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/login"}><p className="headerLink">Přihlášení</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/register"}><p className="headerLink">Registrace</p></Link>
                </Button>
            </header>
        )
    } else {
        return (
            <header className="header">
                <Button variant="light" size="lg" block>
                    <Link to={"../"}><p className="headerLink">Novinky</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/menu"}><p className="headerLink">Menu</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/aplikace"}><p className="headerLink">Kupony a aplikace</p></Link>
                </Button>
                <Button variant="light" size="lg" block>
                    <Link to={"/kontakt"}><p className="headerLink">Kontakt</p></Link>
                </Button>
                <Link to={"/kupony"}><img src={"kuponyIcon.jpg"} alt="Kupony"/></Link>
                <Button id="logout" variant="light" size="lg" block
                        onClick={() => {
                            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        }}>
                    Odhlásit se
                </Button>
            </header>
        )
    }
}

export default Header;