import React from "react";
import { Button, Container, Row, Col, Card,Jumbotron} from "reactstrap";
import {InputGroupText,InputGroup, Input,InputGroupAddon,CardText, Table, FormGroup, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../index.css'
//import Graph from "../Graph";

import HookCounterInputsNumbers from './addInput'



class Calculate extends React.Component{
    constructor (props){
        super(props)
        this.state={
            matriz_c_filas: null,
            matriz_c_columnas: null,
            matriz_x_filas:null,
            matriz_x_columnas: null,
            matriz_xt_filas: null,
            matriz_xt_columnas: null,
            matriz_d_filas: null,
            matriz_d_columnas: null,
            matriz_a_filas: null,
            matriz_a_columnas: null,
            b: null,
        }
    }

    componentDidUpdate(prevProps, prevState){ //Para comparar mi estado actual con el estado anterior. Verificamos si se actualizo algun campo de los input.
        if(this.state.inputUpdated){
            this.setState({inputUpdated:false})
            this.controlarCambio();
            
        } 
    }

    handleInputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
            inputUpdated: true,
        })
    }

    //SI HUBO CAMBIOS QUE DESAPAREZCA LA VENTANA QUE MUESTRA LOS RESULTADOS
    controlarCambio = () => { 
        this.setState({mostrarResultados:false})
    }

    render() {         
        let {matriz_c_filas, matriz_c_columnas, matriz_x_filas, matriz_x_columnas, matriz_xt_filas, matriz_xt_columnas, matriz_d_filas, matriz_d_columnas, matriz_a_filas, matriz_a_columnas, b} = this.state;
        

        return (
            <Container fluid className="App"> 
            <Row>
              <Col xs={12} md={8} className="my-4 mx-auto">
                <Jumbotron>
                    <Col>
                        <h2>Programación Cuadrática</h2><br></br>                   
                    </Col> 
                    <Col>
                        <InputGroup className="mt-3" id={"matriz_restriccion"} key={"matriz_restriccion"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"Matriz C"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Col>
                            <Input
                            type="number" min="1" max="4"
                            className="input-matriz_a"
                            name={"matriz_a_filas"}
                            placeholder="Filas"
                            aria-label="matriz_a_filas"
                            aria-describedby="matriz_a_filas"
                            onChange={this.handleInputChange}
                            />
                            <Input
                            type="number" min="1" max="4"
                            className="input-matriz_a"
                            name={"matriz_a_columnas"}
                            placeholder="Columnas"
                            aria-label="matriz_a_columnas"
                            aria-describedby="matriz_a_columnas"
                            onChange={this.handleInputChange}
                            />
    
                                    <Input
                                    />
                                     <Input
                                    />
                                     <Input
                                    />
                                     <Input
                                    />
                                     <Input
                                    />
                                </Col>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"Matriz C"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </InputGroup>
                    </Col>
                    <HookCounterInputsNumbers/>
                    <Row className="btn-volver justify-content-center">
                        <Link to='/NoLinealProgramming/ProgramacionCuadratica'><Button>Volver</Button></Link>
                        <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                        <Link to='/NoLinealProgramming/ProgramacionCuadratica/addInput.js'><Button className="btn-calcular" color="success" >Calcular</Button></Link>
                    </Row>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
      }



}

export default Calculate;