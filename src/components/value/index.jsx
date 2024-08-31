import { useContext } from "react";
import { LangContext } from "../../context/langContext";
import React from "react";
import styles from "./style.module.css"
function Value() {

    const {language} = useContext(LangContext);


    return (

        
        <div className={styles.divValue}>
            <h1 className={styles.h1Value}>{language === "eng" ? "Caribbean Vacation" : "Отдых на Карибах"}</h1>
            <p className={styles.pValue}>{language === "eng" ? "Dreaming of a perfect vacation? Head to the Caribbean! Pristine beaches, crystal-clear waters, and bright sunshine will make your getaway unforgettable. Immerse yourself in tropical nature, enjoy luxurious hotels, and savor local delicacies. Water activities like diving and surfing will thrill you, while evenings under the stars will bring romance and relaxation. The Caribbean is a paradise where everyone can find something special. Book your trip today and treat yourself to the ultimate pleasure!"
             : 
            "Мечтаете об идеальном отпуске? Отправляйтесь на Карибы! Белоснежные пляжи, кристально чистая вода и яркое солнце сделают ваш отдых незабываемым. Погрузитесь в мир тропической природы, насладитесь шикарными отелями и попробуйте местные деликатесы. Водные развлечения, такие как дайвинг и серфинг, оставят вас в восторге, а вечера, проведённые под звёздами, подарят романтику и уют. Карибы — это рай, где каждый найдёт что-то для себя. Забронируйте тур уже сегодня и подарите себе настоящее удовольствие!"}</p>
           <img className={styles.imgCarib} src="https://img.freepik.com/premium-photo/scenic-view-sea-against-blue-sky_1048944-271325.jpg?w=900" alt="Caribbean"></img> 
        </div>
    )
}
export default Value;