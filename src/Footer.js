import React from "react";
import { GiDiceEightFacesEight } from 'react-icons/gi';
import { FaRegCopyright } from "react-icons/fa";
import { Row } from 'react-grid-system';
const Footer = (props) => {
    return (
<Row>
        <footer className="App-footer">
            <p>
               Copyright <FaRegCopyright /> Anna   <GiDiceEightFacesEight />   Wróbel
    
            </p>
        </footer>
</Row>
    )
};



export default Footer;
