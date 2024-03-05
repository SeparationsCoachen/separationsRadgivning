import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient

const FyraMeny = () => {
  const [menyFyraData, setmenyFyraData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "menyFyra"]{
          _id,
          title,
        }`
      )
      .then((data) => {
        setmenyFyraData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (!menyFyraData) return <div>Loading...</div>;

  return (
    <div className="menyfyra-main">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {menyFyraData && menyFyraData.map((item) => (
        <div key={item._id} className="menyfyra">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default FyraMeny;