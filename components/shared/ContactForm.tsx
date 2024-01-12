import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import Image from 'next/image'

interface ContactEmailProps {
  fullName?: string
  email?: string
  message?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const ContactEmail = ({
  fullName = '',
  email = '',
  message = '',
}: ContactEmailProps) => {
  const previewText = `Message from ${fullName}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/images/logo.png`}
                width="70"
                height="70"
                alt="Respect Environnement Group"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 mt-0 mb-[30px] mx-0">
              Respect Environnement Group
            </Heading>
            <Text className="text-black text-[12px] leading-[24px]">
              <strong>From:</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Name:</strong> {fullName}
              <br />
              <strong>Email:</strong>{' '}
              <Link
                className="text-blue-500 hover:underline"
                href={`mailto:${email}`}
              >
                {email}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[12px] leading-[24px]">
              <strong>Message:</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {message}
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              © 2023 Respect Environnement Group, Inc. All rights reserved.{' '}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactEmail
