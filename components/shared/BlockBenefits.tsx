import Image from 'next/image'
import React from 'react'

interface BlockBenefitsProps {
  title?: string
  desc?: string
  secondaryNode?: React.ReactNode
  imgPos?: 'left' | 'right'
  children?: React.ReactNode
}

export const BlockBenefits = (props: BlockBenefitsProps) => {
  const { title, desc, imgPos, children, secondaryNode } = props
  return (
    <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      {secondaryNode && (
        <div
          className={`flex items-start mt-7 w-full lg:w-1/2 ${
            props.imgPos === 'right' ? 'justify-end' : 'justify-start'
          } ${props.imgPos === 'right' ? 'lg:order-1' : ''}`}
        >
          <div>{secondaryNode}</div>
        </div>
      )}

      <div
        className={`flex flex-wrap items-start w-full lg:w-1/2 ${
          imgPos === 'right' ? 'lg:justify-end' : ''
        }`}
      >
        <>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-gray-300">
              {title}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-600 lg:text-xl xl:text-xl dark:text-gray-600">
              {desc}
            </p>
          </div>

          {children}
        </>
      </div>
    </div>
  )
}

export default BlockBenefits
