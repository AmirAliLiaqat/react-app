import React, { useEffect, useState } from "react";

const App = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }

    const incNums = () => {
        setNums(nums + 1);
    }

    useEffect(() => {
        alert('i am clicked');
    }, [num])

    return(
        <>
            <button onClick={incNum}>click me {num}</button>
            <br/>
            <button onClick={incNums}>click me {nums}</button>
        </>
    );
}

export default App;