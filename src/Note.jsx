import React from "react";

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return(
        <>
            <div className="note bg-body shadow rounded d-inline-block m-2 p-3">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className="btn btn-danger rounded-circle float-end" onClick={deleteNote}>-</button>
            </div>
        </>
    );
}

export default Note;