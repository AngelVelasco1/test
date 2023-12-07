import { Autors } from '../components/Autors'

export const AutorsView: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl text-gray-700 mt-8 font-extrabold">
        Rick and Morty Characters
      </h1>
      <a
        className="inline-block ms-10 rounded-full border-3 border-[#7DA870] bg-[#7DA870]  p-3 text-white hover:bg-transparent hover:text-[#7DA870] focus:outline-none focus:ring active:text-[#7DA870]"
        href="/"
      >
        <span className="sr-only"> Go back </span>

        <svg
          className="h-5 w-5 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  w-screen p-12 gap-10">
        <Autors />
      </div>
    </>
  )
}
