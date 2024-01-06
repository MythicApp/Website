import Navbar from "../../_components/navigation/navbar";
import Docsnav from "../../_components/navigation/documentation-navbar";
import Footer from "../../_components/layout/footer";
export default function Documentation() {

    return (
        <div>
            <Navbar />
            <Docsnav />
            <div className="CTA faq_layout">
                <h1 className="h1-faq">Welcome to Mythic's Documentation</h1>
                <p>Here you can find things such as how to install and/or use Mythic and more things added by the community such as modifying or building by source.</p>
                <p>While this page is empty, you can use the navigation bar above to move to another page.</p>
            </div>

            {/* <Footer /> */}
        </div>
    );
};