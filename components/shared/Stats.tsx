interface Stat {
  name?: React.ReactNode
  value?: string
  unit?: string
}

interface StatProps {
  stats: Stat[]
}

export function Stats({ stats }: StatProps) {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name as string}
              className="px-4 py-6 bg-gray-900 sm:px-6 lg:px-8"
            >
              <p className="text-sm font-medium leading-6 text-gray-400">
                {stat.name}
              </p>
              <p className="flex items-baseline mt-2 gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
