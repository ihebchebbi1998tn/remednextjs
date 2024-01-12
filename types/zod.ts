import * as z from 'zod'

export const ContactFormSchema = z.object({
  message: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
  fullName: z.string().min(1, {
    message: 'Please enter your full name.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
})
