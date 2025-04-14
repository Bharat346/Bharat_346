import React, { useState } from 'react';
import { FaCode, FaEye } from 'react-icons/fa';
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import TagCard from './tags/tag.jsx';
import ReadMoreless from './tags/ReadMoreLess.jsx'; 
import './card.css';

function Card({ imgSrc, imgAlt, name, txt, link1, link2, tagArr }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="card">
            <div className="card-image-container">
                <div 
                    className="card-image" 
                    style={{ backgroundImage: `url(${imgSrc})` }} 
                    alt={imgAlt}
                    aria-label={imgAlt}
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <div className="card-tags-container">
                    <TagCard tags={tagArr} />
                </div>
                <ReadMoreless 
                    text={txt} 
                    isExpanded={isExpanded} 
                    toggleDescription={toggleDescription} 
                />
                <div className="card-links">
                    <a 
                        href={link1} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-link"
                        aria-label="View code"
                    >
                        <FaCode className="link-icon" />
                        <span>Code</span>
                    </a>
                    <a 
                        href={link2} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-link"
                        aria-label="View project"
                    >
                        <HiOutlineViewfinderCircle className="link-icon view-icon" />
                        <span>Live</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;