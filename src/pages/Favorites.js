import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content; 

  if (favoritesContext. totalFavorites === 0) {
      content = <p>You currently don't have any favorites. Add some from the all meetups page!</p>;
  } else {
      content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
