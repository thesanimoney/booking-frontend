import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";

import TypographyH1 from "@/components/typography/TypographyH1.tsx";
import {useTheme} from "@/components/theme-provider.tsx";
import {bestPractices} from "@/data/data.ts";
import {Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";
import {CombinedPostData, combinedPostSchema} from "@/schema/createPost.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import useAddPost from "@/hooks/posts/addPost.ts";
import TypographyP from "@/components/typography/TypographyP.tsx";

interface BestPracticeItemProps {
    number: number;
    title: string;
    description: string;
}

function PropertyCreate() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<CombinedPostData>({
        resolver: zodResolver(combinedPostSchema)
    });

    const {mutate, isError, error} = useAddPost()
    console.log('error', error)
    console.log('isError', isError)

    const onSubmit = (data: CombinedPostData) => {
        mutate(data)
        reset()
    };

    return <>
        <Card className="p-2">
            {isError && <TypographyP text={error?.message} isDanger={true}/>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Title
                            <Input
                                placeholder="Title"
                                {...register("title")}
                                className={`form-input ${errors.title ? "border-red-500" : ""}`}
                            />
                            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Description
                            <Input
                                placeholder="Description"
                                {...register("desc")}
                                className={`form-input ${errors.desc ? "border-red-500" : ""}`}
                            />
                            {errors.desc && <p className="text-red-500">{errors.desc.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Price
                            <Input
                                placeholder="Price"
                                type="number"
                                {...register("price", {valueAsNumber: true})}
                                className={`form-input ${errors.price ? "border-red-500" : ""}`}
                            />
                            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Address
                            <Input
                                placeholder="Address"
                                {...register("address")}
                                className={`form-input ${errors.address ? "border-red-500" : ""}`}
                            />
                            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            City
                            <Input
                                placeholder="City"
                                {...register("city")}
                                className={`form-input ${errors.city ? "border-red-500" : ""}`}
                            />
                            {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Bedrooms
                            <Input
                                placeholder="Bedrooms"
                                type="number"
                                {...register("bedroom", {valueAsNumber: true})}
                                className={`form-input ${errors.bedroom ? "border-red-500" : ""}`}
                            />
                            {errors.bedroom && <p className="text-red-500">{errors.bedroom.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Bathrooms
                            <Input
                                placeholder="Bathrooms"
                                type="number"
                                {...register("bathroom", {valueAsNumber: true})}
                                className={`form-input ${errors.bathroom ? "border-red-500" : ""}`}
                            />
                            {errors.bathroom && <p className="text-red-500">{errors.bathroom.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Latitude
                            <Input
                                type="number"
                                step="any"
                                placeholder="Latitude"
                                {...register("latitude", {valueAsNumber: true})}
                                className={`form-input ${errors.latitude ? "border-red-500" : ""}`}
                            />
                            {errors.latitude && <p className="text-red-500">{errors.latitude.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Longitude
                            <Input
                                step="any"
                                type="number"
                                placeholder="Longitude"
                                {...register("longitude", {valueAsNumber: true})}
                                className={`form-input ${errors.longitude ? "border-red-500" : ""}`}
                            />
                            {errors.longitude && <p className="text-red-500">{errors.longitude.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Type
                            <Input
                                placeholder="Type"
                                {...register("type")}
                                className={`form-input ${errors.type ? "border-red-500" : ""}`}
                            />
                            {errors.type && <p className="text-red-500">{errors.type.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            Property
                            <Input
                                placeholder="Property"
                                {...register("property")}
                                className={`form-input ${errors.property ? "border-red-500" : ""}`}
                            />
                            {errors.property && <p className="text-red-500">{errors.property.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block text-zinc-600">
                            Income
                            <Input
                                placeholder="Monthly income"
                                type="number"
                                {...register("income", {valueAsNumber: true})}
                                className={`form-input ${errors.income ? "border-red-500" : ""}`}
                            />
                            {errors.income && <p className="text-red-500">{errors.income.message}</p>}
                        </label>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block text-zinc-600">
                            Size
                            <Input
                                placeholder="Size in m2"
                                type="number"
                                {...register("size", {valueAsNumber: true})}
                                className={`form-input ${errors.size ? "border-red-500" : ""}`}
                            />
                            {errors.size && <p className="text-red-500">{errors.size.message}</p>}
                        </label>
                    </div>
                    <div className="w-full px-3 mb-6">
                        <label className="block text-zinc-600">
                            School Distance
                            <Input
                                placeholder="Closest school distance"
                                type="number"
                                {...register("school", {valueAsNumber: true})}
                                className={`form-input ${errors.school ? "border-red-500" : ""}`}
                            />
                            {errors.school && <p className="text-red-500">{errors.school.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block text-zinc-600">
                            Bus Distance
                            <Input
                                placeholder="Closest bus distance"
                                type="number"
                                {...register("bus", {valueAsNumber: true})}
                                className={`form-input ${errors.bus ? "border-red-500" : ""}`}
                            />
                            {errors.bus && <p className="text-red-500">{errors.bus.message}</p>}
                        </label>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block text-zinc-600">
                            Restaurant Distance
                            <Input
                                placeholder="Closest restaurant distance"
                                type="number"
                                {...register("restoraunt", {valueAsNumber: true})}
                                className={`form-input ${errors.restoraunt ? "border-red-500" : ""}`}
                            />
                            {errors.restoraunt && <p className="text-red-500">{errors.restoraunt.message}</p>}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6">
                        <label className="flex items-center text-zinc-600">
                            <input
                                type="checkbox"
                                {...register("pet")}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Pet Friendly</span>
                        </label>
                    </div>
                </div>
                <div className="w-full px-3">
                    <Button type="submit">Submit</Button>
                </div>
            </form>

        </Card>
    </>
}

export const BestPractices = () => {
    const {theme} = useTheme()

    return (
        <section className={`p-6 ${theme === "dark" ? "bg-zinc-900" : "bg-gray-100"} rounded-lg shadow-md`}>
            <TypographyH1 text="Best Practices for Creating a Post"/>
            <div className="space-y-4 mt-4">
                {bestPractices.map(practice => (
                    <BestPracticeItem
                        key={practice.number}
                        number={practice.number}
                        title={practice.title}
                        description={practice.description}
                    />
                ))}
            </div>
        </section>
    );
}

export const BestPracticeItem = ({number, title, description}: BestPracticeItemProps) => {
    return <p className={'leading-7'}>
            <span>
                <span style={{fontWeight: 'bold'}}>{number}. {title}:</span> {description}
            </span>
    </p>
};
export default PropertyCreate;