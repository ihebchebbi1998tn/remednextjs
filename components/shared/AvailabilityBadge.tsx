import { Badge } from '@/components/ui/badge'

interface AvailabilityBadgeProps {
  className?: string
  available?: boolean
  onClick?: () => void
}

export function AvailabilityBadge({
  className,
  available = false,
  onClick,
}: AvailabilityBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={`max-w-full p-0 mr-1 transition-colors duration-150 bg-transparent md:mr-1 border-accent-foreground text-primary backdrop-blur-md hover:bg-green-500/50 border-0 ${
        available ? '' : ''
      }`}
      onClick={onClick}
    >
      <div
        className={`flex aspect-square h-[14px] w-[14px] rounded-full ${
          available
            ? 'animate-pulse bg-green-500/50 dark:bg-green-400/50 '
            : 'cursor-pointer'
        } sm:m-0`}
        aria-hidden="true"
      >
        <div
          className={` m-auto  rounded-full ${
            available
              ? 'w-2 h-2 dark:bg-green-400 bg-green-500'
              : 'w-1.5 h-1.5 bg-black dark:bg-white '
          }`}
        />
      </div>
    </Badge>
  )
}
