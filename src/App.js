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

  return (
    <div>
        <h1 className="text-center">Login</h1>
        <hr/>
        <form>
          <input className="form" type="text" placeholder="Email" />
          <input className="form" type="text" placeholder="Senha" />
          <button style={ estilo }>Entrar</button>

          <Button destino="https://www.youtube.com/">
            Cadastrar
          </Button>
        </form>
        <Tabela/>
    </div>
  );
}
