import "./StoryDetail.css"

export default function StoryDetail({ story }) {
    return (
        <div className="story-detail">
            <h1 className="story-detail-title montserrat-semibold blue">{story.title}</h1>

            <div className="story-detail-tags montserrat-semibold">
                {story.tags.map(tag => (
                    <span key={tag.id} className={`tag-${tag.color} tags-structure`}>
                        {tag.title}
                    </span>
                ))}
            </div>

            <p className="story-detail-content nunito-regular">{story.content}</p>

            
            {/* <p className="story-detail-author montserrat-medium">De pessoa anônima</p> */}
        </div>
    )
}
