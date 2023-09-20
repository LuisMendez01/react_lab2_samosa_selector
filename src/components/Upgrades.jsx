import React from "react";

// Step 4
const Upgrades = (props) => {

    // const buyDoubleStuffed = () => {
    //     if (props.count >= 10) {
    //       props.setMultiplier(props.multiplier * 2);
    //       props.setCount(props.count - 10);
    //     }
    //   }

    // const buyPartyPack = () => {
    //   if (props.count >= 100) {
    //     props.setMultiplier(props.multiplier * 5);
    //     props.setCount(props.count - 100);
    //   }
    // }

    // const buyFullFeast = () => {
    //   if (props.count >= 1000) {
    //     props.setMultiplier(props.multiplier * 10);
    //     props.setCount(props.count - 1000);
    //   }
    // }

    const buyMultiplier = (threshold, m) => {
        console.log('t: ' + threshold + ' - m: ' + m);
      if (props.count >= threshold) {
        props.setMultiplier(m);
        props.setCount(props.count - threshold);
      }
    };

    return (
        <div className="container">
            <div className="upgrade">
                <h3>Double Stuffed 👯‍♀️</h3>
                <p>2x per click</p>
                <button onClick={() => buyMultiplier(10, 2)}>10 samosas</button>
            </div>
            <div className="upgrade">
                <h3>Party Pack 🎉</h3>
                <p>5x per click</p>
                <button onClick={() => buyMultiplier(100, 5)}>100 samosas</button>
            </div>
            <div className="upgrade">
                <h3>Full Feast 👩🏽‍🍳 </h3>
                <p>10x per click</p>
                <button onClick={() => buyMultiplier(1000, 10)}>1000 samosas</button>
            </div>
        </div>
    )
}

export default Upgrades;