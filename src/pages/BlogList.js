import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import PostPreview from '../components/PostPreview';

export default function BlogList() {
  return (
    <main>
      <h3>My Blog</h3>
      <section className="post-list">
        {blogs.map(blog => (
          <PostPreview key={blog.id} {...blog} type="blog" />
        ))}
      </section>

      {/* Back to Home */}
      <div className="back-link" style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </main>
  );
}