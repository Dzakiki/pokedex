import { useState, useEffect } from "react";
import { fetchPokemon } from "../utils/fetchUtils";

interface PokemonData {
  // Define the structure of your Pokemon data here
}

const usePokemon = (initialUrl: string) => {
  const [data, setData] = useState<PokemonData | null>(null); // Adjust PokemonData as per your fetchPokemon response type
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | Error | null>(null); // Adjust to include possible error types returned by fetchPokemon

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(initialUrl);
        setData(pokemonData);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [initialUrl]);

  return { data, isLoading, error };
};

export default usePokemon;
