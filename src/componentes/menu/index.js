import './index.css';

import { Link, useLocation } from "react-router-dom"


function Menu() {

    if (useLocation().pathname !== '/') {
        return (
            <ul className="menu">
                <li><Link to='/cliente'>Clientes</Link>  </li>
                <li><Link to='/usuario'>Usuários</Link>  </li>
                <li><Link to='/produto'>Produtos</Link>  </li>
                <li><Link to='/'>Sair</Link>  </li>
            </ul>
        )
    }else{
        return null;
    }

}

export default Menu;