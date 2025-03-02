import React from 'react';
import "./tag.css"

const ReadMoreless = ({ text, isExpanded, toggleDescription }) => {
    return (
        <div className="card-description">
            <span>{isExpanded ? text + "     " : text.substring(0, 100) + '...   '}</span>
            <span onClick={toggleDescription} className="show-more-btn">
                {isExpanded ? 'Show Less' : 'Show More'}
            </span>
        </div>
    );
};

export default ReadMoreless;
