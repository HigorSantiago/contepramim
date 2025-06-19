import { useParams } from "react-router-dom"

export default function StoryPage() {
    const { id } = useParams()
    return (
        <h1>Story Page {id}</h1>
    )
}