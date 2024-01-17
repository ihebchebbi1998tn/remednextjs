import {
  Facebook,
  Home,
  Instagram,
  LifeBuoyIcon,
  LucideProps,
  Mail,
  MapPin,
  NewspaperIcon,
  PhoneCall,
  PhoneIcon,
  Printer,
  Recycle,
  Twitter,
  Youtube,
} from 'lucide-react'

export const Icons = {
  twitter: (props: LucideProps) => <Twitter {...props} />,
  instagram: (props: LucideProps) => <Instagram {...props} />,
  youtube: (props: LucideProps) => <Youtube {...props} />,
  facebook: (props: LucideProps) => <Facebook {...props} />,
  home: (props: LucideProps) => <Home {...props} />,
  mapPin: (props: LucideProps) => <MapPin {...props} />,
  mail: (props: LucideProps) => <Mail {...props} />,
  phoneCall: (props: LucideProps) => <PhoneCall {...props} />,
  printer: (props: LucideProps) => <Printer {...props} />,
  lifeBuoy: (props: LucideProps) => <LifeBuoyIcon {...props} />,
  newspaper: (props: LucideProps) => <NewspaperIcon {...props} />,
  phone: (props: LucideProps) => <PhoneIcon {...props} />,
  recycle: (props: LucideProps) => <Recycle {...props} />,
  spinner: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  pelletteuse: (props: LucideProps) => (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <circle cx="4" cy="17" r="2" />
      <circle cx="13" cy="17" r="2" />
      <line x1="13" x2="4" y1="19" y2="19" />
      <line x1="4" x2="13" y1="15" y2="15" />
      <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
      <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
      <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
      <path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
    </svg>
  ),
  ecology: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g data-name="Layer 2" id="Layer_2">
        <g data-name="Layer 1" id="Layer_1-2">
          <path
            d="M14.153,0A8.569,8.569,0,0,0,8.414,2.21,17.464,17.464,0,0,0,6.056.07a.348.348,0,0,0-.418,0C-1.817,5.545-1.895,14.48,5.5,20.017v2.476a.346.346,0,0,0,.692,0V20.017A16.629,16.629,0,0,0,9.158,17.1v2.857a.81.81,0,0,0,.808.808h.588a2.19,2.19,0,0,0,2.18,2.076H15.5a2.189,2.189,0,0,0,2.179-2.076h.6a.809.809,0,0,0,.807-.808V16.869a2.3,2.3,0,0,1,.782-1.732A8.649,8.649,0,0,0,14.153,0ZM6.193,19.131V15.452L8.4,13.246a.346.346,0,1,0-.49-.489L6.193,14.473V9.928L8.4,7.722a.346.346,0,1,0-.49-.489L6.193,8.949V4.315a.346.346,0,1,0-.692,0V8.949L3.785,7.233c-.313-.322-.812.176-.489.489L5.5,9.928v4.545L3.785,12.757c-.313-.322-.812.177-.489.489L5.5,15.452v3.679C-1.07,13.886-.873,5.877,5.847.783,12.568,5.877,12.765,13.886,6.193,19.131ZM14.5,10.107a1.5,1.5,0,1,0-.692,0v2.679a4.1,4.1,0,0,1-2.24-.9,10.291,10.291,0,0,0-.653-5.811A4.146,4.146,0,1,1,14.5,12.786Zm-.346-.648a.808.808,0,0,1,0-1.615A.808.808,0,0,1,14.153,9.459Zm-2.746,3.167a4.794,4.794,0,0,0,2.4.853v2.439H9.986A11.585,11.585,0,0,0,11.407,12.626Zm4.1,9.521H12.734a1.5,1.5,0,0,1-1.495-1.384H17A1.5,1.5,0,0,1,15.5,22.147Zm2.9-5.278v3.086a.116.116,0,0,1-.115.116H9.966a.116.116,0,0,1-.116-.116V18.686h7.037a.346.346,0,1,0,0-.692H9.85c0-.2.011-1.206-.014-1.384h8.578C18.407,16.7,18.4,16.782,18.4,16.869Zm1.016-2.251a3.024,3.024,0,0,0-.854,1.3H14.5V13.479a4.838,4.838,0,1,0-3.9-8.1A13.345,13.345,0,0,0,8.866,2.731C16.965-4.047,27.1,7.316,19.416,14.618Z"
            data-name="green innovation"
            id="green_innovation"
          />
        </g>
      </g>
    </svg>
  ),
}
