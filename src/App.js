import React from "react";
import Card from "./Card";
import CardData from "./CardData";

function App() {
    return(
        <>
            <h1>List of top 5 websites in 2023</h1>
            <div className='cards'>
            <Card imgsrc={CardData[0].imgsrc} title={CardData[0].title} sname={CardData[0].sname} link={CardData[0].link} />,
            <Card imgsrc={CardData[1].imgsrc} title={CardData[1].title} sname={CardData[1].sname} link={CardData[1].link} />,
            <Card imgsrc={CardData[2].imgsrc} title={CardData[2].title} sname={CardData[2].sname} link={CardData[2].link} />,
            <Card imgsrc={CardData[3].imgsrc} title={CardData[3].title} sname={CardData[3].sname} link={CardData[3].link} />,
            </div>
        </>
    );
}

export default App;