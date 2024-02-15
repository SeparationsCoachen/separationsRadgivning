import React, { useEffect, useState } from 'react';
import createClient from '../../client.js'; // Importera client
import BlockContent from '@sanity/block-content-to-react';
import '../../css/juridisk-text.css';

const Text2Component = () => {
  const [JuridiskHjalpData, setJuridiskHjalpData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
   createClient
      .fetch(
        `*[_type == "JuridiskHjalp"]{
          _id,
          title,
          body,
        }`
      )
      .then((data) => {
        setJuridiskHjalpData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="juridiskText-main">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {JuridiskHjalpData && JuridiskHjalpData.map((item) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <BlockContent
            blocks={item.body}
            
          />
        </div>
      ))}
    </div>
  );
}

export default Text2Component;
