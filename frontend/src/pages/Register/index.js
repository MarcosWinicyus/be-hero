import React, { useState } from 'react';
import LogoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from  'react-icons/fi'
import './styles.css'
import api from '../../services/api'

 export default function Register(){
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsap, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {nome,email,whatsap,city,uf};

       try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
            
       } catch (err){
           alert('Erro no cadastro, tente novamente')
       }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>

                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={nome}
                        onChange={e => setName(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input  
                        placeholder="WhatsApp"
                        value={whatsap}
                        onChange={e => setWhatsapp(e.target.value)}  
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}  
                        />
                        <input 
                            placeholder="UF" 
                            style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}  
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}