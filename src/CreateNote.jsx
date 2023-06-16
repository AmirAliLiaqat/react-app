import React, { useState } from "react";

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setNote((prevData) => {
            return{
                ...prevData,
                [name]: value,
            }
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }

    const expandIt = () => {
        setExpand(true);
    }

    const shrinkIt = () => {
        setExpand(false);
    }

    return(
        <>
            <div className="container p-4">
                <div className="main_note bg-body shadow-lg rounded position-relative mx-auto">
                    <form onSubmit={onSubmit}>
                        {expand?
                            <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" className="border-0 display-6 fw-bolder w-100 p-3" />
                        : null }
                        <textarea rows="" cols="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." className="border-0 w-100 p-3" onClick={expandIt} onDoubleClick={shrinkIt}></textarea>
                        {expand?
                            <button className="btn btn-success rounded-circle position-absolute add_note" onClick={addEvent}>+</button>
                        : null }
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateNote;