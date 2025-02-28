import Depoimento from "../Depoimento"
import style from "./style.module.css"
export default function Depoimentos() {
  return (
    <section id="depoimentos" className={style.depoimentos}>
      <h2>Depoimentos</h2>
      <div className={style.depoimentosGrid}>
       
        <Depoimento nome="João Silva" mensagem="Foi a melhor viagem da minha vida!"/>
        <Depoimento nome="Maria Santos" mensagem="Experiência incrível e atendimento excelente."/>
        <Depoimento nome="Ana Costa" mensagem="Recomendo a todos, vale cada centavo."/>
        <Depoimento nome="Pedro Oliveira" mensagem=" Excelente custo-benefício e ótimos guias turísticos."/>
       
       
        
      </div>
    </section>

  )
}