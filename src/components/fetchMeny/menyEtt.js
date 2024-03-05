import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient

const EttMeny = () => {
  const [menyEttData, setmenyEttData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "menyEtt"]{
          _id,
          title,
        }`
      )
      .then((data) => {
        setmenyEttData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (!menyEttData) return <div>Loading...</div>;

  return (
    <div className="menyEtt-main">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {menyEttData && menyEttData.map((item) => (
        <div key={item._id} className="menyEtt">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default EttMeny;

