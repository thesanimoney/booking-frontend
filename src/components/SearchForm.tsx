import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import HomeForm from "@/components/HomeForm.tsx";

function SearchForm() {
    return <>
        <Tabs defaultValue="rent">
            <TabsList>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="buy">Buy</TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
               <HomeForm/>
            </TabsContent>
            <TabsContent value="buy">
               <HomeForm/>
            </TabsContent>
        </Tabs>
    </>
}

export default SearchForm;