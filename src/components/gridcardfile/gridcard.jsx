import React from 'react';
import Card from '../card/card';
import "./gridcard.css"

const Gridcards = () => {
  return (
    <div className="grid-container">
 <Card imgSrc="src/img/user.png" title="Disponibilidad y cobertura" description="Tenemos opciones que se adaptan a tus necesidades de movilidad, ¡encuéntranos en las principales ciudades de Colombia!" />
      <Card imgSrc="src/img/dollar.png" title="Tarifas justas" description="Disfruta de arrendamientos sin pagar de más"/>
      <Card imgSrc="src/img/clock.png" title="Soporte 24/7" description="Tu seguridad es nuestra prioridad. Por eso contamos con soporte 24/7 en nuestro Chat en vivo, allí atenderemos todas tus dudas y solicitudes." />
    </div>
  );
};


export default Gridcards;
