import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { poems } from '../data/poems';

export default function PoemPage() {
  const { id } = useParams();
  const poem = poems.find((p) => p.id === id);

  if (!poem) return <p>Poem not found.</p>;

  return (
    <main>
      <h2 className="poem-title">{poem.title}</h2>
      <p className="poem-meta"><i>by {poem.author}</i></p>
      <p className="poem-meta"><i>{poem.date}</i></p>
      <div className="poem" dangerouslySetInnerHTML={{ __html: poem.content }} />

      {/* Back link */}
      <div className="back-link">
        <Link to="/poems">← Back to Poems</Link>
      </div>
    </main>
  );
}