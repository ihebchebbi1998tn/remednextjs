/* eslint-disable @next/next/no-img-element */

export function MasonryDemo() {
  return (
    <div className="flex justify-end gap-8 -ml-28 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 md:ml-0">
      <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
      </div>
      <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
      </div>
      <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
            alt=""
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
          />
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
      </div>
    </div>
  )
}
