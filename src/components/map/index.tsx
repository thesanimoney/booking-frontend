import {APIProvider, Map} from '@vis.gl/react-google-maps';

export const GreyMap = () => (
    <APIProvider apiKey={import.meta.env.VITE_API_MAP}>
        <Map
            style={{width: '100%', height: '700px', borderRadius: '10px', overflow: 'hidden', zIndex: 1}}
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={5}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={'b190e9c9b19e00cb'}
        />
    </APIProvider>
);