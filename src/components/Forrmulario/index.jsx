import styles from "./style.module.css";
import {FaMapMarkerAlt,  FaPhone, FaWhatsapp,FaEnvelope} from 'react-icons/fa'
export default function Formulario() {
    return (
        <section id="contato" className="contato">
            <h2>Contato</h2>
            <div className="contato-container">
                <div className="contato-info-form">
                    <div className="contato-info">
                        <p>
                            <FaMapMarkerAlt /> Endereço: Rua Fictícia, 123 - Jaboticabal, SP
                        </p>
                        <p>
                            <FaPhone /> Telefone: (16) 1234-5678
                        </p>
                        <p>
                            <FaWhatsapp /> WhatsApp: (16) 98765-4321
                        </p>
                        <p>
                            <FaEnvelope /> Caso queira enviar um email, preencha os campos
                            abaixo:
                        </p>
                    </div>
                    <form className="contato-form">
                        <label>
                            Nome:
                            <input type="text" name="nome" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Mensagem:
                            <textarea name="mensagem"></textarea>
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="contato-mapa">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.2810841259775!2d-48.35436492509229!3d-21.613967992949075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e1d1fc68a2a7%3A0x72c0741034cbcc!2sSENAI%20-%20Servi%C3%A7o%20Nacional%20de%20Aprendizagem%20Industrial!5e0!3m2!1spt-BR!2sbr!4v1722442541179!5m2!1spt-BR!2sbr"
                              width="100%"
                              height="600"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              title="Agência de Viagens"
                            ></iframe>
                          </div>
                        </div>
                      </section>
                )
}