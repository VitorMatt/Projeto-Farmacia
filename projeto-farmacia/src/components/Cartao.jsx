import { useState } from 'react';
import icon from '../assets/icon.png';
import cardIcon from '../assets/cartaoIcon.png';
import { Link } from 'react-router-dom';
import './css/Cartao.css';

function Cartao() {

    const [card, setCard] = useState(false);

  return (
    <div className='divMaior'>
        <div className='divText2'>
            <h1>Adquira seu cartão já!</h1>
            <h3>Faça o seu cadastro e retire na loja.</h3>
            <h4>Não sabe onde nos localizamos?</h4>
        </div>

        {
            card
            ?
            <div className='divCardDone'>
                <h1>Parabéns, você adquiriu seu cartão!</h1>
                <img src={icon} />
                <h3>Retire no nosso estabelecimento.</h3>
                <Link to='/'>
                    <button onClick={() => { setCard(false) }}>Sair</button>
                </Link>
            </div>
            :
            <form onSubmit={(e) => { e.preventDefault(), setCard(true)}}>
                <div className='divForm'>
                    <h2>Realize seu cadastro!</h2>
                    <label htmlFor='name'>Nome</label>
                    <input
                        placeholder='Seu nome'
                        id='name'
                        type='text'
                        required
                        />
                    <label htmlFor='email'>Email</label>
                    <input
                        placeholder='Seu email'
                        id='email'
                        type='email'
                        required
                        />
                    <label htmlFor='password'>Crie uma senha</label>
                    <input
                        placeholder='Sua senha'
                        id='password'
                        type='password'
                        required/>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        }
        <div className='divImg'>
            <img src={cardIcon} />
        </div>
    </div>
  );
};

export default Cartao;