import z from "zod";

export const schema = z.object({
  name: z.string().min(3, "Name must be of 3 alphabets"),
  email: z.string().email("Invalid format of email"),
});

export type MySchemaIn = z.infer<typeof schema>;
