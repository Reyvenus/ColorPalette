import "./tag.css"

export const Tag = ({tag}) => {
  return (
    <span className="tag">{tag.value}</span>
  )
}
