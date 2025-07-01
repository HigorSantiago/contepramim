// components/Comment/CommentCard.jsx
import "./index.css"
import heartIcon from "../../../assets/img/heart-outline.svg"

export default function CommentCard({ comment }) {
    const initial = comment.author?.[0]?.toUpperCase() || "?"

    return (
        <div className="comment-card">
            <div className="comment-avatar rethink-sans">{initial}</div>

            <div className="comment-body">
                <div className="comment-header">
                    <div>
                        <p className="comment-author montserrat-medium">{comment.author}</p>
                        <p className="comment-time montserrat-medium">{comment.time}</p>
                    </div>
                    <img
                        src={heartIcon}
                        alt="Curtir"
                        className="comment-icon"
                    />
                </div>

                <p className="comment-text rethink-sans">{comment.text}</p>
            </div>
        </div>
    )
}
