import React from "react";

const CreateNote = () => {
    return(
        <>
            <div className="container p-4">
                <div className="main_note bg-body shadow-lg rounded position-relative mx-auto">
                    <form>
                        <input type="text" placeholder="Title" autoComplete="off" className="border-0 w-100 p-3" />
                        <textarea rows="" cols="" placeholder="Write a note..." className="border-0 w-100 p-3"></textarea>
                        <button className="btn btn-success rounded-circle position-absolute add_note">+</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateNote;