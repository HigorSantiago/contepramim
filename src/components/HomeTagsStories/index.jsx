import "./HomeTagsStories.css"

export default function HomeTagsStories() {
    const tags = [
        {id: 1, title: "Emoção", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum id libero quis tempora similique! Iste rerum eum doloribus mollitia nostrum odit aspernatur laboriosam, quam ipsa cupiditate quas maxime quaerat fugiat!", color: "blue"},
        {id: 2, title: "Saudade", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus quis itaque non nam a neque cumque corrupti tempora autem magni, ipsum aspernatur modi adipisci fugiat assumenda. Numquam, veritatis illo.", color: "purple"},
        {id: 3, title: "Tempos de Escola", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus labore animi, incidunt a voluptatum obcaecati pariatur voluptates qui quam possimus quibusdam odit necessitatibus saepe autem blanditiis dolor. Eum, earum temporibus?", color: "green"},
    ]
    return (
        <section className="historys">
            <h1 className="montserrat-semibold">Aqui, cada história encontra seu lugar e sua voz.</h1>
            <ul className="history-list">
                {tags.map(tag => (
                    <li key={tag.id} className="history-item">
                        <img src="/img/icons/heart.svg" alt="" />
                        <div className="history-text">
                            <h2 className={`montserrat-semibold ${tag.color}`}>{tag.title}</h2>
                            <p className="montserrat-medium">{tag.description}</p>
                        </div>
                        <a href="/" className={`ver-mais ${tag.color} montserrat-medium`}>
                            Clique para ver mais
                            
                        </a>
                    </li>
                ))}
                
            </ul>
        </section>
    )
}