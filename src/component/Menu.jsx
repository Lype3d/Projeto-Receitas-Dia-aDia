import React from "react";
import '../css/Header.css';
import { Link } from "react-router-dom";
import Talher from '../images/talher.png'
import Enviar from '../images/enviar.png'
import Info from '../images/info.png'

function Menu(props) {

    if (props.model == 'default') {
        return (

            <ul className="Menu">
                <Link to="/about" ><img src={Info}className="img1"></img>
Sobre</Link>
                <Link to="/products" ><img src={Talher}className="img1"></img>Receitas</Link>
                <Link to="/contact" >Envie sua receita<img src={Enviar}className="img2"></img></Link>
            

            </ul>
        )

    } else {
        return (
            <ul className="Menu">
                <Link to="/logout"><li>Sair</li></Link>

            </ul>
        )
    }
}

export default Menu;