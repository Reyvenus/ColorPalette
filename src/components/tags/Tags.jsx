import { Tag } from "./Tag"
import "./tags.css"

export const Tags = ({ tags }) => {
    return (
        <div className="tag-container">
            <h2>Tags</h2>
            {
                tags.map(tag =>
                    <Tag
                        key={tag.id}
                        tag={tag}
                    />
                )
            }
        </div>
    )
}
