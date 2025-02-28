import style from "./style.module.css";
import Viagem from "../Viagem"

import {
  FaHotel,
  FaPlane,
  FaWalking,
  FaBus,
} from 'react-icons/fa';
export default function Viagens() {

  return (
    <section id="pacotes" className={style.pacotesViagem}>
      <h2>Pacotes de Viagem</h2>
      <div className={style.pacotesGrid}>


        <Viagem nomePacote="Pacote Europa" precoAnte="R$ 6.000" precoAtual="R$ 5.000" 
        desc="Aproveite 7 dias inesquecíveis em Paris, Londres e Roma, com
            visitas guiadas aos pontos turísticos mais emblemáticos,
            hospedagem em hotéis 4 estrelas e passagens aéreas inclusas."
             />
        <Viagem nomePacote="Pacote EUA" precoAnte="R$ 5.500" precoAtual="R$ 4.500" 
        desc="Explore as cidades vibrantes de Nova York e Los Angeles por 7
            dias, com hospedagem em hotéis 4 estrelas, passagens aéreas e
            tours guiados pelos pontos mais famosos."   />
        <Viagem nomePacote="Pacote América do Sul" precoAnte="R$ 4.000" precoAtual="R$ 3.500" 
        desc="Desfrute de 7 dias encantadores em Buenos Aires, Santiago e Lima,
            com hospedagem em hotéis 4 estrelas, passagens aéreas e passeios
            guiados pelos principais pontos turísticos."
             />
        <Viagem nomePacote="Pacote Ásia" precoAnte="R$ 7.000" precoAtual="R$ 6.000" 
        desc=" Descubra a cultura e modernidade de Tóquio, Seul e Pequim em uma
            viagem de 10 dias, com hospedagem luxuosa, passagens aéreas
            inclusas e tours guiados."  />

       

      </div>
    </section>

  )

}
