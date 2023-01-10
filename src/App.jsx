import { Navbar, Servicios, About } from "./components";
import casas from "./assets/casas.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-img" id="inicio">
        <div className="bg-info">
          <div className="bg-info-box1">
            <div className="bg-info-p1">
              <h2>¡Bienvenidos a territoro COVA!</h2>
            </div>
          </div>
          <div className="bg-info-box2">
            <div className="bg-info-p2">
              <h2>
                "Velamos por los intereses y necesidades de cada uno de nuestros
                clientes"
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Servicios />
      <About/>
    </div>
  );
}

export default App;

{
  /* <h2>¡Bienvenidos a territoro COVA!</h2>
<h2>"Velamos por los intereses y necesidades de cada uno de nuestros clientes"</h2> */
}
