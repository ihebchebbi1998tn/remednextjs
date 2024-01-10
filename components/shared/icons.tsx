import {
  Facebook,
  Home,
  Instagram,
  LifeBuoyIcon,
  LucideProps,
  Mail,
  NewspaperIcon,
  PhoneCall,
  PhoneIcon,
  Printer,
  Twitter,
  Youtube,
} from 'lucide-react'


export const Icons = {
  twitter: (props: LucideProps) => <Twitter {...props} />,
  instagram: (props: LucideProps) => <Instagram {...props} />,
  youtube: (props: LucideProps) => <Youtube {...props} />,
  facebook: (props: LucideProps) => <Facebook {...props} />,
  home: (props: LucideProps) => <Home {...props} />,
  mail: (props: LucideProps) => <Mail {...props} />,
  phoneCall: (props: LucideProps) => <PhoneCall {...props} />,
  printer: (props: LucideProps) => <Printer {...props} />,
  lifeBuoy: (props: LucideProps) => <LifeBuoyIcon {...props} />,
  newspaper: (props: LucideProps) => <NewspaperIcon {...props} />,
  phone: (props: LucideProps) => <PhoneIcon {...props} />,
  spinner: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}
