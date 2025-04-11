import React from "react";
import '../css/Nav.css'
import addProduct from '../img/nav/add product.png'
import home from '../img/nav/home.png'
import basket from '../img/nav/basket.png'
import profile from '../img/nav/profile.png'

class Footer extends React.Component {
    render() {
        return(
            <nav>
                <button>
                    <img src={addProduct}/>
                </button>
                <button>
                    <img src={home}/>
                </button>
                <button>
                    <img src={basket}/>
                </button>
                <button>
                    <img src={profile}/>
                </button>
            </nav>
        )
    }
}

export default Footer
