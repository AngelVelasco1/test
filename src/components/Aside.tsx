export const Aside: React.FC = () => {
  return (
    <aside className=" ">
      <div className="flex flex-row justify-around items-center">
        <h3 className="text-black text-xl">Lo ultimo</h3>
        <a href="">Ver todo</a>
      </div>
    <a
        href="#"
        className="flex flex-col  rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56  w-fit rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dd className="font-bold text-lg">La ciudadela</dd>
              <p className="font-normal text-gray-500">
                Descrube la emocion de la ciudad
              </p>
            </div>
          </dl>

          <div className="flex flex-row gap-5 mt-5 ">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="h-14 w-14 rounded-lg object-cover"
            />
            <div>
              <h4 className="text-gray-700 font-bold">David Jones</h4>
              <p className="text-gray-500 font-normal text-sm">May 6, 2020</p>
            </div>
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-col  rounded-lg p-4 shadow-sm shadow-indigo-100"
      >
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56  w-fit rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dd className="font-bold text-lg">La ciudadela</dd>
              <p className="font-normal text-gray-500">
                Descrube la emocion de la ciudad
              </p>
            </div>
          </dl>

          <div className="flex flex-row gap-5 mt-5 ">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="h-14 w-14 rounded-lg object-cover"
            />
            <div>
              <h4 className="text-gray-700 font-bold">David Jones</h4>
              <p className="text-gray-500 font-normal text-sm">May 6, 2020</p>
            </div>
          </div>
        </div>
      </a>
    </aside>
  );
};
