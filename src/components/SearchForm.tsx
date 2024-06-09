import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

function SearchForm() {
    return <>
        <Tabs defaultValue="rent">
            <TabsList>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="buy">Buy</TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
                <form action="" className={'flex flex-row justify-between flex-wrap gap-y-2'}>
                    <Input placeholder="Location" className={'max-w-[100%] md:max-w-[55%]'}/>
                    <Input placeholder="Min $" className={'max-w-[49%] md:max-w-[21%]'}/>
                    <Input placeholder="Max $" className={'max-w-[49%] md:max-w-[21%]'}/>
                    <Button className={'w-[100%] sm:max-w-[100%]'}>Search</Button>
                </form>
            </TabsContent>
            <TabsContent value="buy">
                <form action="" className={'flex flex-row justify-between flex-wrap gap-y-2'}>
                    <Input placeholder="Location" className={'max-w-[100%] md:max-w-[55%]'}/>
                    <Input placeholder="Min $" className={'max-w-[49%] md:max-w-[21%]'}/>
                    <Input placeholder="Max $" className={'max-w-[49%] md:max-w-[21%]'}/>
                    <Button className={'w-[100%] sm:max-w-[100%]'}>Search</Button>
                </form>
            </TabsContent>
        </Tabs>
    </>
}

export default SearchForm;