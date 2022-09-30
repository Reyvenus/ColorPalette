import { Favourite } from "./Favourite"

import "./favourites.css"

export const Favourites = ({favourites}) => {
  return (
    <div className="favorite-container">    
        <h2>Mis favoritos</h2>
        {
            favourites.map(favourite => 
                <Favourite 
                    key={favourite.id}
                    favourite={favourite}
                />
                )
        }
    </div>
  )
}
