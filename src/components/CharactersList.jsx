import { useState, useEffect } from "react";
import Characters from "./Characters";

export default function CharacterList(){

  let [characters, setCharacter] = useState([]);  
  let API_URL = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    (async function () {
      let data = await fetch(API_URL).then((res) => res.json());
      setCharacter(data.results);
    })();    
  }, [API_URL]); 

  return(
    <section className="relative text-white m-auto max-w-[1600px] pl-[5vw] pr-[5vw] pt-0 pb-0 saturate-25">
      <h2 className="text-white text-medium">Personajes</h2>
      <ul className="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10">
        {
          characters.map(character => {
            return (
              <Characters key={character.id} character={character} />
            )
          })
        }
      </ul>
    </section>
  )
  
}