import React, { useState } from 'react'
import { useContext } from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { FavouriteContext } from '../../context/FavouriteContext'


export const Palette = ({ palette }) => {
   
    const {id, name, colors, liked } = palette

    const {favourites, setFavourites} = useContext(FavouriteContext)
    const [isFavourite, setIsFavourite] = useState(liked)

    const handleFavorite = () => {
        setIsFavourite(!isFavourite)

//busco si esta en favoritos
        const foundIndex = favourites.findIndex(fav => fav.id === id)
//para agregar a favoritos
        if(foundIndex === -1) {
            setFavourites([...favourites, palette])
            return
        }
// para quitar de favoritos
        setFavourites(
            favourites.filter(fav => fav.id !== id)
        )
    }

    return (
        <div className='palette-container'>
            <div className='palette'>
                <h3>{name}</h3>
                {
                    colors.map(color =>
                        <div
                            key={color}
                            className="color"
                            style={{ backgroundColor: color }}
                        >
                            <span>{color}</span>
                        </div>
                    )
                }
            </div>
            <div className='fav'>
                {
                    isFavourite
                        ?
                        (
                            <FaHeart className="fav heart" onClick={handleFavorite} />
                        )
                        :
                        (
                            <FaRegHeart className="fav" onClick={handleFavorite} />
                        )
                }
            </div>
        </div>
    )
}
