import React from "react";
import SlotMech from "./SlotMech";

function App() {
    return(
        <>
            <h1 className="heading_style"> 🧰 Welcome to <span>Slot mechine game</span> 🧰 </h1>
            <div className="slot_mechine">
                <SlotMech x = '😊' y = '😊' z = '😊'/>
                <hr/>
                <SlotMech x = '😊' y = '😊' z = '😂'/>
                <hr/>
                <SlotMech x = '😊' y = '😒' z = '😂'/>
                <hr/>
                <SlotMech x = '💕' y = '💕' z = '💕'/>
            </div>
        </>
    );
}

export default App;