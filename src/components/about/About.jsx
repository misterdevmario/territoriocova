import mision from '../../assets/mision.png'
import vision from '../../assets/vision.png'
import "./about.css";

const About = () => {
  return (
    <div className="about" id="nosotros">
      <div className="about_name">
        <h1>NOSOTROS</h1>
      </div>
      <div className="about_cards-container">
        <div className="card1">
          <div className="card-name-container1">
            <h1>MISIÓN</h1>
            <p>
              BRINDAR UNA ASESORIA INTEGRAL Y PERSONALIZADA A MILES DE MEXICANOS EN BUSCA DE UN HOGAR PARA SUS FAMILIAS, PERMITIENDOLES APROVECHAR AL MÁXIMO SUS POSIBILIDADES. SER EL VALOR AGREGADO A TU PATRIMONIO Y AHORROS PARA JUNTOS ENCONTRAR LA VIVIENDA IDEAL A TUS NECESIDADES Y ALCANCES. SOMOS LA LLAVE DE TU HOGAR.
            </p>
          </div>
          <div className="card-img-container1">
            <img src={mision} alt="" />
          </div>
        </div>
        <div className="card2">
          <div className="card-img-container2">
            <img src={vision} alt="" />
          </div>
          <div className="card-name-container2">
            <h1>VISIÓN</h1>
            <p>CREAR LA EMPRESA INMOBILIRIA DEDICADA A LAS NECESIDADES DE SUS CLIENTES, ELABORAR PROYECTOS INTEGRALES EN BASE A ESTUDIOS DE MERCADO Y DEMANDA DE BIENES RAICES INTEGRANDO LOS CONOCIMIENTOS DE CADA UNO DE LOS MIEMBROS DE NUESTRO EQUIPO PARA ASÍ PODER OBTENER LOS RESULTADOS DESEADOS.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
