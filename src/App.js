import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return[...prevData, note];
        })
    }

    const onDelete = (id) => {
        setAddItem((oldData) =>
            oldData.filter((currData, index) => {
                return index !== id;
            })
        )
    }

    return(
        <>
            <Header />
            <CreateNote passNote={addNote} />
            <div className="container-fluid py-5">
                {
                    addItem.map((val, index) => {
                        return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />;
                    })
                }
            </div>
            <Footer />
        </>
    );
}

export default App;