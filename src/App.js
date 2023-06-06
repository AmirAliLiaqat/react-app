import React from "react";
import Card from "./Card";
import CardData from "./CardData";

// simple method
// function CardDetail(val) {
//     return(
//         <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />
//     );
// }

// fat arrow method
const CardDetail = (val) => {
    return(
        <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />
    );
}

function App() {
    return(
        <>
            <h1>List of top 5 websites in 2023</h1>
            <div className='cards'>
                {CardData.map(CardDetail)}
            </div>
        </>
    );
}

export default App;