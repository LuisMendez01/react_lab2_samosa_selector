import React from "react";

// Step 2
const Counterbutton = (props) => {

    //const updateCount = (props.count) => { props.count + props.multi }
    //const updateCount = () => props.setCount((props.count) => props.count + props.multiplier);

    //const updateCount = () => { props.count + props.multi }
    const updateCount = () => props.setCount(props.count + props.multiplier);

    return (
        <div>
            <h2>Count: {props.count}</h2>
            <img  src="src/assets/samosa.png" className='samosa' onClick={updateCount} />
        </div>
    )
}

export default Counterbutton;