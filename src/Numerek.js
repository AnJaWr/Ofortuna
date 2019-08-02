import React, { Component} from "react";
import './App.css';
import { Row, Col } from 'react-grid-system';

class Numerek extends Component {
    state={
        value: 0,
        chosenOne: 0,
    }

handleClick = () => {
if (this.state.value > 0){
    let min = 1;
    let max = this.state.value;
    let chosen = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({
        chosenOne: chosen
    })
}
    }
    render() {
        return(

  
                <Row align="center" justify="center" >
                    <Col xs={12} sm={9} md={10} lg={6} xl={6}>           
<label>Wybieramy spośród  
<input type="number" value={this.state.value} min={0} onChange={(e)=> {
        this.setState({ value: e.target.value})
    }}/>  osób.</label>
</Col>
                    <Col xs={4} sm={3} md={2} lg={2} xl={2}>
                        <div className="button">
    <button onClick={this.handleClick}>Losuj</button></div></Col>
                    {this.state.chosenOne ? <Col xs={12} sm={4} md={6} lg={6} xl={6}><div className="ofiara">{this.state.chosenOne}</div></Col> : null}
</Row>

        )

    }
}
export default Numerek;