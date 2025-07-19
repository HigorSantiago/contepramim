import styles from './CommentList.module.css';
import CommentCard from '../CommentCard';

export default function CommentList({ comments }) {
    return (
        <div className={styles.commentList}>
            <h1 className={styles.commentListTitle}>Comentários</h1>
            {comments.map((comment, index) => (
                <CommentCard key={index} comment={comment} />
            ))}
        </div>
    )
}