import z from 'zod'

export const userSchemaLogin = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(8, { message: "Password is required, minimum 8 characters long" })
});

export type UserFormDataLogin = z.infer<typeof userSchemaLogin>;