import "./StoryCard.css"

export default function StoryCard({ story }) {
    return (
        <div className="card">
            <h2 className="montserrat-semibold">{ story.title }</h2>
            <p className="nunito-regular">{ story.content }</p>
            <div className="tags montserrat-semibold">
                {story.tags.map(tag => (
                    <a key={tag.id} className={`tag-${tag.color} tags-structure`}>{tag.title}</a>    
                ))}
            </div>
            <p className="montserrat-medium autor">De pessoa anônima</p>
        </div>
    )
}