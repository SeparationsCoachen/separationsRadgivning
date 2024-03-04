import React, { useEffect, useState } from 'react';
import createClient from '../../client.js'; // Importera client
import BlockContent from '@sanity/block-content-to-react';

const PaketEtt = () => {
  const [paketEttData, setpaketEttData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "paketEtt"]{
            _id,
            title,
            body,
        }`
      )
      .then((data) => {
        setpaketEttData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="OmmigText">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {paketEttData && (
        <div>
          {paketEttData.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <BlockContent
          blocks={item.body}
 
        />
            </div>
          ))}
          <div>
         
      </div>
        </div>
      )}
    </div>
  );
}

export default PaketEtt;