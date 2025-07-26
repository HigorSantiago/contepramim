// components/StoryPage/StoryContent.jsx
import StoryDetail from "./StoryDetail"

import styles from "./StoryContent.module.css"

export default function StoryContent({ story }) {
  return (
    <div className={styles.storyContent}>
      <StoryDetail story={story} />
    </div>
  )
}
