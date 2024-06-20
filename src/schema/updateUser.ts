import z from 'zod'

export const userSchemaUpdate = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email address is required" }),
});

export type UserFormDataUpdate = z.infer<typeof userSchemaUpdate>;