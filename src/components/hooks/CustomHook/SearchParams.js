import pet, { ANIMALS } from "@frontendmasters/pet";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("Casablanca, MA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [, BreedDropdown, setBreed] = useDropDown("Breed", "", breeds);
  const [theme, setTheme] = useContext(ThemeContext);

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
        <div className="pv2">
          <label htmlFor="theme">
            Theme
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              onBlur={e => setTheme(e.target.value)}
              className="mh2"
            >
              <option value="peru">Peru</option>
              <option value="yellow">Yellow</option>
              <option value="mediumorchid">Medium Orchid</option>
              <option value="chartreuse">Chartreuse</option>
            </select>
          </label>
        </div>
        <button id="submit" style={{ backgroundColor: theme }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchParams;
