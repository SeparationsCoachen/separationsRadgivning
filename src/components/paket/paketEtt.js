import React, { useEffect, useState } from 'react';
import createClient from '../../client.js'; // Import the client
import BlockContent from '@sanity/block-content-to-react';
import { BookingButton } from '../bookingButton.js';
import '../../css/paket.css';

const PaketEtt = () => {
  const [paketEttData, setPaketEttData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "paketEtt"]{
            _id,
            title,
            body,
            pris,
            "mainImageUrl": mainImage.asset->url // This line fetches the main image URL
        }`
      )
      .then((data) => {
        setPaketEttData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  // Accessible loading indicator
  if (isLoading) return <p role="status" aria-live="polite">Loading...</p>;
  if (isError) return <p role="alert">Error fetching data</p>;

  return (
    <div className="paketText" aria-live="polite">
      {paketEttData && paketEttData.map((item) => (
        <article key={item._id} className="paket-text">
          {item.mainImageUrl && (
                <img src={item.mainImageUrl} alt={item.title} style={{width: '100%', height: 'auto'}} /> // This line displays the main image
                )}
          <h1>{item.title}</h1>
          <BlockContent blocks={item.body} />
          <p>{item.pris}</p>
          <div className="paketbutton">
            <BookingButton aria-label={`Book ${item.title}`} /> 
          </div>
        </article>
      ))}
    </div>
  );
}

export default PaketEtt;

