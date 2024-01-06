import { SocialProfile } from '@/types'

import { SocialNetwork } from './SocialNetwork'

interface SocialNetworksListProps {
  title?: string
  socialNetworks?: SocialProfile[]
  className?: string
}

export function SocialNetworksList({
  title = 'Get connected with us on social networks:',
  socialNetworks = [],
  className = '',
}: SocialNetworksListProps) {
  return (
    <div
      className={`flex items-center justify-center p-6 border-b-2 border-green-200 dark:border-green-500 lg:justify-between ${className}`}
    >
      <div className="hidden mr-12 lg:block">
        <span>{title}</span>
      </div>
      {/** Social network icons container */}
      <div className="flex justify-center">
        {socialNetworks?.map((item) => {
          return (
            <SocialNetwork key={item.name} name={item.name} link={item.link} />
          )
        })}
      </div>
    </div>
  )
}
