import React, {useState} from 'react';
import './Home.css';




const Home = () => {

  const [Password, definirPassword] = useState("");
  const ObterPassword = (event) => {
    definirPassword(event.target.value);
  };

  const alerta = () => {
    alert("A sua senha deve ter 8 dígitos.");
    if (Password.length < 6) {
      alert("Senha salva com sucesso.");
    };
  }

  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <h2 className="inicio">Bem-vindo à Tela de Login.</h2>
      <div className="cabeçalho">
        <h1 className="textoprincipal">
          Login
        </h1>
        <p className="email"> Email: </p>
      <input className="campodtexto" placeholder="Email" />
      <p className="senha"> Senha: </p>
      <input className="campodtexto2" placeholder="Senha" />
      <button className="button2" onClick={alerta} onChange={ObterPassword} value={Password}>Salvar</button>
      <p className="estado"> Estado </p>
      <select name="Estado">
        <option value="">Selecione</option>
        <option value="1"> SP  </option>
        <option value="2">MG </option>
        <option value="3">CE </option>
      </select>
      <button className="button">Login</button>
    </div>
</div> 
</div>

     
    
  );
}

export default Home;