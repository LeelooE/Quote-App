import React from 'react';
import { FaTwitter } from 'react-icons/fa';
const TwitterButton = (props) => {
    return (
        <div className='twitter'>
            <a className='twitter-btn' href={props.destination}><FaTwitter /></a>
        </div>
    )
}

export default TwitterButton;