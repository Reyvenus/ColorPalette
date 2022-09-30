import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import { Favourites } from './components/favourite/Favourites'
import { Palettes } from './components/palette/Palettes'
import { Tags } from './components/tags/Tags'
import { FavouriteContext } from './context/FavouriteContext'
import { getColorPalettes, getTags } from "./services"

function App() {

  const [colorPalettes, setColorPalettes] = useState([])
  const [tags, setTags] = useState([])
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    getColorPalettes()
      .then(data => {
        setColorPalettes(data)
        setFavourites(data => {
          return data.filter(palette => palette.liked === true)
        })
      })
      .catch(error => {
        console.log(error)
      })

    getTags()
      .then(resp => setTags(resp))
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <FavouriteContext.Provider value={{favourites, setFavourites}}>

      <div className='App'>
        <header>
          <h1>Color Palette Project</h1>
        </header>
        <div className='main-container'>
          <Tags tags={tags} />
          <Palettes palettes={colorPalettes} />
          <Favourites favourites={favourites} />
        </div>
      </div>
    </FavouriteContext.Provider>
  )
}

export default App
