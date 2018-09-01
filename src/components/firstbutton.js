import React from 'react';

const FirstButton = (props) => {
    return (
        <div>
            <button className='btn' onClick={props.loadQuote}>New Quote</button>
        </div>
    )
}

export default FirstButton;