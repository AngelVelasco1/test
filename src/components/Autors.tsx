import { useState, useEffect } from 'react'
interface Character {
  id: number
  name: string
  species: string
  image: string
}

const getCharacters = async (): Promise<Character[]> => {
  const API = 'https://rickandmortyapi.com/api/character/'

  try {
    const response = await fetch(API)
    const data = await response.json()
    return data.results.slice(0, 3) as Character[]
  } catch (err) {
    console.error(err)
    return []
  }
}

export const Autors: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const fetchedCharacters = await getCharacters()
      setCharacters(fetchedCharacters)
    }
    fetchData()
  }, [])

  return characters.map((character) => (
    <a key={character.id} className="group relative block h-64 sm:h-80 lg:h-96 w-full cursor-pointer ">
      <span className="absolute inset-0 border-2 border-dashed rounded-md border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black rounded-md bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="m-auto !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
           <img src={character.image} alt="" className="rounded-2xl w-72" />
        </div>

        <div className="absolute   opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h2 className="mt-4 text-2xl font-medium  text-[#E9A763]">
            {character.name}
          </h2>
          <h3 className=" text-lg font-medium  text-[#343A3F] ">
            {character.species}
          </h3>
        </div>

      </div>
    </a>
  ))
}
