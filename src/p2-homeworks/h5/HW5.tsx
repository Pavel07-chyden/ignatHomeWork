import React from "react";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import NavBar from "./pages/NavBar";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <NavBar/>

                <Routes/>
            </HashRouter>
        </div>
    );
}

export default HW5;
