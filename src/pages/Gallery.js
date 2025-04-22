import React, { useState } from 'react';
import './Gallery.css';

const focusMap = {
  center: 'center center',
  left:   'left center',
  right:  'right center',
  top:    'center top',
  bottom: 'center bottom',
};

const galleryData = [
  {
    id: 'photography',
    title: 'Photography',
    images: [
      { 
        file: 'beach-cables.JPG', 
        focus: 'left',
        location: 'Topsail Beach, North Carolina',
        date: 'November, 2021' 
      },
      { 
        file: 'sun-statue.JPG', 
        focus: 'top',
        location: 'Lisbon, Portugal',
        date: 'November, 2021'  
      },
      { 
        file: 'armando-cat.JPG', 
        focus: 'center',
        location: 'Durham, North Carolina',
        date: 'June, 2020'  
      },
      { 
        file: 'bergen-view.JPG', 
        focus: 'center',
        location: 'Bergen, Norway',
        date: 'June, 2024'  
      },
      { 
        file: 'diving-cph.JPG', 
        focus: 'top',
        location: 'Copenhagen, Denmark',
        date: 'May, 2024'  
      },
      { 
        file: 'grandmas-hands.JPG', 
        focus: 'center',
        location: 'Topsail Beach, North Carolina',
        date: 'November, 2021'  
      },
      { 
        file: 'nat-cph.JPG', 
        focus: 'top',
        location: 'Copenhagen, Denmark',
        date: 'June, 2024'  
      },
      { 
        file: 'rocky-colorodo.JPG', 
        focus: 'center',
        location: 'Rocky Mountains, Colorodo',
        date: 'March, 2023'  
      },
      { 
        file: 'sf-spirals.JPG', 
        focus: 'center',
        location: 'San Francisco, California',
        date: 'March, 2023'  
      },
      { 
        file: 'skipper-lot.jpg', 
        focus: 'bottom',
        location: 'Chapel Hill, North Carolina',
        date: 'February, 2024'  
      },
      { 
        file: 'hard-things.JPG', 
        focus: 'top',
        location: 'Chapel Hill, North Carolina',
        date: 'March, 2023'  
      },
      { 
        file: 'davis-ben.JPG', 
        focus: 'center',
        location: 'Chapel Hill, North Carolina',
        date: 'April, 2023'  
      },
    ],
  },
  {
    id: 'scrap-book',
    title: 'Scrap Book',
    images: [
      { 
        file: 'ben-alex-cph.JPG', 
        focus: 'center',
        location: 'Copenhagen, Denmark',
        date: 'June, 2024' 
      },
      { 
        file: 'ben-asim.JPG', 
        focus: 'center',
        location: 'Chapel Hill, North Carolina',
        date: 'February, 2024'  
      },
      { 
        file: 'ben-beach.jpg', 
        focus: 'center',
        location: 'Topsail Beach, North Carolina',
        date: 'March, 2024'  
      },
      { 
        file: 'ben-stephen-sf.jpg', 
        focus: 'top',
        location: 'San Fransisco, California',
        date: 'March, 2023'  
      },
      { 
        file: 'ben-tarheel-ten.jpg', 
        focus: 'top',
        location: 'Chapel Hill, North Carolina',
        date: 'April, 2024'  
      },
      { 
        file: 'ben-tekla.jpg', 
        focus: 'center',
        location: 'Chapel Hill, North Carolina',
        date: 'May, 2024'  
      },
      { 
        file: 'thanksgiving.JPG', 
        focus: 'center',
        location: 'Concord, North Carolina',
        date: 'November, 2024'  
      },
      { 
        file: 'cph-bros.jpg', 
        focus: 'center',
        location: 'Copenhagen, Denmark',
        date: 'May, 2024'  
      },
      { 
        file: 'ben-kiernan-ciya.jpg', 
        focus: 'top',
        location: 'Moorseville, North Carolina',
        date: 'October, 2023'  
      },
    ],
  },
  // …more sections
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    src: '',
    alt: '',
    location: '',
    date: ''
  });

  const openLightbox = (src, alt, location, date) => {
    setLightbox({ isOpen: true, src, alt, location, date });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', alt: '', location: '', date: '' });
  };

  return (
    <main className="gallery-page">
      {galleryData.map(section => (
        <section key={section.id} className="gallery-section">
          <h3>{section.title}</h3>
          <div className="photo-grid">
            {section.images.map((img, i) => {
              const src = `/images/gallery/${section.id}/${img.file}`;
              const alt = `${section.title} ${i + 1}`;
              return (
                <div key={i} className="photo-item">
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      objectFit: 'cover',
                      objectPosition: focusMap[img.focus] || focusMap.center,
                      width: '100%',
                      height: '100%',
                    }}
                    onClick={() =>
                      openLightbox(src, alt, img.location, img.date)
                    }
                  />
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <div className="lightbox-caption">
            {lightbox.location} | {lightbox.date}
          </div>
        </div>
      )}
    </main>
  );
}