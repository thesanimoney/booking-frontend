import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import MiniSearchForm from "@/components/MiniSearchForm.tsx";

function SearchForm() {
    return <>
        <Tabs defaultValue="rent">
            <TabsList>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="buy">Buy</TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
               <MiniSearchForm/>
            </TabsContent>
            <TabsContent value="buy">
               <MiniSearchForm/>
            </TabsContent>
        </Tabs>
    </>
}

export default SearchForm;