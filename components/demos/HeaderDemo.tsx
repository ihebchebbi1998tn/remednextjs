/* eslint-disable @next/next/no-img-element */
import { LifeBuoyIcon, NewspaperIcon, PhoneIcon } from "lucide-react"


const cards = [
  {
    name: 'Sales',
    description:
      'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description:
      'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifeBuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description:
      'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]

export function HeaderDemo() {
  return (
    <div className="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center filter brightness-50"
      >
        <source src="/videos/omp.mp4" type="video/mp4" />
      </video>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Respect Environment Group
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex p-6 bg-green-500 gap-x-4 rounded-xl ring-1 ring-inset ring-white/10 bg-opacity-80 backdrop-blur-2px"
            >
              <card.icon
                className="flex-none w-5 text-yellow-400 h-7"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
