import React, { useEffect, useState } from 'react';
import createClient from '../../client.js';
import '../../css/ommigBild.css';

const ImageThreeComponent = () => {
    const [ImageOneData, setImageOneData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        createClient
            .fetch(
                `*[_type == "pictureOfMe"]{
                    _id,
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
        <div className="MainOm-Mig" aria-busy={isLoading} aria-live="polite">
            {isLoading && <p>Loading...</p>}
            {isError && <p role="alert">Error fetching data</p>}
            {ImageOneData && (
                <div>
                    {ImageOneData.map((item) => (
                        <div key={item._id}>
                            {/* Check if image is available before rendering */}
                            {item.image && item.image.asset && (
                                <img src={item.image.asset.url} alt="A personal portrait of me" className="OmMig-Bild" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageThreeComponent;
