export const fetchPokemon = async (url: string | URL | Request) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    throw error;
  }
};