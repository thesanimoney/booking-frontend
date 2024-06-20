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
import {Dropdown} from "@/components/dropdown";

export function SearchFieldsBasic() {
    return <>
        <form action="" className={styles.form}>
            <Input placeholder="Location" className={styles.locationInput}/>
            <Input placeholder="Min $" className={styles.priceInput}/>
            <Input placeholder="Max $" className={styles.priceInput}/>
            <Button className={styles.buttonSearch}>Search</Button>
        </form>
    </>
}

export function SearchFields() {
    return <>
        <div className="grid grid-cols-6 gap-2">
            <Input className={'col-span-6'} placeholder="Location"/>
            <div className="col-span-3 md:col-span-1">
                <Dropdown title={'Properties'} data={properties}/>
            </div>
            <div className="col-span-3 md:col-span-1">
                <Dropdown title={'Bathrooms'} data={bathrooms}/>
            </div>
            <div className="col-span-2 md:col-span-1">
                <Dropdown title={'Type'} data={bedrooms}/>
            </div>
            <Input className={'col-span-2 md:col-span-1'} placeholder="Min $"/>
            <Input className={'col-span-2 md:col-span-1'} placeholder="Max $"/>
            <Button className={'col-span-6 md:col-span-1'}>Search</Button>
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