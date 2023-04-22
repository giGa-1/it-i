import React, {useRef} from "react";
import './style/normalize.css';
import './style/main.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./componentsUI/Header";
import Footer from "./componentsUI/Footer";
// import AppRouter from "./componentsUI/AppRouter";


function App() {
    let wrap = React.createRef(false)
    if (typeof window !== 'undefined') {
        window.addEventListener('load', function () {
            wrap.current.hidden = false;
        })
    }
    return (
        <BrowserRouter >
            <div ref={wrap} hidden={true}>
            <Header />
            <div className="header-under"></div>
            {/*<AppRouter />*/}
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
