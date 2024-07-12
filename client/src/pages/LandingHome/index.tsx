import { Layout } from '../../components/organisms/Layout'
import { Hero } from '../../components/organisms/Hero'
import CardInfo from '../../components/molecules/CardInfo'
import plastico from '../../assets/images/reciclaje_plastico.png'
import madera from '../../assets/images/reciclaje_madera.png'
import lata from '../../assets/images/reciclaje_lata.png'
import carton from '../../assets/images/reciclaje_carton.png'
import otros from '../../assets/images/reciclaje_otros.png'
import coordinadores from '../../assets/images/coordinar.png'
import { FaWifi, FaBusinessTime } from "react-icons/fa";
import { MdAddHomeWork } from "react-icons/md";
import './LandingHome.scss'

export const LandingHome = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <CardInfo fluid={true} color="primary" >
          En los países desarrollados una persona produce, como media, 1
          kilogramo de basura por día. En los países en vías de desarrollo se
          produce entre 400 y 700 gramos por habitante al día.
        </CardInfo>
        <div className="home_description">
          <h3>
            ¿Qué se puede <span className="text-span">reciclar?</span>
          </h3>
          <h4>
            <span className="text-span">Materiales</span> reciclables mas
            comunes
          </h4>
          <div className="reciclaje_section">
            <div className="content_div">
                <h4 className="reciclaje_title">
                  Envases de <span className="text-span">plastico</span>
                </h4>
                <div className="underline"></div>
                <p>
                  El plastico tarda muchos años en degradarse, por lo que es
                  importante reducir su impacto limitando su consumo, esto lo
                  podemos lograr reutilizando envases y reciclandolos
                </p>
                <p>
                  En un contenedor amarillo puedes colocar los siguientes
                  articulos:
                </p>
                <ul>
                  <li>Botellas de plastico</li>
                  <li>Bote de detergente, champu, gel, etc.</li>
                  <li>Las bolsas de las patatas</li>
                  <li>Tapas y tapones de plastico</li>
                  <li>Bolsas de plastico (excepto las bolsas de basura)</li>
                  <li>Tarrinas y tapas de yogurt</li>
                </ul>
              </div>
            <div className="border_div">
              <div className="img_bg">
                <img
                  src={plastico}
                  alt="plastico"
                  className="reciclaje_img"
                />
              </div>
            </div>
          </div>

          <div className="reciclaje_section">
          <div className="content_div">
              <h4 className="reciclaje_title">
                <span className="text-span">Briks</span> y envases de{" "}
                <span className="text-span">madera</span>
              </h4>
              <div className="underline"></div>
              <p>
                Reciclar las cajas de leche o cajas de zumo es muy sencillo,
                puedes depositarlos en los contenedores amarillos o utilizarlos
                para macetas o realizar actividades con carton o madera
              </p>
              <p>
                Las cajas de madera las puedes utilizar como almacenaje o
                contenedores de tus frutas y verduras para tener una cocina mas
                organizada
              </p>
            </div>
            <div className="border_div">
              <div className="img_bg">
                <img src={madera} alt="madera" className="reciclaje_img" />
              </div>
            </div>
           
          </div>
          <div className="reciclaje_section">
          <div className="content_div">
              <h4 className="reciclaje_title">
                <span className="text-span">Latas</span>
              </h4>
              <div className="underline"></div>
              <p>
                Este tipo de envases siempre estan presentes en nuestra cocina.
                Las latas estan compuestas de aluminio por lo que se pueden
                reciclar un numero ilimitado de veces.
              </p>
              <p>
                Si no sabes que hacer con ellas puedes utilizarlas como alcancia
                o hacer un tren para los mas pequeños!
              </p>
            </div>
            <div className="border_div">
              <div className="img_bg">
                <img src={lata} alt="lata" className="reciclaje_img" />
              </div>
            </div> 
            
          </div>

          <div className="reciclaje_section">
          <div className="content_div">
              <h4 className="reciclaje_title">
                Envases de <span className="text-span">papel y carton</span>
              </h4>
              <div className="underline"></div>
              <p>
                Todos los materiales de papel y carton deben ir al contenedor
                azul para ser reciclados y ayudar a reducir la sobreexplotacion
                de los recursos naturales
              </p>
              <p>Algunos de estos materiales son:</p>
              <ul>
                <li>Revistas</li>
                <li>Periodicos viejos</li>
                <li>Cajas de cereales</li>
                <li>Cajas de zapatos</li>
                <li>Papel de envolver</li>
                <li>Cuadernos</li>
              </ul>
            </div>
            <div className="border_div">
              <div className="img_bg">
                <img src={carton} alt="carton" className="reciclaje_img" />
              </div>
            </div>
           
          </div>

          <div className="reciclaje_section">
          <div className="content_div">
              <h4 className="reciclaje_title">Otros residuos</h4>
              <div className="underline"></div>
              <p>
                Hay otros muchos residuos que se pueden reciclar, como por
                ejemplo:
              </p>
              <ul>
                <li>Aparatos electronicos</li>
                <li>Electrodomesticos</li>
                <li>Ropa</li>
                <li>Juguetes</li>
                <li>Bombillas</li>
                <li>Aceites usados</li>
                <li>Muebles</li>
              </ul>
            </div>
            <div className="border_div">
              <div className="img_bg">
                <img src={otros} alt="otros" className="reciclaje_img" />
              </div>
            </div>
           
          </div>
          </div>
          <div className="coordinadores_banner">
          <img
            src={coordinadores}
            alt="coordinadores"
            className="coordinadores_img"
          />
          <h2>COORDINADORES DEL RECICLAJE DOMESTICO</h2>
        </div>
        <div className="home_card_container">
          <h2>Reducir, Reciclar, Reutilizar</h2>
          <div className="home_cards">
            <article>
              <div className="logo_card">
                <FaWifi className="icon_card" />
              </div>
              <h5>Desde donde estes</h5>
              <p>
                independientemente de donde te encuentres podras coordinar un
                retiro o entrega de materiales reciclables
              </p>
            </article>
            <article>
              <div className="logo_card">
                <FaBusinessTime className="icon_card bussiness_logo" />
              </div>
              <h5>Coordina dia y horario</h5>
              <p>
                Coordina dia y horario para retirar aquello que no se usa mas y
                darle una segunda oportunidad
              </p>
            </article>
            <article>
              <div className="logo_card">
                <MdAddHomeWork className="icon_card" />
              </div>
              <h5>Retira en la puerta</h5>
              <p>
                Retiralo en puerta de personas recicladoras y comprometidas con
                el medio ambiente
              </p>
            </article>
          </div>
        </div>
      </Layout>
    </div>
  )
}
