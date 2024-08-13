import "./navbuttons.css"

const NavButton  =(props) =>{
    return (<button className='nav-button'>
    {props.imgSrc && <img src={props.imgSrc} alt="" className='button-img' />}
    {props.title}
  </button>
    );
};

export default NavButton 