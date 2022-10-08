import Header from "../components/header";
import Footer from "../components/footer";

function Menu() {
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
                    <div className="col-6 menuitem">
                        <img src="https://cdn.discordapp.com/attachments/841411481693847582/1025873871838121984/Snimek_obrazovky_2022-10-01_225535.png" alt="MenuItem1" />
                    </div>
                    <div className="col-6 menuitem">
                        <img src="https://cdn.discordapp.com/attachments/841411481693847582/1025873871838121984/Snimek_obrazovky_2022-10-01_225535.png" alt="MenuItem1" />
                    </div>
                    <div className="col-6 menuitem">
                        <img src="https://cdn.discordapp.com/attachments/841411481693847582/1025873871838121984/Snimek_obrazovky_2022-10-01_225535.png" alt="MenuItem1" />
                    </div>
                    <div className="col-6 menuitem">
                        <img src="https://cdn.discordapp.com/attachments/841411481693847582/1025873871838121984/Snimek_obrazovky_2022-10-01_225535.png" alt="MenuItem1" />
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Menu;