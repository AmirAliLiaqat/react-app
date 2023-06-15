import React from "react";

const Note = () => {
    return(
        <>
            <div className="note">
                <h1>Title</h1>
                <br />
                <p>this is the content</p>
                <button className="btn btn-danger">-</button>
            </div>
        </>
    );
}

export default Note;