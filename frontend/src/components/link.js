import React from 'react'
import './Link.css'

const onClickLink = (link) => {
    window.open(link, "_blank");
}

const Link = ({text, link}) => {
    return (
        <div className="Link">
            <div className="Text" onClick={(e) => {onClickLink(link)}}>
                    {text}
            </div>
        </div>
    );
}

export default Link