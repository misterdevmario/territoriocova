import { Navbar, Servicios, About, Contact } from "./components";
import "./App.css";
import w from './assets/whatsapp.svg'

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
      <Contact/>
      <a className="whatsapp" href="https://api.whatsapp.com/send/?phone=523321818425" target="_blank" ><img src={w} alt="whatsapp link" /></a>
    </div>
  );
}

export default App;

{
  /* <h2>¡Bienvenidos a territoro COVA!</h2>
<h2>"Velamos por los intereses y necesidades de cada uno de nuestros clientes"</h2> */
}
