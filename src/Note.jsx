import React from "react";

const Note = () => {
    return(
        <>
            <div className="container py-5">
                <div className="note bg-body shadow-lg rounded p-3">
                    <h1>Title</h1>
                    <br />
                    <p>this is the content</p>
                    <button className="btn btn-danger rounded-circle float-end">-</button>
                </div>
            </div>
        </>
    );
}

export default Note;