import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps';
import {useState} from "react";
import {MiniCard} from "@/components/propertyCard";
import {Badge} from "@/components/ui/badge.tsx";
import {useTheme} from "@/components/theme-provider.tsx";
import {Post} from "@/hooks/posts/getPosts.ts";

interface MapProps {
    data: Post[]
}

interface MiniMapProps {
    data: Post
}

export const GreyMap = ({data}: MapProps) => {
    const [openWindows, setOpenWindows] = useState<boolean[]>(new Array(data.length).fill(false));
    const {theme} = useTheme();

       const toggleWindow = (index: number) => {
        const updatedWindows = [...openWindows];
        updatedWindows[index] = !updatedWindows[index];
        setOpenWindows(updatedWindows);
    };

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
                    defaultCenter={{lat: parseInt(data[1]?.latitude), lng: parseInt(data[1]?.longitude)}}>
                    {data.map((item, index) => <AdvancedMarker key={index} className={'hover:scale-125 transition-all 300ms ease-in-out'}
                                                      position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} onClick={() => toggleWindow(index)}>
                        <Badge
                            className={`text-xl hover:bg-secondary ${theme == 'dark' ? 'hover:text-zinc-50' : 'hover:text-zinc-900'}`}
                            variant={'default'}>{item.price}</Badge>
                    </AdvancedMarker>)}

                   {openWindows.map((isOpen, index) => isOpen && (
                    <InfoWindow
                        key={index}
                        className={'p-0 max-w-[300px]'}
                        position={{ lat: parseFloat(data[index].latitude), lng: parseFloat(data[index].longitude) }}
                        onCloseClick={() => toggleWindow(index)}>
                        <div className={'text-zinc-700 hover:underline hover:cursor-pointer'}>
                            <MiniCard id={data[index]._id} data={data[index]} />
                        </div>
                    </InfoWindow>
                ))}
                </Map>
            </APIProvider>
        </>
    );
}

export const MapMini = ({data}: MiniMapProps) => {
    const position = {lat: parseFloat(data.latitude), lng: parseFloat(data.longitude)}
    return (
        <>
            <APIProvider apiKey={import.meta.env.VITE_API_MAP}>
                <Map
                    id={'map'}
                    style={{width: '100%', height: '200px', borderRadius: '10px', overflow: 'hidden', zIndex: 1}}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={'b190e9c9b19e00cb'}
                    defaultCenter={position}>
                    <AdvancedMarker className={'hover:scale-125 transition-all 300ms ease-in-out'} position={position}>
                        <Pin glyphColor={'black'} borderColor={'white'} background={'white'}/>
                    </AdvancedMarker>
                </Map>
            </APIProvider>
        </>
    );
}

