import './App.css'
import Nav from './components/navbarfile/navbar'
import Gridcard from './components/gridcardfile/gridcard'
import Sections from './components/section/section'
import Banner from './components/banner/banner'
import Invitation from './components/invitation/invitation'
import Gridcardsbutton from './components/gridcardbutton/gridcardbutton'


const sectionStyle1 = {
  backgroundColor: 'rgb(0, 86, 239)',
};

const sectionStyle2 = {
  backgroundColor: 'rgb(252, 76, 2)',
};

function App() {
  
  return (
    <>
      <Nav />
      <Banner imgSrc="src/img/fondo.webp"  title="Muévete por tu Ciudad con DiDi Pasajero" description="La app donde recibes más y viajas mejor."  buttontitle="Descarga DiDi"></Banner>
      <Gridcard />
      <Sections title="¿Olvidaste un objeto en el vehículo?" description="Da clic en el botón de abajo, dirígete a Preguntas Pasajeros > Inconvenientes con un arrendamiento y en la sección Olvidé un objeto en el vehículo llena el formulario para poder ayudarte" buttontitle="Cómo Recuperarlo" style={sectionStyle1} buttonClass="button-title-primary" />
      <Invitation className="invitation-didi" imgSrc="src/img/didi-delivery.webp"  title="DiDi Confort Colombia" 
      description={[
          "Envía o recibe paquetes, productos y docuementos, de manera personal o a tu negocio"
        ]}   ></Invitation>

      <Invitation imgSrc="src/img/co.webp"  title="Utiliza DiDi" 
      description={[
          "Solicita tus arrendamientos, obtén un arrendamiento de vehículo en minutos, a cualquier hora y en cualquier día del año.",
          "Cotiza los precios de todos los tipos de viaje, desde los traslados diarios hasta las salidas nocturnas.",
          "DiDi es una app que conecta arrendatarios con arrendadores."
        ]}   ></Invitation>

      <Sections title="¿Quieres registrarte en DiDi Conductor?" description="Genera ingresos extra y maneja tus tiempos." buttontitle="Regístrate en DiDi Conductor" style={sectionStyle2}  buttonClass="button-title-secundary" />
      <Gridcardsbutton></Gridcardsbutton>
    </>
  );
}

export default App;
