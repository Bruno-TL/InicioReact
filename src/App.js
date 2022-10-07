import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabela from "./Tabela";

function Button(props) {
  return (
    <a href={props.destino} className="btn btn-primary">
      {props.children}
      </a>
  );
}

export default function App() {
  const estilo = {
    backgroundColor: 'red',
    color: 'white',
  }


  let sub = (event) => {
    event.preventDefault()
    let valor1 = event.target[0].value
    let valor2 = event.target[1].value

    let valores = valor1 + valor2;
    document.getElementById('span').textContent = valores;
    
  }

  return (
    <div>
        <h1 className="text-center">Login</h1>
        <hr/>
        <form onSubmit={sub}>
          <input className="form" type="text" placeholder="Email" />
          <input className="form" type="text" placeholder="Senha" />
          <button style={ estilo }>Entrar</button>

          <Button destino="https://www.youtube.com/">
            Cadastrar
          </Button>
        </form>
        <span id="span"></span>
        <Tabela/>
    </div>
  );
}
