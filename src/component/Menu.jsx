import React from "react";
import '../css/Header.css';
import { Link } from "react-router-dom";

function Menu(props) {

    if (props.model == 'default') {
        return (

            <ul className="Menu">
                <Link to="/about"><li>SOBRE</li></Link>
                <Link to="/products"><li>RECEITAS</li></Link>
                <Link to="/contact"><li>Enviar sua receita</li></Link>
            

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