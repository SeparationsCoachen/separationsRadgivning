// Fetch första bilden från API:et
// Returnerar en bild
import React, { useEffect, useState } from 'react';
import createClient from '../../client.js';
import '../../css/separationscoachenBild.css';

const ImageOne = () => {
    const [ImageOneData, setImageOneData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        createClient
            .fetch(
                `*[_type == "SeparationCoachenBild"]{
                    image {
                        asset-> {
                            url
                        }
                    }
                }`
            )
            .then((data) => {
                setImageOneData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
                setIsError(true);
            });
    }, []);

    return (
        <div className="SeparationBild">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}
            {ImageOneData && (
                <div className="bilden">
                    {ImageOneData.map((item) => (
                        <div key={item._id} className="bildentvå">
                            {/* Check if image is available before rendering */}
                            {item.image && item.image.asset && (
                                <img src={item.image.asset.url} alt="Bild" className="Separations-bild" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageOne;
