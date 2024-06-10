import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import TypographyP from "@/components/typography/TypographyP.tsx";
import ImageBlock from "@/components/images";
import Achievement from "@/components/achivement";
import {text} from "@/data/data.ts";
import styles from './search.module.css'
import '../../index.css'

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

export function SearchPropertyForm() {
    return <>
        <Tabs defaultValue="rent">
            <TabsList>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="buy">Buy</TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
               <SearchFieldsBasic/>
            </TabsContent>
            <TabsContent value="buy">
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
                <p className={'mt-10 mb-10'}><TypographyP isSecondary={true} text={text}/></p>
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