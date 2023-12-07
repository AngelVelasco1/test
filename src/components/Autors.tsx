import { useState, useEffect } from "react";

interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}

export const Autors: any = () => {
  const API = "https://rickandmortyapi.com/api/character/";
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setCharacters(data.results.slice(0, 3));
    };
    fetchData().catch((err) => {
      console.error(err);
    });
  }, []);
  return characters.map((character) => (
    <a key={character.id} className="group relative block h-64 sm:h-80 lg:h-96 w-full cursor-pointer">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="m-auto !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
         
           <img src={character.image} alt="" className="rounded-2xl" />
        </div>

        <div className="absolute   opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">
            {character.name}
          </h2>
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">
            {character.species}
          </h3>
        </div>
        
      </div>
    </a>
  ));
};
