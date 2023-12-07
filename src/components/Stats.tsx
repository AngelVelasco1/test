import { Card, CardBody, CardFooter } from '@nextui-org/react'

export const Stats: React.FC = () => {
  const list = [
    {
      title: 'Libreria',
      value: '124'
    },
    {
      title: 'Me gusta',
      value: '155 k'
    },
    {
      title: 'Lectores',
      value: '8 k'
    },
    {
      title: 'Opiniones',
      value: '163 k'
    }
  ]
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-3 lg:grid-cols-[2.2fr_1fr] ">
        {/* Boxes with stats */}
        <div className="flex flex-row mt-5 p-0 m-0">
          {list.map((item, index) => (
            <Card
              className="w-32 h-32 flex flex-col items-center  m-auto border-gray-300 border-2"
              shadow="lg"
              key={index}
              isPressable
            >
              <CardFooter className="text-small ">
                <p className=" ">{item.title}</p>
              </CardFooter>
              <CardBody className="overflow-visible">
                <h2 className="text-xl font-bold ">{item.value}</h2>
              </CardBody>
            </Card>
          ))}
        </div>
        {/* Rigth Notifications */}
        <div className="row-span-3">
          <div className="flex flex-col-2 justify-between mx-14 mt-5 lg:justify-between lg:my-8 lg:mx-3">
            <h2 className="text-gray-800 text-xl ">Reciente</h2>
            <a href="">Ver todo</a>
          </div>
          <div className="flex flex-col-2 justify-evenly my-8">
            <p className="text-black  w-3/4">Victoria te ha seguido</p>
            <span className="text-gray-500">May 7</span>
          </div>
          <div className="flex flex-col-2 justify-evenly my-8">
            <p className="text-black  w-3/4">Victoria te ha seguido</p>
            <span className="text-gray-500">May 7</span>
          </div>
          <div className="flex flex-col-2 justify-evenly my-8">
            <p className="text-black  w-3/4">
              Victoria te ha comentado en la publicacion
            </p>
            <span className="text-gray-500">May 7</span>
          </div>
          <div className="flex flex-col-2 justify-evenly my-8">
            <p className="text-black  w-3/4">Victoria te ha seguido</p>
            <span className="text-gray-500">May 7</span>
          </div>
          <div className="flex flex-col-2 justify-evenly my-8">
            <p className="text-black  w-3/4">Victoria te ha seguido</p>
            <span className="text-gray-500">May 7</span>
          </div>
        </div>
        {/* Profiles cards */}
        <div className="row-span-2 ">
          <h2 className="text-black text-2xl ms-6">Autores</h2>
          <article className="flex justify-around  border-2 border-b-zinc-300  bg-white w-5/6 gap-x-44">
            <div className="flex items-start gap-4  sm:p-6 lg:p-8">
              <a href="#" className="block shrink-0">
                <img
                  alt="Speaker"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="h-14 w-14 rounded-lg object-cover"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    Axel Thomsom
                  </a>
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">Diseñador</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400">Lectores</p>
              <span className="text-black text-xl">143K</span>
            </div>
          </article>
          <article className="flex justify-around border-2 border-b-zinc-300  bg-white w-5/6 gap-x-44">
            <div className="flex items-start gap-4  sm:p-6 lg:p-8">
              <a href="#" className="block shrink-0">
                <img
                  alt="Speaker"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="h-14 w-14 rounded-lg object-cover"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    Axel Thomsom
                  </a>
                </h3>

                <p className="line-clamp-2 text-sm text-gray-700">Diseñador</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400">Lectores</p>
              <span className="text-black text-xl">143K</span>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
