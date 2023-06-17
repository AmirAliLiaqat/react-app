import React, { useEffect, useState } from "react";

const App = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }

    useEffect(() => {
        document.title=`You click me ${num} times`;
    })

    return(
        <>
            <button onClick={incNum} style={{margin: 20}}>click me {num}</button>
        </>
    );
}

export default App;