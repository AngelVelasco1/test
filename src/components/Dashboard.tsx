import { Maincard } from "./Maincard";
import { Stats } from "./Stats";

import { Aside } from "./Aside";
import { Secondcard } from "./SecondCard";

export const Dashboard: React.FC = () => {
  return (
    <>
      <div className="bg-white rounded-2xl z-0 ">
        <header className="w-100 bg-white   shadow py-4 px-4 ms-5 me-10">
          <div className="header-content flex items-center flex-row">
            <form action="#">
              <div className="hidden md:flex relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                <input
                  id="search"
                  type="text"
                  name="search"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-96 h-10 focus:outline-none bg-white focus:border-indigo-400"
                  placeholder="Buscar por libros, personas o articulos"
                />
              </div>
              <div className="flex md:hidden">
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 border-transparent"
                >
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </a>
              </div>
            </form>
            <div className="flex ml-auto space-x-5">
              <button
                type="button"
                className="relative rounded-full  p-1 text-gray-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="relative rounded-full  p-1 text-gray-500 "
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <a href="" className="flex flex-row items-center">
                <span className="flex flex-col  me-2">
                  <span className="  font-bold  leading-none ">
                    Andres Vargas
                  </span>
                  <span className=" w-20 text-gray-500 text-xs leading-none ">
                    Manager
                  </span>
                </span>
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 bg-gray-200 border rounded-md"
                />
              </a>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-1 xl:grid-cols-[3fr_1.5fr] w-100 h-100  -ml-64 md:ml-0 transition-all duration-150  ease-in ">
          <div className="main-content flex flex-col  p-4 ms-5">
            <Maincard />
            <Stats />
            <Secondcard />
          </div>
            <Aside />
        </main>
      </div>
    </>
  );
};
