import { LinkType } from '@/types'

import { SocialNetwork } from './SocialNetwork'

interface SocialNetworksListProps {
  title?: string
  socialNetworks?: LinkType[]
  className?: string
}

export function SocialNetworksList({
  title,
  socialNetworks = [],
  className = '',
}: SocialNetworksListProps) {
  return (
    <div
      className={`flex items-center justify-center p-6 lg:justify-between ${className} `}
    >
      {title && (
        <div className="hidden mr-12 lg:block">
          <span>{title}</span>
        </div>
      )}
      {/** Social network icons container */}
      <div className="flex justify-center gap-x-2">
        {socialNetworks?.map((item) => {
          return (
            <SocialNetwork key={item.name} name={item.name} link={item.link} />
          )
        })}
      </div>
    </div>
  )
}
