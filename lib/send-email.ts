import * as z from 'zod'

import { ContactFormSchema } from '@/types/zod'

export async function sendEmail(data: z.infer<typeof ContactFormSchema>) {
  const apiEndpoint = '/api/email'

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}
