import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section id="first">
        <h2>Welcome!</h2>
        <p>
          In case you don't know me, I'm Ben. 
          I'm working on my BS in Computer Science with a minor in Creative Writing at <a href="https://www.unc.edu">UNC Chapel Hill</a>. 
          This summer, I'll be heading to Austin, Texas to for a software engineering internship at Apple. 
          I'm currently a teaching assistant for the UNC Systems Fundamentals course (COMP 211) and used to be a TA for our Computer Organization course (COMP 311). 
          I am a <a href="https://csxl.unc.edu/welcome">Computer Science Experience Labs</a> (CSXL) staff member and I'm gearing up to take over as manager in the Fall. 
          Finally, I am the CEO of <a href="https://appteamcarolina.com">App Team Carolina</a>, a nonprofit student organization that primarily teaches mobile development and makes production-level apps including ones for other nonprofits like <a href="https://chapelhill.porchcommunities.org">PORCH</a> and startup apps like <a href="https://centible.app">Centible</a>.
          You can view my resume <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </section>

      <section>
        <h2>Blog and Other Writing</h2>
        <p>
        Really, the point of this website is that I liked the idea of starting a blog. None of it is generative AI, I promise. As I write, I'll post and update here.
          <br />
          <div className="top-padding"></div>
          <Link to="/blog">Read blog posts →</Link>
        </p>

        <p>
        Some of you may know I'm a creative writing minor. I don't know how, it's not like I mention it. If it's a poem, it may be a bit sappy or cringe, so be prepared for that. Here's some of my work.
          <br />
          <div className="top-padding"></div>
          <Link to="/poems">Read poems →</Link>
        </p>
      </section>

      <section>
        <p className="bottom"><i>Feel free to reach out to my email: wbenchesser [at] gmail [dot] com</i></p>
      </section>
    </main>
  );
}