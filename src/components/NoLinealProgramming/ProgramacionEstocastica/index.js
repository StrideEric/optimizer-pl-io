import React, { Component } from 'react'
import {Button, Container, Row, Col, Card, Jumbotron} from "reactstrap";
import {InputGroupText,InputGroup, Input,InputGroupAddon, CardText, Table, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../index.css'




class Nomb extends Component {
    handleInput(e){ 
	const {value,name}=e.target;
        

    }
    render(){
       return(
    <Container fluid className="App">
      <Row>
        <Col xs={12} md={10} className="mx-auto my-5">
          <Jumbotron>
            <Row className="justify-content-center">
                <div className="text-center">
                    <h2>Programacion Estocástica</h2>
                </div>
            </Row>
           
            <Row className="mt-3 mx-auto">
              <Col>
                <InputGroup className="mt-3" >
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"Numero de restricciones"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            type="number" min="1" max="2"
                            className="input-restricciones"
                            name={"restricciones"}
                            //value={demanda}
                            placeholder="Ingresar Numero de restricciones"
                            aria-label="Demanda"
                            aria-describedby="demanda"
                            onChange={this.handleInput}
                            />
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"Cantidad de variables reales"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            type="number" min="1" max="3"
                            className="input-demanda"
                            name={"VReales"}
                            //value={demanda}
                            placeholder="Ingresar Cantidad de variables"
                            aria-label="Demanda"
                            aria-describedby="demanda"
                             onChange={this.handleInput}
                            />
                        </InputGroup>
                
              </Col>
            </Row>
		
             <Row className="mt-3 mx-auto">
              <Col>
                <InputGroup className="mt-3" >
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"Tipo de caso"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            type="number" min="1" max="3"
                            className="input-demanda"
                            name={"demanda"}
                            //value={demanda}
                            placeholder="Ingresar tipo de caso a resolver"
                            aria-label="Demanda"
                            aria-describedby="demanda"
                            
                            />
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"Cantidad de variables aleatorias"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            type="number" min="1" max="3"
                            className="input-demanda"
                            name={"demanda"}
                            //value={demanda}
                            placeholder="Ingresar Cantidad de variables aleatorias"
                            aria-label="Demanda"
                            aria-describedby="demanda"
                            
                            />
                        </InputGroup>
                
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
			<label>Funcional Z</label>
            </Row>

  	<Row className="mt-3 mx-auto col-xs-1" >
              <Col>
                <InputGroup className="mt-3" >
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"Z="}</b></InputGroupText>
                            </InputGroupAddon>
                            <input type="number" size="2.5"/>
                            <label className="col-sm-offset">X1</label>
                        </InputGroup>
                
              </Col>
            </Row>
            <Row className="btn-volver justify-content-center">
                <Link to='/NoLinealProgramming'><Button>Volver</Button></Link>
                <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
 		<Button className="btn-Calcular" color="success" >Calcular</Button>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    );
    }
}

export default Nomb;
