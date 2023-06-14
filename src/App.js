import React from "react";
import Header from "./Header";
import CreateNode from "./CreateNode";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <>
            <Header />
            <CreateNode />
            <Footer />
        </>
    );
}

export default App;