import "./favourite.css"

export const Favourite = ({ favourite }) => {

    const { name, colors } = favourite

    return (
        <div className="fav-item">
            <span className="item-name">{name}</span>
            {
                colors.map(color => <div key={color} className="item-color" style={{ backgroundColor: color }}></div>)
            }
        </div>
    )
}
