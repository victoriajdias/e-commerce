import React from 'react';
import './Home.css';




const Usuario = () => {
const alerta = () => {
    alert("Item adicionado no carrinho.")
};
    return (
        <div className="HomeContainer">
        <div className="HomeContent">
      <div className="inicio2">
        <h1 className="inicio3"> 
        20% DE DESCONTO EM TODAS AS PEÇAS
        </h1>
        <div className="linhafter"> </div>
      </div>
      </div>
      <h3 className="texto2">CONFIRA ABAIXO AS PROMOÇÕES:</h3>

  <div className="caixa1"> </div>
  <p className="fem"> Feminino </p>
<h6 className="Femdesc">Na categoria feminina, é possível encontrar variedade</h6>
<h6 className="Femdes">de roupas, calçados e acessórios com descontos imperíveis!</h6>
  <input className="campodtexto0" placeholder="Procurar" />
  <button className='botao' onClick={alerta}>Adicionar no carrinho</button>
    
   <div className='caixa2'> </div>
   <p className="masc"> Masculino </p>
   <h6 className="masc1">Na categoria masculina, é possível encontrar variedade</h6>
   <h6 className="masc2">de roupas, calçados e acessórios com descontos imperíveis!</h6>
   <input className="campodtexto3" placeholder="Procurar" />
   <button className='botao2'>Adicionar no carrinho</button>
  
  <div className='caixa3'> </div>
  <p className='infa2'> Infantil </p>
  <h6 className="infa1">Na categoria infantil, é possível encontrar variedade</h6>
   <h6 className="infa3">de roupas, calçados e acessórios com descontos imperíveis!</h6>
  <input className="campodtexto4" placeholder="Procurar" />
  <button className='botao3' onClick={alerta}>Adicionar no carrinho</button>

  <div className='caixa4'></div>
  <p className='cal2'> Calçados </p>
  <h6 className="calç2">Na categoria de calçados, é possível encontrar variedade</h6>
   <h6 className="calç4">de roupas, calçados e acessórios com descontos imperíveis!</h6>
  <input className="campodtexto5" placeholder="Procurar" />
  <button className='botao4'onClick={alerta}>Adicionar no carrinho</button>
  

    </div>


    )
  }
  
  export default Usuario