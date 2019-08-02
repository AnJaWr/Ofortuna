import React from "react";
import './App.css';
import Footer from './Footer'

import Numerek from './Numerek'
import { Container } from 'react-grid-system';


const App = () => {
    return (
    <Container className="App"> 
  <Numerek />
  <Footer />
    </Container>
  );

    }
export default App;
