/* eslint-disable @next/next/no-img-element */
export function HeaderDemo2() {
  return (
    <header className="min-w-[900px] border-b font-[sans-serif]">
      <section className="py-2 bg-[#1d294f] text-white text-center px-10">
        <p className="text-sm">Announcement: Next event in 2 days</p>
      </section>
      <div className="flex flex-wrap items-center px-10 py-4 relative bg-white min-h-[60px]">
        <a href="javascript:void(0)" className="hidden max-lg:block">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>
        <div className="flex ml-auto lg:order-1 lg:hidden">
          <button id="toggle" className="ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="collapseMenu"
          className="lg:!flex lg:items-center w-full max-lg:hidden max-lg:py-4"
        >
          <ul className="lg:flex lg:space-x-8 max-lg:space-y-2">
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-green-500 block text-[15px]"
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="text-[15px] max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                Blog
              </a>
            </li>
          </ul>
          <a
            href="javascript:void(0)"
            className="absolute m-auto lg:left-2/4 lg:-translate-x-1/2 max-lg:hidden"
          >
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>
          <ul className="ml-auto lg:flex lg:space-x-8 max-lg:space-y-2">
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                Source
              </a>
            </li>
            <li className="text-[15px] max-lg:border-b max-lg:py-2">
              <a
                href="javascript:void(0)"
                className="hover:text-green-500 font-semibold text-[#333] block text-[15px]"
              >
                Partner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
