import Destino from "../Destino";
import style from "./style.module.css";
import Flag from "react-world-flags";
export default function Destinos() {
    return (
        <section id="destinos" className={style.destinosPopulares}>
            <h2>Destinos Populares</h2>
            <div className={style.destinosGrid}>

                <Destino imagem="https://oficinadeinverno.com.br/cdn/shop/articles/eiffel-tower-sunrise1.jpg?v=1659494576" descricao=" Paris, conhecida como a cidade do amor, oferece uma mistura de cultura, arte e história. Visite a Torre Eiffel, o 
            Museu do Louvre e explore as charmosas ruas de Montmartre. " bandeira="FRA" destino="Paris" />
                <Destino imagem="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/toquio-pontos-turisticos.jpg" descricao="  Tóquio é uma metrópole vibrante onde a tradição encontra a
                modernidade. Visite o Templo Senso-ji, o cruzamento de Shibuya e
                experimente a culinária local em izakayas e restaurantes. " bandeira="JPN" destino="Tóquio" />
                <Destino imagem="https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024" descricao=" Nova York, a cidade que nunca dorme, é um centro global de
                cultura, moda e finanças. Explore a Times Square, o Central Park e
                desfrute de uma variedade de espetáculos na Broadway. " bandeira="USa" destino="Nova York" />


            </div>

        </section>
    )
}