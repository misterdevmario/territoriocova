import MapsLg from "../Maps/MapsLg";
import MapsSm from "../Maps/MapsSm";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact_container" id="contacto">
      <div className="contacto_name">
        <h1>CONTACTO</h1>
      </div>
      <div className="contacto_info-container">
        <div className="contact_maps">
          <div className="contact_map-lg">
            <MapsLg />
          </div>
          <div className="contact_map-sm">
            <MapsSm />
          </div>
        </div>
        <div className="contact_info">
          <div>
            Telefono: <br /> <a href="tel:523321818425">33 2181 8425</a>{" "}
          </div>
          <br />
          <div>
            Direccion: <br /> Río Juchipila 2098, Las Águilas, 45080 Zapopan, Jal.
          </div>
          <br />
          <div>
            Email: <br />
            <a href="mailto:compras.territoriocova@gmail.com">
              compras.territoriocova@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        "Velamos por los intereses y necesidades de cada uno de nuestros
        clientes" | © TERRITORIO COVA 2023
      </div>
    </div>
  );
};

export default Contact;
