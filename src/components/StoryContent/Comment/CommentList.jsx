// components/Comment/CommentList.jsx
import CommentCard from "./CommentCard"
import "./index.css"

export default function CommentList({ comments }) {
    return (
        
        <div className="comment-list">
        <h1 className="comment-list-title montserrat-medium">Comentários</h1>
            {comments.map((comment, index) => (
                <CommentCard key={index} comment={comment} />
            ))}
        </div>
    )
}
