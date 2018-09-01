import React from 'react';

const Container = (props) => {
    return (
        <div>
            {props.quote && <p>"{props.quote}"</p>}
            {props.author && <p>{props.author}</p>}
        </div>
    )
}

export default Container;