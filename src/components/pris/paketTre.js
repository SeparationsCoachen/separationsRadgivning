import React, { useEffect, useState } from 'react';
import createClient from '../../client.js'; // Import the client
import BlockContent from '@sanity/block-content-to-react';
import { BookingButton } from '../bookingButton.js'
import '../../css/paket.css'

const PaketTre = () => {
  const [paketTreData, setPaketTreData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "paketTre"]{
            _id,
            title,
            body,
            "mainImageUrl": mainImage.asset->url // Add this to fetch the main image URL
        }`
      )
      .then((data) => {
        setPaketTreData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="paketText">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {paketTreData && (
        <div>
          {paketTreData.map((item) => (
            <div key={item._id} className="paket-text">
              {item.mainImageUrl && (
                <img src={item.mainImageUrl} alt={item.title} style={{width: '100%', height: 'auto'}} /> // Display the main image here
              )}
              <h1>{item.title}</h1>
              <BlockContent blocks={item.body} />
              <div className="paketbutton">
              <BookingButton />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaketTre;
