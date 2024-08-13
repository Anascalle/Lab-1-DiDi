import React from 'react';
import CardWithButton from '../cardwithbutton/cardbutton';
import "./gridcardbutton.css"

const Gridcardsbutton = () => {
  return (
    <div className="grid-button-container">
 <CardWithButton imgSrc="src/img/quote.png" title="Acerca de nosotros" description="Somos una de las app de movilidad más grande del mundo" buttonTitle="Saber más" />
      <CardWithButton imgSrc="src/img/file.png" title="Legal" description="Conoce nuestras políticas y términos y condiciones de uso de la app DiDi Pasajero y la app DiDi Conductor en Colombia." buttonTitle="Saber más"/>
      <CardWithButton imgSrc="src/img/question.png" title="Preguntas frecuentes" description="Conoce aquí las respuestas a las preguntas más frecuentes de nuestros arrendadores y arrendatarios."  buttonTitle="Saber más"/>
    </div>
  );
};


export default Gridcardsbutton;


