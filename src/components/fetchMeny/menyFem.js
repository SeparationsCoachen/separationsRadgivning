import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient

const FemMeny = () => {
  const [menyFemData, setmenyFemData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "menyFem"]{
          _id,
          title,
        }`
      )
      .then((data) => {
        setmenyFemData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (!menyFemData) return <div>Loading...</div>;

  return (
    <div className="menytre-main">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {menyFemData && menyFemData.map((item) => (
        <div key={item._id} className="menytre">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default FemMeny;