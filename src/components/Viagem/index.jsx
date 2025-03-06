import style from './style.module.css'
import {
  FaHotel,
  FaPlane,
  FaWalking,
  FaBus,
} from 'react-icons/fa';
export default function Viagem({ precoAnte, precoAtual, desc, nomePacote }) {
  return (
    <div className={style.cardPacote}>
      <div className={style.pacoteHeader}>
        <h3>{nomePacote}</h3>
        <div className={style.preco}>
          <span className={style.precoAnterior}>{precoAnte}</span>
          <span className={style.precoAtual}>{precoAtual}</span>
        </div>
      </div>
      <p>
        {desc}
      </p>
      <p>Incluem:</p>
      <ul>
        <li>
          <FaHotel /> Hospedagem em hotéis 4 estrelas
        </li>
        <li>
          <FaPlane /> Passagens aéreas ida e volta
        </li>
        <li>
          <FaWalking /> Passeios guiados nas cidades
        </li>
        <li>
          <FaBus /> Transporte entre as cidades
        </li>
        {/* <li>
        <Icone />{titulo}
      </li>
      <li>
        <Icone/>{titulo}
      </li>
      <li>
        <Icone/>{titulo}
      </li>
      <li>
        <Icone/>{titulo}
      </li> */}
      </ul>
      <button type="button" className={style.btnComprar}>
        Comprar
      </button>
    </div>

  )
}