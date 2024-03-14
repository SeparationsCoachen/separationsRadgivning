import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient
import '../../css/nav.css'
const TreMeny = () => {
  const [menyTreData, setmenyTreData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "menyTre"]{
          _id,
          title,
        }`
      )
      .then((data) => {
        setmenyTreData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (!menyTreData) return <div><p aria-busy="true">Loading...</p></div>;

  return (
    <div className="menytre-main" aria-labelledby="menyTreTitle">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {menyTreData && menyTreData.map((item) => (
        <div key={item._id} className="meny">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TreMeny;