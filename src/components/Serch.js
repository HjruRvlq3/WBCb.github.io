import React from "react";
import Button from "./Button"
import '../css/Serch.css'
import '../css/index.css'
import picture from '../img/serch.png'

class Serch extends React.Component {
    render() {
        return(
            <div className="input-group">
                <div className="input-group__input">
                    <img src={picture}/>
                    <input placeholder="Поиск"/>
                </div>
                <Button />
            </div>
        )
    }
}

export default Serch
