export const Sidebar: React.FC = () => {
  return (
    <>
      <div className="flex  overflow-hidden bgWhite roundedLg">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-20 overflow-y-auto bg-[#7DA870] border-r">
              <div className="shadow-2xl bg-zinc-300/30 rounded-2xl py-1  flex flex-col items-center hover:bg-zinc-300/60 dark:highlight-white/5 w-1/3 m-auto pb-5">
                  <img src="../src/assets/icon.svg" alt="" className="mt-5 opacity-100 w-1/2" />
                <button className="hidden roundedLg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
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
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex flex-col justify-center align-middle mt-24 bg-[#7DA870]">
                  <ul>
                    <li>
                      <a
                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-base textWhite transition duration-500 ease-in-out transform  roundedLg focus:shadow-outline"
                        href="#"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                        <span className="ml-4 text-white">Inicio</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-base textWhite transition duration-500 ease-in-out transform border-indigo-800 roundedLg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                        href="#"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                        <span className="ml-4 text-white">Libros</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-base textWhite transition duration-500 ease-in-out transform border-indigo-800 roundedLg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                          ></path>
                        </svg>
                        <span className="ml-4 text-white">Editores/Autores</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-flex items-center w-full px-4 py-2 mt-1 text-base textWhite transition duration-500 ease-in-out transform border-indigo-800 roundedLg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <span className="ml-4 text-white">Lectores</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto maxW-7xl sm:px-6 md:px-8">
                <h1 className="textLg text-neutral-600">
                  Here is where you put your stufff
                </h1>
              </div>
              <div className="px-4 mx-auto maxW-7xl sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="roundedLg bg-gray-50 h-96"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
