import styles from "./CommentCard.module.css"
import heartIcon from "../../../../assets/img/heart-outline.svg"

export default function CommentCard({ comment }) {
    const initial = comment.author?.[0]?.toUpperCase() || "?"

    return (
        <div className={styles.commentCard}>
            <div className={styles.commentAvatar}>{initial}</div>

            <div className={styles.commentBody}>
                <div className={styles.commentHeader}>
                    <div>
                        <p className={styles.commentAuthor}>{comment.author}</p>
                        <p className={styles.commentTime}>{comment.time}</p>
                    </div>
                    <img
                        src={heartIcon}
                        alt="Curtir"
                        className="comment-icon"
                    />
                </div>

                <p className={styles.commentText}>{comment.text}</p>
            </div>
        </div>
    )
}