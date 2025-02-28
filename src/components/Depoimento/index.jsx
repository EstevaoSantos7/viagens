import style from './style.module.css'
export default function Depoimento({nome, mensagem}){
    return(
        <div className={style.cardDepoimento}>
        <div className={style.depoimentoInfo}>
          <h3>{nome}</h3>
          <blockquote>{mensagem}</blockquote>
        </div>
      </div>
    )
}