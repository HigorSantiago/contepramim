import "./HomeTagsStories.css"

export default function HomeTagsStories() {
    const tags = [
        {id: 1, title: "Emoção", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum id libero quis tempora similique! Iste rerum eum doloribus mollitia nostrum odit aspernatur laboriosam, quam ipsa cupiditate quas maxime quaerat fugiat!", color: "blue"},
        {id: 2, title: "Saudade", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus quis itaque non nam a neque cumque corrupti tempora autem magni, ipsum aspernatur modi adipisci fugiat assumenda. Numquam, veritatis illo.", color: "purple"},
        {id: 3, title: "Tempos de Escola", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus labore animi, incidunt a voluptatum obcaecati pariatur voluptates qui quam possimus quibusdam odit necessitatibus saepe autem blanditiis dolor. Eum, earum temporibus?", color: "green"},
    ]
    return (
        <section class="historys">
            <h1 class="montserrat-semibold">Aqui, cada história encontra seu lugar e sua voz.</h1>
            <ul class="history-list">
                {tags.map(tag => (
                    <li key={tag.id} class="history-item">
                        <img src="/img/icons/heart.svg" alt="" />
                        <div class="history-text">
                            <h2 class={`montserrat-semibold ${tag.color}`}>{tag.title}</h2>
                            <p class="montserrat-medium">{tag.description}</p>
                        </div>
                        <a href="" class={`ver-mais ${tag.color} montserrat-medium`}>
                            Clique para ver mais
                            <img src="" alt="" />
                        </a>
                    </li>
                ))}
                
            </ul>
        </section>
    )
}