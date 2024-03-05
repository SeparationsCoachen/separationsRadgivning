import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient

const TvaMeny = () => {
  const [menyTvaData, setmenyTvaData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "menyTva"]{
          _id,
          title,
        }`
      )
      .then((data) => {
        setmenyTvaData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (!menyTvaData) return <div>Loading...</div>;

  return (
    <div className="menyTva-main">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {menyTvaData && menyTvaData.map((item) => (
        <div key={item._id} className="menyTva">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TvaMeny;