import React from 'react';

const FirstButton = (props) => {
    return (
        <div className='btn'>
            <button onClick={props.loadQuote}>Get a Quote!</button>
        </div>
    )
}

export default FirstButton;