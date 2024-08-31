import styles from "./style.module.css"
import ButtonLanguage from "../ButtonLanguage";


function Navbar (){
    return(
        <nav className={styles.navDiv}>
            <ButtonLanguage />
        </nav>
    )
}
export default Navbar;