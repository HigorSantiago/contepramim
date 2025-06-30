import { useLocation } from "react-router-dom"
import StoryContent from "../components/StoryContent"

export default function StoryPage() {
  const location = useLocation()
  const story = location.state?.story

  if (!story) return <p>Story não encontrado. Tente voltar e clicar novamente.</p>

  return <StoryContent story={story} />
}
