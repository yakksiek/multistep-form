import { useState, useEffect } from 'react';

interface LocationState {
    loaded: boolean;
    coords: {
        lat: number | '';
        long: number | '';
    };
}

function useGeoLocation(): LocationState {
    const [location, setLocation] = useState<LocationState>({ loaded: false, coords: { lat: '', long: '' } });

    const onSuccess = (locationData: GeolocationPosition) => {
        const { latitude, longitude } = locationData.coords;
        setLocation({ loaded: true, coords: { lat: latitude, long: longitude } });
    };

    useEffect(() => {
        const isLocationAvaible = 'geolocation' in navigator;
        if (!isLocationAvaible) return setLocation({ ...location, loaded: true });

        return navigator.geolocation.getCurrentPosition(onSuccess);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return location;
}

export default useGeoLocation;
