import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Header = () => {
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
                <Link to={"/register"}><p className="headerLink">Registrace</p></Link>
            </Button>
        </header>
    )
}

export default Header;