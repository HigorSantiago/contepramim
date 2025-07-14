import { Link } from "react-router-dom"
import "./StoryCard.css"

export default function StoryCard({ story }) {
  return (
    <Link to={`/story/${story.id}`}>
      <div className="card">
        <h2 className="montserrat-semibold">{story.title}</h2>

        <p className="nunito-regular">
          {story.content.length > 150
            ? story.content.slice(0, 150) + "..."
            : story.content}
        </p>

        <div className="tags montserrat-semibold">
          {story.tags &&
            story.tags.map((tag, index) => (
              <span
                key={index}
                className="tags-structure"
                style={{
                  backgroundColor: tag.colorBackground,
                  color: tag.colorText
                }}
                title={tag.description}
              >
                {tag.title}
              </span>
            ))}
        </div>

        <p className="montserrat-medium autor">De pessoa anônima</p>
      </div>
    </Link>
  )
}
