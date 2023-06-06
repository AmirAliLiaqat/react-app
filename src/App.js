import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Order from "./Order";

function App() {
    let currDate = new Date(2023,3,6,5);
    currDate = currDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if(currDate >= 1 && currDate < 12) {
    greeting = 'Good Moring';
    cssStyle.color = 'green';
    } else if(currDate >= 12 && currDate < 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
    } else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
    }
    
    return(
        <>
            <div>
                <h1 >Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default App;