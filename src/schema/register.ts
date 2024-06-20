import z from 'zod'

export const userSchemaRegister = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email address is required" }),
    password: z.string().min(8, { message: "Password is required, minimum 8 characters long" })
});

export type UserFormDataRegister = z.infer<typeof userSchemaRegister>;

