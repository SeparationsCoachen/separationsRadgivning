// Fetch första bilden från API:et
// Returnerar en bild
import React, { useEffect, useState } from 'react';
import createClient from '../client';

const Logo = () => {
    const [logoBildData, setlogoBildData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        createClient
            .fetch(
                `*[_type == "logoBild"]{
                    image {
                        asset-> {
                            url
                        }
                    }
                }`
            )
            .then((data) => {
                setlogoBildData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
                setIsError(true);
            });
    }, []);

    return (
        <div className="logoBild">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}
            {logoBildData && (
                <div className="logoBild1">
                    {logoBildData.map((item) => (
                        <div key={item._id} className="logoBildtvå">
                            {/* Check if image is available before rendering */}
                            {item.image && item.image.asset && (
                                <img src={item.image.asset.url} alt="Bild" className="logoBild-bild" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Logo;