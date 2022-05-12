import { useEffect, useState } from "react";
import PokeItem from "../components/PokeItem";
import getAllPokemons from "../services/getAllPokemons";

const PokemonList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [arrOffsetPosition, setArrOffsetPosition] = useState(0);

  useEffect(() => {
    getAllPokemons(arrOffsetPosition).then((res) => {
      setPokeList(res.data.results);
    });
  }, [arrOffsetPosition]);

  const list = pokeList.map((item) => (
    <PokeItem key={item.url} url={item.url} />
  ));

  return (
    <div>
      {list}
      {arrOffsetPosition === 0 ? (
        <button onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)}>
          Next 20
        </button>
      ) : (
        <>
          <button onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)}>
            Next 20
          </button>
          <button onClick={() => setArrOffsetPosition(arrOffsetPosition - 20)}>
            Prev 20
          </button>
        </>
      )}
    </div>
  );
};

export default PokemonList;