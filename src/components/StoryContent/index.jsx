// components/StoryPage/StoryContent.jsx
import StoryDetail from "./StoryDetail"
import CommentList from "./Comment/CommentList"
import mockComments from "./Comment/mockComments"
import "./StoryContent.css"

export default function StoryContent({ story }) {
  return (
    <div className="story-content">
      <StoryDetail story={story} />
      <CommentList comments={mockComments} />
    </div>
  )
}
