import React, { useEffect, useState } from 'react';
import createClient from '../../client.js'; // Importera client
import BlockContent from '@sanity/block-content-to-react';
import '../../css/ommmig.css';

const Text4Component = () => {
  const [OmmigData, setOmMigData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "Ommig"]{
            _id,
            title,
            body,
        }`
      )
      .then((data) => {
        setOmMigData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="OmmigText" aria-busy={isLoading}>
      {isLoading && <p>Loading...</p>}
      {isError && <p role="alert">Error fetching data</p>}
      {OmmigData && (
        <div>
          {OmmigData.map((item) => (
            <section key={item._id}>
              <h1>{item.title}</h1>
              <BlockContent blocks={item.body} />
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default Text4Component;