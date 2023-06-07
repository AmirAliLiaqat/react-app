const SlotMech = (props) => {
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    // object destructuring
    let {x,y,z} =  props;

    if( (x===y) && (y===z) ) {
        return(
            <>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h3>This is matching</h3>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="slot_inner">
                    <h1>{x} {y} {z}</h1>
                    <h3>This is not matching</h3>
                </div>
            </>
        )
    }
}

export default SlotMech;