import React from 'react'
import './BoxColor.css';

function BoxColor(props) {
    const { r, g, b } = props;
    let red = r;
    let green = g;
    let blue = b;

    red = r.toString(16);
    green = g.toString(16);
    blue = b.toString(16);

    if (red.length == 1)
        red = "0" + red;
    if (green.length == 1)
        green = "0" + green;
    if (blue.length == 1)
        blue = "0" + blue;

    return (
        <div className='m-2 text-center' style={{ backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')' }} id="boxColor">
            <p className='m-1'>rgb({r}, {g}, {b})</p>
            <p className='m-1'>#{red}{green}{blue}</p>
        </div>
    )
}

export default BoxColor;