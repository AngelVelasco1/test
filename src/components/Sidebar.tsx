import { useState } from 'react'
export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true)
  const [showMenu, setMenu] = useState<boolean>(false)
  const toggleMenu = (): void => {
    setMenu(!showMenu)
  }
  const Menus = [
    { title: 'Inicio', icon: 'home' },
    { title: 'Libros', icon: 'book' },
    { title: 'Autores', icon: 'person', href: 'autors' },
    { title: 'Lectores ', icon: 'group' }
  ]

  return (
    <>
      {/* PC and Tablet Sidebar */}
      <div className="hidden lg:flex lg:text-center h-100   lg:flex-col  bg-[#7DA870] ">
        <div
          className={` ${
            open ? 'w-64' : 'w-20'
          }   p-5 lg:block  pt-8 relative duration-300 flex   gap-y-10 `}
        >
          <span
            className={`material-symbols-outlined absolute cursor-pointer -right-2 top-9 w-8 
           border-2 rounded-lg text-md font-bold ${!open && 'rotate-180'}`}
            onClick={() => { setOpen(!open) }}
          >
            chevron_left
          </span>

          <div className=" shadow-2xl bg-zinc-300/30 rounded-2xl  ms-20  flex flex-col items-center hover:bg-zinc-300/60 dark:highlight-white/5 w-1/3 mt-10  pb-5">
            <img
              src="../src/assets/icon.svg"
              alt=""
              className="mt-5 opacity-100 w-1/2"
            />
            <button className="hidden roundedLg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="pt-20 flex flex-col items-center">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-5 mt-3
              `}
              >
                <span className="material-symbols-outlined">{Menu.icon}</span>
                <a
                  href={Menu.href}
                  className={`${
                    !open && 'hidden'
                  } text-white  origin-left duration-200 hover:text-green-900 `}
                >
                  {Menu.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={`${!open && 'hidden'} items-end mt-20`}>
            <button className="w-32 flex m-auto justify-around shadow-2xl bg-zinc-300/30 rounded-2xl">
              Crear
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className=" lg:hidden top-0 ">
        {/* Icono del menú hamburguesa */}
        <button
          onClick={toggleMenu}
          className="block text-white-800 bg-[#7DA870] focus:outline-none mt-4 ms-8"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {showMenu && (
          <div className="flex flex-col  items-center  w-screen shadow-md ">
            {Menus.map((Menu, index) => (
              <a
                href={Menu.href}
                key={index}
                className={'p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center gap-x-4 mt-2'}
              >
                <div className="flex flex-row gap-3 text-[#7DA870]">
                  <span className="material-symbols-outlined">{Menu.icon}</span>
                  <span className="text-lg">{Menu.title}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
