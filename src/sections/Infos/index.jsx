import React from "react";
import cube from "../../../public/assets/images/Vector.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Infos = () => {
  Aos.init();
  return (
    <div className="container flex flex-col my-6 gap-12 m-auto md:flex md:flex-row py-16 justify-around">
      <div data-aos="zoom-in-down" className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center items-center mt-8 mb-4 md:mt-0 md:mb-0">
          <img className="object-cover bg-cover shrink-0 w-8" src={cube} />
          <h1 className="text-xl font-bold">Horário de funcionamento</h1>
        </div>
        <div className="mt-4 text-center md:text-left mb-4 md:mt-0 md:mb-0">
          <p className="text-sm font-normal">
            Segunda a Sexta: 11:30 às 15:00
            <br />
            <br />
            Sábado: 11:30 às 15:30
            <br />
            <br />
            Domingo: Fechado
          </p>
        </div>
      </div>
      <div>
        <div data-aos="zoom-in-down" className="flex gap-4 flex-col ">
          <div className="flex justify-center md:justify-normal gap-4 md:mt-0 md:mb-0">
            <img src={cube} className="object-cover w-8" />
            <h1 className="text-2xl font-bold">Localização</h1>
          </div>
          <div className="flex text-center md:text-left flex-col">
            <p>R. Teresópolis, 217</p>
            <p>Vila Amélia, Nova Friburgo - RJ</p>
            <br />
            <p>Veja o mapa</p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        className="flex text-center md:text-left flex-col gap-4"
      >
        <div className="flex items-center justify-center gap-4 mt-8 mb-4 md:mt-0 md:mb-0 ">
          <img className="object-cover w-8" src={cube} />
          <h1 className="text-2xl font-bold">Fale Conosco</h1>
        </div>
        <p>(22) 99733-9293</p>
      </div>
    </div>
  );
};

export default Infos;
