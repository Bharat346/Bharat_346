import React from 'react';
import './CardSkeleton.css';

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-tags">
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag"></div>
        </div>
        <div className="skeleton-description">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line" style={{ width: '70%' }}></div>
        </div>
        <div className="skeleton-links">
          <div className="skeleton-link"></div>
          <div className="skeleton-link"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;