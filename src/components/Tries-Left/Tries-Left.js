import React from 'react';

function TriesLeft({ numTriesLeft }) {

    return(
        <div>
        <h2>Tries left: </h2>
        <h2 class="cell">{numTriesLeft}</h2>
        </div>
    )
}

export default TriesLeft;