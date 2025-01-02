import React from 'react'

export default function Footer() {
  return (
    <div
      className='relative h-[800px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
        <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
          <div className='bg-emerald-700 py-8 px-12 h-full w-full flex flex-col justify-between'>
            <div className='flex shrink-0 gap-20'>
              <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Contacts</h3>
                <p>Linkedin</p>
                <p>Github</p>
                <p>E-mail</p>
              </div>
            </div>

            <div className='flex justify-between items-end'>
              <h1 className='text-[14vw] leading-[0.8] mt-10'>Contact Me</h1>
              <p>andre.knopp8@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
