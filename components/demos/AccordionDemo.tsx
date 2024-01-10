import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CustomBlock } from '@/types'

interface AccordionDemoProps {
  data?: {
    title?: string
    description?: string
  }[]
}


export function AccordionDemo({ data }: AccordionDemoProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data?.map((item, key) => {
        return (
          <AccordionItem key={key} value={item.title || ''}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        )})
      }
    </Accordion>
  )
}
