import React from "react";

function randomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WapperComponent) => {
    const Colorrandom = randomHexColor();
    return (props) => (
        <div style={{ color: Colorrandom }}>
            <WapperComponent {...props} />
        </div >
    )

}
export default Color;