import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandle(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
    // use this instead of directly so that the app can get the latest update after the concat was processed
    // using direct concat instead of function will sometimes prevent the app to show the most updated favorites list
  }

  function removeFavoriteHandle(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandle(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandle,
    removeFavorite: removeFavoriteHandle,
    itemIsFavorite: itemIsFavoriteHandle,
  };

  return (
    <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>
  );
}

export default FavoritesContext;
