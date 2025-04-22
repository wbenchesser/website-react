// src/components/PostPreview.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PostPreview.css';

export default function PostPreview({ id, title, date, blurb, type }) {
  // determine the correct base path for detail links
  const path = type === 'poem' ? `/poem/${id}` : `/blog/${id}`;

  return (
    <div className="post-item">
      {type === 'poem' ? (
        <>
          <h3 className="post-title">
            <Link to={path}>{title}</Link>
          </h3>
          <div className="post-date">{date}</div>
        </>
      ) : (
        <>
          <div className="post-date">{date}</div>
          <h3 className="post-title">
            <Link to={path}>{title}</Link>
          </h3>
        </>
      )}

      {/* only show excerpt for blogs */}
      {type === 'blog' && blurb && (
        <p className="post-excerpt">{blurb}</p>
      )}
    </div>
  );
}