import React from "react";
import headerBackground from "../../assets/images/headerBackground.jpg";

const styleHeader = {
  backgroundImage: `url(${headerBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "80vh",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const styleText = {
marginTop: '300px',
fontSize: '50px',
width: '700px',
textAlign: 'center'
};

const styleButton = {
padding: '20px 60px' ,
background: 'none',
fontSize: '20px',
fontWeight: 'bold',
border: 'solid 3px #ffff',
color: 'white'
}

const styleRadio = {
marginBottom: '10px',
width: '10%',
height: '20px',

}

function handleChange(event) {
  console.log(event.target.value);
}
export default function Carousel() {
  return (
    <div style={styleHeader}>
      <label style={styleText}>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL.</label>
      <button style={styleButton}>SHOP</button>
      <div style={{width:'500px', textAlign: 'center'}}>
        <input type="radio" style={styleRadio} onChange={handleChange}></input>
        <input type="radio"style={styleRadio}></input>
        <input type="radio"style={styleRadio}></input>
      </div>
    </div>
  );
}
