import { useEffect, useState } from "react";

// Custom hook to fetch links from PokeApi, then resolves to an array with random Ids

function useFetchLinks(numOfIds) {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //helper function to randomize IDs. Should only be called once
  const randomIds = (numOfIds) =>
    Array.from({ length: numOfIds }, () => Math.floor(Math.random() * 25) + 1);
  const hasDuplicates = (arr) => {
    return new Set(arr).size !== arr.length;
  };

  //helper function that attaches the id to correct api call

  const randomLinks = () => {
    const ids = randomIds(numOfIds);
    if (hasDuplicates(ids)) {
      console.log("Duplicates found, generating new IDs");
      return randomLinks();
    }
    return ids.map((id) => `https://pokeapi.co/api/v2/pokemon/${id}`);
  };

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const links = randomLinks();

        const responses = await Promise.all(
          links.map(async (link) => {
            const response = await fetch(link);
            const data = await response.json();

            return data.sprites.other.home.front_default;
          })
        );

        setLinks(responses);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);
  return { links, loading, error };
}

export default useFetchLinks;

//Objective: Create randomized links to fetch images from PokeApi
//1. Random Ids
//2. Attach the Ids to the correct api call
//3. Fetch the images
