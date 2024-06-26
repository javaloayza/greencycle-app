import React from "react";
import recycle from "../../../assets/images/reciclaje_banner.png";
import "./Hero.scss";


export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero_body">
        <h2>
          ¿Qué es <span className="text-span">GreenCycle?</span>
        </h2>
        <p>
          Green Cycle es una aplicación que conecta a usuarios que buscan ayudar
          al medio ambiente reciclando, pero carecen de tiempo o información
          sobre cómo hacerlo, con recolectores que se encargan de retirar el
          material de reciclaje y entregarlo a organizaciones que garanticen su
          reciclaje. Green Cycle nace bajo la consigna Reducir, Reutilizar,
          Reciclar
        </p>
        {/* <Link href="/registro">
          <Button size="small">Empezar a reciclar</Button>
        </Link> */}
      </div>
      <div className="hero_img">
        <img
          src={recycle}
          alt="banner"
        />
      </div>
    </div>
  );
}

