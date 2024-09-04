import React, { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { mapStyles } from '../../../Utils/mapStyles';

const center = {
    lat: 29.066674,
    lng: 31.108045
};

const libraries = ['places'];
function ContactUsMap() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries, // Use the constant array here
    });
    useEffect(() => {
        if (!isLoaded || !google.maps || !document.getElementById('map')) return;

        const map = new google.maps.Map(document.getElementById('map'), {
            center,
            zoom: 14,
            styles: mapStyles,
        });

        // Check if the AdvancedMarkerElement is available
        if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
            new google.maps.marker.AdvancedMarkerElement({
                map,
                position: center,
            });
        } else {
            // Fallback to the old Marker if AdvancedMarkerElement is not available
            new google.maps.Marker({
                map,
                position: center,
            });
        }

    }, [isLoaded]);
    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className=''>
            <div className="w-full h-[500px] mt-8 shadow-md" id="map"></div>

        </div>
    )
}

export default ContactUsMap