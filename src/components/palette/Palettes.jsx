import React from 'react'
import { useState } from 'react'
import { Palette } from './Palette'

import "./palettes.css"

//const [palettes, setPalettes] = useState([])

export const Palettes = ({palettes}) => {
    return (
        <div className='grid'>
            {
                palettes.map(palette =>
                    <Palette
                        key={palette.id}
                        palette={palette}
                    />
                )
            }
        </div>
    )
}
