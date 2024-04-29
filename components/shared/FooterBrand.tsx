import Image from 'next/image'

interface FooterBrandProps {
  brand?: string
  logo?: string
  slogan?: string
  className?: string
}

export function FooterBrand({
  brand,
  logo = '',
  slogan = '',
  className = '',
}: FooterBrandProps) {
  return (
    <div className="">
      <p className="flex items-center justify-center mb-4 font-semibold uppercase md:justify-start">
        {logo && (
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="mr-3"
          />
        )}
        {brand}
      </p>
      {slogan && <p>{slogan}</p>}
    </div>
  )
}
