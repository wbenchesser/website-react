import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) return <p>Blog post not found.</p>;

  return (
    <main>
      <h2>{post.title}</h2>
      <p><i>{post.date}</i></p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Back link */}
      <div className="back-link">
        <Link to="/blog">← Back to blog</Link>
      </div>
    </main>
  );
}