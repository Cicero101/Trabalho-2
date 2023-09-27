import { useState } from "react";
import Swal from 'sweetalert2'
import "./index.css";



function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const logar = () => {
        if (!email || !senha){
            Swal.fire({
                icon:'error',
                text:'Os campos são obrigatórios'
            });
            return;
        }
    }
    
    
    return (

        <div>
            <div>
                <h1>Login</h1>
            </div>
            {/*E-mail*/}
            <div>
                <label for="email" class="form-label">E-mail</label><br />
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="exemplo@exemplo.com" />
            </div>
            {/*Senha*/}
            <div>
                <label for="senha">Senha</label><br />
                <input id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
            </div>
            {/*CheckBox*/}
            <div>
                <input type="checkbox" id="conectado" />
                <label for="conectado">Mantenha-me conectado</label>
            </div>

            {/*Senha*/}
            <div>
                <button id="btn-entrar" onClick={logar}>Entrar</button>
            </div>
        </div>







    )
}

export default Login;