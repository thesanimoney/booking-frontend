import {APIProvider, Map, AdvancedMarker, InfoWindow} from '@vis.gl/react-google-maps';
import {useState} from "react";
import {MiniCard} from "@/components/propertyCard";
import {Badge} from "@/components/ui/badge.tsx";
import {useTheme} from "@/components/theme-provider.tsx";

export const GreyMap = () => {
    const position = {lat: 53.55, lng: 9.99}; // Corrected coordinates
    const position2 = {lat: 53.55, lng: 9.88}; // Corrected coordinates
    const [open, setOpen] = useState(false);
    const {theme} = useTheme();

    return (
        <>
            <APIProvider apiKey={import.meta.env.VITE_API_MAP}>
                <Map
                    id={'map'}
                    style={{width: '100%', height: '700px', borderRadius: '10px', overflow: 'hidden', zIndex: 1}}
                    defaultZoom={8}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={'b190e9c9b19e00cb'}
                    defaultCenter={position}>
                    <AdvancedMarker className={'hover:scale-125 transition-all 300ms ease-in-out'} position={position} onClick={() => setOpen(true)}>
                       <Badge className={`text-xl hover:bg-secondary ${theme == 'dark' ? 'hover:text-zinc-50' : 'hover:text-zinc-900'}`}
                              variant={'default'}>$350</Badge>
                    </AdvancedMarker>

                     <AdvancedMarker className={'hover:scale-125 transition-all 300ms ease-in-out'} position={position2} onClick={() => setOpen(true)}>
                       <Badge className={`text-xl hover:bg-secondary ${theme == 'dark' ? 'hover:text-zinc-50' : 'hover:text-zinc-900'}`}
                              variant={'default'}>$450</Badge>
                    </AdvancedMarker>

                    {open &&
                        <InfoWindow className={'p-0 max-w-[300px]'} position={position} onCloseClick={() => setOpen(false)}>
                            <div className={'text-zinc-700 hover:underline hover:cursor-pointer'}>
                              <MiniCard/>
                            </div>
                        </InfoWindow>
                    }
                </Map>
            </APIProvider>
        </>
    );
}
