import React from "react";
import '../css/Button.css' 
import picture from '../img/filter.png'

class Button extends React.Component {
    render() {
        return(
            <div>
                <button className="filter">
                    <img src={picture} />
                </button>
            </div>
        )
    }
}

export default Button
