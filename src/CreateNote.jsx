import React from "react";

const CreateNote = () => {
    return(
        <>
            <div className="main_note bg-body shadow rounded">
                <form>
                    <input type="text" placeholder="Title" autoComplete="off" />
                    <textarea rows="" cols="" placeholder="Write a note..."></textarea>
                    <button className="btn btn-success">+</button>
                </form>
            </div>
        </>
    );
}

export default CreateNote;