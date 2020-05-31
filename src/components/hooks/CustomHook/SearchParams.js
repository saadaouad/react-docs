import pet, { ANIMALS } from "@frontendmasters/pet";
import React, { useEffect, useState } from "react";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("Casablanca, MA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [, BreedDropdown, setBreed] = useDropDown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <div className="pv1">
          <label htmlFor="location">
            Location
            <input
              className="mh2"
              id="location"
              data-cy="location"
              value={location}
              placeholder="Location"
              onChange={e => setLocation(e.target.value)}
            />
          </label>
        </div>
        <div className="pv2">
          <AnimalDropdown />
        </div>
        <div className="pv2">
          <BreedDropdown />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
