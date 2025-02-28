import style from './style.module.css'
export default function Link({ icone: Icone, link, titulo }) {
    return (
        <a href={link}>
            <Icone/> {titulo}
        </a>

    )
}