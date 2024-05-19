import React from "react";
import Navbar from "../../../_components/navigation/navbar";
import Docsnav from "../../../_components/navigation/documentation-navbar";

export default function Installation() {
    return (
        <div>
            <Navbar />
            <Docsnav />
            <div className="CTA">
                <div style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                    <h1>Official releases</h1>
                    <p>
                        Our alpha release is avaliable for{" "}
                        <a href="https://getmythic.app/download">download</a>.
                    </p>
                    <h1>Compiling from source</h1>
                    <p>
                        Currently, we do not have a guide to compile from source as we do not yet want contributions, issues, or pull requests.
                    </p>
                </div>
            </div>
        </div>
    );
}