import React from 'react';
import { Link } from 'react-router-dom';
import { poems } from '../data/poems';
import PostPreview from '../components/PostPreview';

export default function PoemList() {
  return (
    <main>
      <h3>My Poems</h3>
      <section className="post-list">
        {poems.map(poem => (
          <PostPreview key={poem.id} {...poem} type="poem" />
        ))}
      </section>

      {/* Back to Home */}
      <div className="back-link" style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </main>
  );
}