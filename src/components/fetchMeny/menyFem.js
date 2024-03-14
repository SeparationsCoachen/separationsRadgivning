import React, { useEffect, useState } from "react";
import createClient from '../../client.js'; // Antag att detta är korrekt konfigurerad klient
import '../../css/nav.css'
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

  if (!menyFemData) return <div><p aria-busy="true">Loading...</p></div>;

  return (
    <div className="menytre-main" aria-labelledby="menyTreTitle">
     {isLoading && <p>Loading...</p>}
     {isError && <p>Error fetching data</p>}
     {menyFemData && menyFemData.map((item) => (
        <div key={item._id} className="meny">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default FemMeny;