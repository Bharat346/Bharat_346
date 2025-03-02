import React, { useState } from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'; // Importing code and link icons from react-icons
import TagCard from './tags/tag.jsx';
import ReadMoreless from './tags/ReadMoreLess.jsx'; 
import './card.css';

function Card({ imgSrc, imgAlt, name, txt, link1, link2, tagArr }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${imgSrc})` }} alt={imgAlt}></div>
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <TagCard tags={tagArr} /> 
                <br />
                <ReadMoreless text={txt} isExpanded={isExpanded} toggleDescription={toggleDescription} />
                <div className="card-links">
                    <a href={link1} target="_blank" rel="noopener noreferrer" className="card-link" style={{
                        display : "flex",
                        alignItems: "center",
                        gap : "5px",
                        textDecoration : "none"
                    }}>
                        <FaCode /> code
                    </a>
                    <a href={link2} target="_blank" rel="noopener noreferrer" className="card-link" style={{
                        display : "flex",
                        alignItems: "center",
                        gap : "5px",
                        textDecoration : "none"
                    }}>
                        <FaExternalLinkAlt /> view
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
