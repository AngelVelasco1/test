export const Secondcard: React.FC = () => {
  return (
    <section className="bg-[#343A3F]  py-8 px-4 m-auto rounded-2xl">
      <div className="flex justify-center items-center gap-12 lg:gap-24 lg:flex-row flex-col">
        <div className="flex flex-col">
          <p className="mt-3 text-lg font-medium leading-6">
            <a
              href="./blog-post.html"
              className="text-xl text-white hover:text-gray-500"
            >
              Andres nos gustaria Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id nisi inventore ad porro molestias
            </a>
          </p>

          <ol type="1">
            <li>1. Tip 1</li>
            <li>2. Tip 2</li>
            <li>3. Tip 3</li>
          </ol>
        </div>
        <div className="w-80">
          <img
            className="w-56 m-auto lg:w-40 lg:h-32 object-fit rounded-md"
            src="./src/assets/main.svg"
            alt="text"
          />
        </div>
      </div>
    </section>
  )
}
