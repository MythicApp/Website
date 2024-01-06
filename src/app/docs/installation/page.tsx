import Navbar from "../../../_components/navigation/navbar";
import Docsnav from "../../../_components/navigation/documentation-navbar";
import Footer from "../../../_components/layout/footer";

export default function Installation() {
    return (
        <div>
            <Navbar />
            <Docsnav />
            <div className="CTA">
                <div style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                    <h1>Official releases</h1>
                    <p>Currently we do not have a release yet as we are actively developing our app to this day.
                        If you wish to be the first to get to use Mythic please sign up to our <a href="https://getmythic.app">waitlist</a>.</p>

                    <h1>Compiling from source</h1>
                    <p>Currently we do not have a guide to compile from source as we do not yet want contributions, issues or pull requests. We are still working hard on our app and know its not ready to even be tested yet.
                        If you do manage to compile our application we will not give you support.</p>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
};