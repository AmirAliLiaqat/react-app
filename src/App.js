import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <>
            <Header />
            <CreateNote />
            <Note />
            <Footer />
        </>
    );
}

export default App;