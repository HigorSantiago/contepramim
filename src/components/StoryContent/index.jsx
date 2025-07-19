// components/StoryPage/StoryContent.jsx
import StoryDetail from "./StoryDetail"
import CommentList from "./Comment/CommentList"
import mockComments from "./Comment/mockComments"
import styles from "./StoryContent.module.css"

export default function StoryContent({ story }) {
  return (
    <div className={styles.storyContent}>
      <StoryDetail story={story} />
      <CommentList comments={mockComments} />
    </div>
  )
}
