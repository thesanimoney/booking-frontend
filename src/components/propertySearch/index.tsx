import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";
import ImageBlock from "@/components/images";
import Achievement from "@/components/achivement";
import {bathrooms, bedrooms, properties, text} from "@/data/data.ts";
import styles from './search.module.css'
import '../../index.css'
import {ChangeEvent, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandGroup, CommandItem, CommandList} from "@/components/ui/command.tsx";
import {cn} from "@/lib/utils.ts";
import {queryClient} from "@/main.tsx";

interface InputChangeEvent extends EventTarget {
    target: {
        name: string;
        value: string;
    }
}

export function SearchFieldsBasic() {
     const [searchParams, setSearchParams] = useSearchParams();
     const navigate = useNavigate();

     const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | InputChangeEvent) => {
        const {name, value} = event.target

        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            if (value === '') {
                newParams.delete(name);
            } else {
                newParams.set(name, value);
            }
            return newParams;
        });
    };

    return <>
        <form action="" className={styles.form}>
            <Input onChange={handleChange} name='city' placeholder="Location" className={styles.locationInput}/>
            <Input onChange={handleChange} name='minPrice' placeholder="Min $" className={styles.priceInput}/>
            <Input onChange={handleChange} name='maxPrice' placeholder="Max $" className={styles.priceInput}/>
            <Button onClick={() => navigate(`/search?${searchParams}`)} className={styles.buttonSearch}>Search</Button>
        </form>
    </>
}

export function SearchFields() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [openBathroom, setOpenBathroom] = useState(false)
    const [openBedroom, setOpenBedroom] = useState(false)
    const [openProperties, setOpenProperties] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | InputChangeEvent) => {
        const {name, value} = event.target

        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            if (value === '') {
                newParams.delete(name);
            } else {
                newParams.set(name, value);
            }
            return newParams;
        });
    };

    const onSubmit = async () => {
        await queryClient.invalidateQueries({queryKey: ['posts']})
    }

    return <>
        <div className="grid grid-cols-6 gap-2">
            <Input value={searchParams.get('city') || ''} onChange={handleChange} name={'city'} className={'col-span-6'}
                   placeholder="City"/>
            <div className="col-span-2 md:col-span-1">
                <Popover open={openBathroom} onOpenChange={setOpenBathroom}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openBathroom}
                            className={'w-full text-zinc-500'}>
                            {searchParams.get('bathroom')
                                ? bathrooms.find((entity) => entity.value === searchParams.get('bathroom') || '')?.label
                                : "Bathrooms"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    {bathrooms.map((entity) => (
                                        <CommandItem
                                            key={entity.value}
                                            value={entity.value}
                                            onSelect={(currentValue) => {
                                                handleChange({
                                                    target: {
                                                        name: 'bathroom',
                                                        value: currentValue
                                                    }
                                                } as InputChangeEvent);
                                                setOpenBathroom(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    searchParams.get('bathrooms') === entity.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {entity.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="col-span-2 md:col-span-1">
                <Popover open={openBedroom} onOpenChange={setOpenBedroom}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openBedroom}
                            className={'w-full text-zinc-500'}>
                            {searchParams.get('bedroom')
                                ? bedrooms.find((entity) => entity.value === searchParams.get('bedroom') || '')?.label
                                : "Bedrooms"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    {bedrooms.map((entity) => (
                                        <CommandItem
                                            key={entity.value}
                                            value={entity.value}
                                            onSelect={(currentValue) => {
                                                handleChange({
                                                    target: {
                                                        name: 'bedroom',
                                                        value: currentValue
                                                    }
                                                } as InputChangeEvent);
                                                setOpenBedroom(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    searchParams.get('bedroom') === entity.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {entity.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="col-span-2 md:col-span-1">
                <Popover open={openProperties} onOpenChange={setOpenProperties}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openProperties}
                            className={'w-full text-zinc-500'}>
                            {searchParams.get('properties')
                                ? properties.find((entity) => entity.value === searchParams.get('properties') || '')?.label
                                : "Properties"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    {properties.map((entity) => (
                                        <CommandItem
                                            key={entity.value}
                                            value={entity.value}
                                            onSelect={(currentValue) => {
                                                handleChange({
                                                    target: {
                                                        name: 'properties',
                                                        value: currentValue
                                                    }
                                                } as InputChangeEvent);
                                                setOpenProperties(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    searchParams.get('properties') === entity.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {entity.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <Input value={searchParams.get('minPrice') || ''} onChange={handleChange} name={'minPrice'}
                   className={'col-span-2 md:col-span-1'}
                   placeholder="Min $"/>
            <Input value={searchParams.get('maxPrice') || ''} onChange={handleChange} name={'maxPrice'}
                   className={'col-span-2 md:col-span-1'}
                   placeholder="Max $"/>
            <Button onClick={() => onSubmit()} className={'col-span-6 md:col-span-1'}>Search</Button>
        </div>
    </>
}

export function SearchPropertyForm() {
    return <>
        <Tabs defaultValue="rent">
            <TabsList>
                <TabsTrigger value="rent">Rent</TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
                <SearchFieldsBasic/>
            </TabsContent>
        </Tabs>
    </>
}

export function SearchPropertySection() {
    return <>
        <div className="gridColumn">
            <div>
                <TypographyH1 text={'Find Real Estate & Rent Apartment of Your Dream'}/>
                <div className={'mt-10 mb-10'}><TypographyP isSecondary={true} text={text}/></div>
            </div>
            <div className={styles.imageContainer}>
                <ImageBlock/>
            </div>
            <div className="mx-auto md:hidden mb-10">
                <SearchPropertyForm/>
            </div>
            <div className="mx-auto mb-5 hidden md:block">
                <SearchPropertyForm/>
            </div>
            <div className="col-auto">
                <Achievement/>
            </div>
        </div>
    </>
}