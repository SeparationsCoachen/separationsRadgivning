import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient
import BlockContent from "@sanity/block-content-to-react";

const Text1Component = () => {
  const [separationData, setseparationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "separation"]{
          _id,
          title,
          body,
        }`
      )
      .then((data) => {
        setseparationData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (!separationData) return <div>Loading...</div>;

  return (
    <div className="SeparationsCoachenMain">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {separationData && separationData.map((item) => (
        <div key={item._id} className="Coachen-text">
          <h1>{item.title}</h1>
          <div className="Coachen-text-body">
            <BlockContent
              blocks={item.body} // Använd 'item.body', inte 'separationData.body'
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Text1Component;

