import React from 'react';

const Container = (props) => {
    return (
        <div>
            {props.quote && <p>"{props.quote}"</p>}
            <div className='seperator'>
                <div className='bar'></div>
            </div>
            {props.author && <p>{props.author}</p>}
        </div>
    )
}

export default Container;