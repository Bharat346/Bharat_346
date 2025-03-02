import React from 'react';
import './tag.css';

const TagCard = ({ tags }) => {
    return (
        <div className="tag-card">
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagCard;
