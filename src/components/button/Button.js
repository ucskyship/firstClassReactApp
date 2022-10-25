// import React from "react";
import "../button/Button.css";
import styled from 'styled-components';


const Button = styled.button`

    background-color: ${props => props.bg ? props.bg : 'red'};
    color: ${ props => props.color || 'white'};
    font-size: 1.2rem;
    padding: 10px;
    margin: 2px;

    border-radius: 2px;
    border-color: pink;

    @media (max-width: 600px) {

    }

&:hover {
    background-color:rgb(95, 45, 45);
}
`;

// const Button = ({ displayName, onClick, bg, color }) => {
//   return (
//     <button
//       className="btn__button"
//       onClick={onClick}
//       style={{ backgroundColor: bg, color: color }}
//     >
//       {displayName}
//     </button>
//   );
// };

export default Button;
