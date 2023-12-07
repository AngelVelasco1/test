export const Secondcard: React.FC = () => {
  return (
<section className="bg-[#343A3F]  py-8 px-4 rounded-2xl">
  <div className="flex justify-center items-center gap-12 lg:gap-24 lg:flex-row flex-col">
    <div className="flex flex-col">
      <p className="mt-3 text-lg font-medium leading-6">
        <a href="./blog-post.html" className="text-xl text-white hover:text-gray-500">
          B2B Branding: 5 tips to go from boring to extraordinary
        </a>
      </p>
      <p className="mt-2 text leading-normal text-white ">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
          </p>
          <a
  className="w-2/5 group relative inline-flex items-center overflow-hidden rounded-xl mt-3 bg-[#343A3F] px-8 py-3 text-white focus:outline-none focus:ring"
  href="/download"
>
  <span className="absolute -end-full transition-all group-hover:end-4">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

  </span>

  <span className="text-sm text-white font-medium transition-all group-hover:me-4">Crear Borrador </span>
</a>
    </div>
    <div className="w-80">
      <img
        className="w-32 h-32 object-cover rounded-md" 
        src="./src/assets/main.svg"
        alt="text"
      />
    </div>
  </div>
</section>
  )
}
