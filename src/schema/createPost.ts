import z from 'zod'

const postSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).nullable(),
    price: z.number().nonnegative({ message: "Price must be a non-negative number" }),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    bedroom: z.number().int().nonnegative({ message: "Bedrooms must be a non-negative integer" }),
    bathroom: z.number().int().nonnegative({ message: "Bathrooms must be a non-negative integer" }),
    latitude: z.number(),
    longitude: z.number(),
    type: z.string().min(1, { message: "Type is required" }),
    property: z.string().min(1, { message: "Property is required" }),
});

const postDetailsSchema = z.object({
    desc: z.string().min(1, { message: "Description is required" }),
    pet: z.boolean(),
    size: z.number().min(1, { message: "Size is required" }),
    income: z.number().int().nonnegative({ message: "Income must be a non-negative integer" }),
    school: z.number().int().nonnegative({ message: "School distance must be a non-negative integer" }),
    bus: z.number().int().nonnegative({ message: "Bus distance must be a non-negative integer" }),
    restoraunt: z.number().int().nonnegative({ message: "Restaurant distance must be a non-negative integer" }),
});

export const combinedPostSchema = postSchema.merge(postDetailsSchema);
export type CombinedPostData = z.infer<typeof combinedPostSchema>;