import style from './style.module.css'
import Flag from "react-world-flags";
export default function Destino({bandeira, destino, descricao, imagem}){
    return(

        <div className={style.cardDestino}>
        <img
            src={imagem}
            alt="Paris"
            className={style.imagemDestino}
        />
        <h3>
            <Flag code={bandeira} height="16" className="bandeira" /> {destino}
        </h3>
        <p>
       {descricao}
        </p>
    </div>
    )
}