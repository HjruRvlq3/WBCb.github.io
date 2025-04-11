import React from "react";
import '../css/CatalogItem.css'
import picture from '../img/catalog/img.png'

class CatalogItem extends React.Component {
    render() {
        return (
            <div className="CatalogItem">
                <img src={picture} />
                <div className="info">
                    <div className="info-title">
                        <span>Часы наручные кварцевые с ...</span>
                    </div>
                    <div className="info-price">
                        <span className="info-price__new">0 ₽</span>
                        <span className="info-price__old">2 750 ₽</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CatalogItem
