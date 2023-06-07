import React from "react";
import Card from "./Card";
import CardData from "./CardData";

const fav_web = 'Ecommerce';

const FavWeb = () => {
    if(fav_web === 'Ecommerce') {
        return(
            <Card key={CardData[1].id} imgsrc={CardData[1].imgsrc} title={CardData[1].title} sname={CardData[1].sname} link={CardData[1].link} />
        );
    } else {

    }
}

function App() {
    return(
        <>
            <h1>List of top 5 websites in 2023</h1>
            <div className='cards'>
                <FavWeb />
            </div>
        </>
    );
}

export default App;