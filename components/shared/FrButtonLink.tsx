'use client'

import { motion } from 'framer-motion'

export function FrButtonLink() {
  return (
    <button className="cursor-pointer border-[none] hover:scale-x-100 hover:origin-bottom-left ">
      <span
        className={`tracking-[4px] text-sm uppercase pr-[15px] relative text-[black] pb-5 after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[0.25s] after:ease-[ease-out] after:scale-x-0 after:left-0 after:bottom-0; hover-underline-animation hover:scale-x-100 hover:origin-bottom-left bg-[reg]`}
      >
        {' '}
        Shop now{' '}
      </span>
      <svg
        id="arrow-horizontal"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="10"
        viewBox="0 0 46 16"
        className="active:scale-90 hover:translate-x-0"
      >
        <path
          id="Path_10"
          data-name="Path 10"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(30)"
        ></path>
      </svg>
    </button>
  )
}
