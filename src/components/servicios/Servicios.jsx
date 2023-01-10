import finanzas from "../../assets/finanzas.png";
import construccion from "../../assets/construccion.png";
import supervision from "../../assets/supervision.png";
import escrituras from "../../assets/escrituras.png";
import "./servicios.css";

const Servicios = () => {
    console.log(window.path)
  return (
    <div className="servicios_container" id="servicios">
      <div className="servicios_name">
        <h1>SERVICIOS</h1>
      </div>
      <div className="servicios_container-card">
        <div className="servicios_card">
          <img src={finanzas} alt="" />
          <div className="servicios_card-info">
            <h2>ASESORIA FINANCIERA</h2>
            <p>TE ASESORAMOS EN CUALQUIER TIPO DE CREDITO</p>
          </div>
        </div>
        <div className="servicios_card">
          <img src={escrituras} alt="" />
          <div className="servicios_card-info">
            <h2>GESTION NOTARIAL</h2>
            <p>TE ACOMPAÑAMOS HASTA LA FIRMA DE TUS ESCRITURAS</p>
          </div>
        </div>
        <div className="servicios_card">
          <img src={construccion} alt="" />
          <div className="servicios_card-info">
            <h2>PROYECTOS Y CONTRUCCION</h2>
            <p>
              ELABORACIÓN DE PROYECTOS Y CONSTRUCCIÓN DE OBRA QUE SE APEGUEN A
              TU NECESIDADES
            </p>
          </div>
        </div>
        <div className="servicios_card">
          <img src={supervision} alt="" />
          <div className="servicios_card-info">
            <h2>SUPERVISIÓN	DE OBRA</h2>
            <p>SUPERVISAMOS TU OBRA PARA QUE TENGAS UNA ENTREGA DIGNA Y EN OPTIMAS CONDICIONES DE TU PATRIMONIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
