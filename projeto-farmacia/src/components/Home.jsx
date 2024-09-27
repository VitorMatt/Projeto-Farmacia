import placa from '../assets/placa.avif';
import cartao from '../assets/cartoes.avif';
import camiseta from '../assets/camiseta1.avif';
import camisetaGrande from '../assets/camiseta2.avif';
import './css/Home.css';

function Home() {

  return (
    <div className='divMaior'>
      <div className='divText'>
        <h1>A melhor farmácia da região.</h1>
        <div className='text'>
          <div>
            <h3>Faça o seu cartão personalizado já!</h3>
            <button>Realizar cartão</button>
          </div>
          <img src={cartao} />
        </div>
      </div>
      <div className='divPlaca'>
        <img src={placa} />
      </div>
      <div className='divPromocoes'>
        <h1>Camisetas Promocionais</h1>
        <div className='divCamisetas'>
          <div className='camisetas'>
            <div className='camisetaP'>
              <p>Camiseta Branca • 30.99R$</p>
              <img src={camiseta} />
            </div>
            <div className='camisetaP'>
              <p>Camiseta Preta • 30.99R$</p>
              <img src={camiseta} />
            </div>
            <div className='camisetaG'>
              <div>
                <h2>Compre agora por apenas 30,99R$!</h2>
                <button>Comprar</button>
              </div>
              <img src={camisetaGrande} />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;