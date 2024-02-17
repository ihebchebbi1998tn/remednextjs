'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { RefreshCw } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { sendEmail } from '@/lib/send-email'
import { ContactFormSchema } from '@/types/zod'

import { Separator } from '../ui/separator'

interface FormContactProps {
  className?: string
  formClassName?: string
}

export function FormContact({
  className = '',
  formClassName = '',
}: FormContactProps) {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  })

  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    try {
      await sendEmail(data)
      toast({
        title: 'We received your message',
        description: (
          <p>
            We will respond as soon as possible. You can also contact us at
            <a
              href="mailto:contact@s-reg.tn"
              className="text-blue-500 hover:underline"
            >
              contact@s-reg.tn
            </a>
          </p>
        ),
      })
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: error.message,
      })
    } finally {
      form.reset({
        fullName: '',
        email: '',
        message: '',
      })
    }
  }

  return (
    <div
      className={`${className} space-y-8 sm:min-w-[340px] md:min-w-[400px] lg:min-w-[500px]`}
    >
      <div>
        <h3 className="text-lg font-medium text-muted-foreground">
          Contact us
        </h3>
        <p className="text-sm text-muted-foreground">
          We will respond as soon as possible.
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`${formClassName} space-y-6`}
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message..."
                    className="resize"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              {form.formState.isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                'Send message'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
