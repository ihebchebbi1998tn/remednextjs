import Image from 'next/image'

interface FooterBrandProps {
  brand?: string
  logo?: string
  slogan?: string
  className?: string
}

export function FooterBrand({
  brand = 'Respect Environment Group',
  logo = '',
  slogan = 'Making the world a better place through constructing elegant hierarchies.',
  className = '',
}: FooterBrandProps) {
  return (
    <div className="">
      <h6 className="flex items-center justify-center mb-4 font-semibold uppercase md:justify-start">
        {logo && <Image src={logo} alt="logo" width={50} height={50} className='mr-3' />}
        {brand}
      </h6>
      {slogan && <p>{slogan}</p>}
    </div>
  )
}
