import styles from "./style.module.css"
import Link from '../Link'
import { FaHome, FaMapMarkedAlt, FaSuitcase, FaComments, FaEnvelope } from 'react-icons/fa';
export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Senai Viagens</h1>
            <nav className={styles.menu}>

                <Link icone={FaHome} titulo="HOME"   />
                <Link icone={FaMapMarkedAlt} titulo="DESTINOS" link="#destinos"/>
                <Link icone={FaSuitcase} titulo="PACOTES" />
                <Link icone={FaComments} titulo="DEPOIMENTOS" />
                <Link icone={FaEnvelope} titulo="CONTATO" />

            </nav>
        </header>
    )
}