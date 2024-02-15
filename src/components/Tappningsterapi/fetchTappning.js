import React, { useEffect, useState } from 'react';
import createClient from '../../client.js';
import BlockContent from '@sanity/block-content-to-react';
import '../../css/tappning.css';

const Text3Component = () => {
  const [TappningData, setTappningData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "Tappning"]{
          _id,
          title,
          body,
        }`
      )
      .then((data) => {
        setTappningData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="tappning-text">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {TappningData && TappningData.map((item) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <BlockContent
            blocks={item.body} // Nu inuti .map(), så 'item' är definierad
          />
        </div>
      ))}
    </div>
  );
}
export default Text3Component;
