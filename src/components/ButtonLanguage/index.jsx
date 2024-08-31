import { useContext } from "react";
import { LangContext } from "../../context/langContext";
import React from "react";
import styles from "./style.module.css"
function ButtonLanguage (){

    const {language, setLanguage} = useContext(LangContext);

    function switchLang () {
        language === "eng" ? setLanguage("ru") : setLanguage("eng"); 
    }


    return (
      
         <button onClick={switchLang} className={styles.btnLangv}>
            {language === "eng" ? <span>Eng</span> : <span>Ru</span>}
        </button>
      
    )
}

export default ButtonLanguage;