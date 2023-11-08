import React,{Fragment, useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
import logo from '../../../assets/logo.png'

function Navbar() {


    let Links =[
        {name:"Home",link:"/"},
        {name:"About Us",link:"/about"},
        {name:"Service",link:"/service"},
        {name:"FAQ",link:"/faq"},
        {name:"Contact",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);


  return (
    
        <header className='w-full fixed top-0 left-0 lg:z-50'>
           <div className='lg:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <span>
                    <img src={logo} />
                </span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
               
                     <Bars3Icon />
               
            </div>
            {/* linke items */}
            <ul className={`hidden lg:flex md:items-center md:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in`}>
                {
                    Links.map((link,index) => (
                    <li key={index} className='lg:ml-8 md:my-0 my-7 font-medium'>
                       {/* <FontAwesomeIcon icon={faCaretDown} className='text-rose-500' /> */}
                        <a href={link.link} className='hover:text-rose-500 duration-500 active:text-rose-500'>{link.name}</a>
                    </li>))
                }
            </ul>
         
           </div>
           <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-[60%] md:left-[97%] top-0 ml-8 flex pr-2 pt-4 md:-ml-10 md:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-rose-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <ul>
                {
                    Links.map((link,index) => (
                    <li key={index} className='lg:ml-8 lg:my-0 md:my-7 text-base md:text-3xl  font-semibold hover:text-rose-500'>
                       {/* <FontAwesomeIcon icon={faCaretDown} className='text-rose-500' /> */}
                        <a href={link.link} className='hover:text-rose-500 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
        
    </header>
  )
}

export default Navbar
