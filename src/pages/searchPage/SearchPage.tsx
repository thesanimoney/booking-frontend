import { PropertyCard } from "@/components/propertyCard";
import { GreyMap } from "@/components/map";
import { Button } from "@/components/ui/button.tsx";
import { List, Map } from 'lucide-react';
import { useState, useEffect } from "react";
import useSize from "@/pages/searchPage/useWindow.ts";
import {SearchFields} from "@/components/propertySearch";
import getPosts from "@/hooks/posts/getPosts.ts";
import TypographyP from "@/components/typography/TypographyP.tsx";

function SearchPage() {
    const {data, isError, error} = getPosts()
    const [showMap, setShowMap] = useState(false);
    const windowSize = useSize();

     useEffect(() => {
        if (windowSize[1] > 1024) {
           setShowMap(false);
        }
    }, [windowSize]);

     if (!data) return <TypographyP text={error?.response?.data as string}/>;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-8 gap-3">
            <Button onClick={() => setShowMap(prevState => !prevState)}
                    className={'justify-self-end hidden sm:flex lg:hidden'}>
                Switch To {!showMap ? <Map className={'ml-3'}/> : <List className={'ml-3'}/>}
            </Button>
            <div className="mb-5 col-span-1 lg:col-span-5" style={{zIndex: 2}}>
                <SearchFields/>
                <Button onClick={() => setShowMap(prevState => !prevState)} variant={'outline'}
                        className={'mt-3 w-full sm:hidden'}>
                    Switch To {!showMap ? <Map className={'ml-3'}/> : <List className={'ml-3'}/>}
                </Button>

                {!showMap && <>
                     {isError && <TypographyP isDanger={true} text={error.response!.data as string}/>}
                    <div className="mt-5 lg:hidden">
                        {data.map((post, index) => <PropertyCard id={post._id} data={post} key={index}/>)}
                    </div>
                </>
                }
                <div className="hidden lg:flex">
                    {isError && <TypographyP isDanger={true} text={error.response!.data as string}/>}
                    <div className="mt-5">
                        {data.map((post, index) => <PropertyCard id={post._id} data={post} key={index}/>)}
                    </div>
                </div>
            </div>
            {showMap && windowSize[0] < 1024 && <section
                className={`bg-secondary ${showMap && 'block mb-10'} lg:block col-span-1 lg:col-span-3 rounded-md max-h-[700px]`}
                style={{zIndex: 1}}>
                <GreyMap data={data}/>
            </section>}
            <section
                className={`bg-secondary hidden ${showMap && 'block mb-10'} lg:block col-span-1 lg:col-span-3 rounded-md max-h-[700px]`}
                style={{zIndex: 1}}>
                <GreyMap data={data}/>
            </section>
        </section>
    );
}

export default SearchPage;
