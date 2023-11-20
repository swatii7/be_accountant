import React,{Fragment, useState, useEffect} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
import logo from '../../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {


  let navTabs = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About Us', link: '/aboutus' },
    { id: 3, name: 'Services', link: '/service' },
    { id: 4, name: 'FAQ', link: '/faq' },
    { id: 5, name: 'Contact', link: '/contact' },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Set 'Home' as the default active link
  const [hoveredLinks, setHoveredLinks] = useState({});

  const location = useLocation();

  useEffect(() => {
    // Extract the pathname from the URL and set the active link based on it
    const pathname = location.pathname;
    const activeLink = navTabs.find((link) => link.link === pathname)?.name || '/';
    if(activeLink){
      setActiveLink(activeLink);
    }
  }, [location.pathname]);

  const handleLinkClick = (linkName) => {
    setOpen(false)
    if (activeLink === linkName) {
      setActiveLink(null);
    } else {
      setActiveLink(linkName);
    }
  };

  const handleLinkHover = (linkId, isHovered) => {
    setHoveredLinks((prevHoveredLinks) => ({
      ...prevHoveredLinks,
      [linkId]: isHovered,
    }));
  };

  return (
    <header className='w-full fixed top-0 left-0 lg:z-50 selection:bg-zinc-200 selection:text-black'>
      <div className='lg:flex items-center justify-between bg-white md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center py-4 gap-1'>
          <span>
            <img src={logo} alt="Logo" />
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'
        >
          <Bars3Icon />
        </div>
        <ul
          className={`hidden lg:flex md:items-center md:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in`}
        >
          {navTabs.map((link) => (
            <li key={link.link} className='lg:ml-8 md:my-0 my-7 py-4 font-medium'>
              <Link
                to={link.link}
                className={`duration-500 border-transparent py-[30px] relative  ${
                  activeLink === link.name ? 'text-red-600 after:border-transparent after:border-t-red-600 after:border-[7px] after:top-0 after:left-[50%] after:translate-x-[-50%] after:absolute ' : ''
                }
                ${
                  hoveredLinks[link.id]
                    ? 'hover:text-red-600 after:border-transparent hover:after:border-t-red-600 after:border-[7px] after:top-0 after:left-[50%] after:translate-x-[-50%] after:absolute  '
                    : ''
                }`}
                onClick={() => handleLinkClick(link.name)}
                onMouseEnter={() => handleLinkHover(link.id, true)}
                onMouseLeave={() => handleLinkHover(link.id, false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
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
                    navTabs.map((link,index) => (
                    <li key={index} className='lg:ml-8 lg:my-0 md:my-7 text-base md:text-3xl  font-semibold hover:text-rose-500 pt-[11px] pr-[5px] pb-[10px] pl-[20px]'>
                       {/* <FontAwesomeIcon icon={faCaretDown} className='text-rose-500' /> */}
                        <Link to={link.link} 
                         className={`duration-500 border-transparent py-[30px] relative  ${
                          activeLink === link.name ? 'text-red-600  ' : ''
                        }
                      `}
                        onClick={() => handleLinkClick(link.name)}>{link.name}</Link>
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
