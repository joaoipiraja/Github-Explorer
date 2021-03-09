import { RepositoryItem } from "./RepositoryItem";


const repository = {
    name: "Lets Move It",
    description: "Project made in the 4th Next Level Week by Rocketseat",
    link: "https://github.com/joaoipiraja/LetsMoveIt"
}
export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}