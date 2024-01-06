const getFullYear = new Date().getFullYear()

interface CopyrightProps {
  className?: string
  brand?: string
}

export function Copyright({
  brand,
  className = '',
}: CopyrightProps) {
  return (
    <div
      className={`p-6 text-center bg-green-200 dark:bg-green-700 ${className}`}
    >
      <p className="text-sm text-green-600 dark:text-green-200">
        {`© ${getFullYear} ${brand}. All rights reserved.`}
      </p>
      <a
        className="font-semibold text-green-600 dark:text-green-400 hover:text-green-500"
        href="/"
      >
        {brand}
      </a>
    </div>
  )
}
