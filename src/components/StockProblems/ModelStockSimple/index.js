import React from "react";
import { ButtonGroup, Button, Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Jumbotron} from "reactstrap";
import {InputGroupText,InputGroup, Input,InputGroupAddon,UncontrolledPopover,PopoverBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../index.css'


class modelStockSimple extends React.Component{
    constructor (props){
        super(props)
        this.state={
            demanda: null, //D
            costoDePreparacion: null, //K
            costoDeAlmacenamiento: null,//h
            tiempoDeEntrega:null//L
        }
    }

    handleInputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    calcularCostoInventario()
    {
        let {demanda, costoDePreparacion, costoDeAlmacenamiento} = this.state;
        let promedioInventario = this.calcularInventarioOptimo / 2;
        return costoDePreparacion/(this.calcularInventarioOptimo/demanda)+costoDeAlmacenamiento*promedioInventario; //TCL(y)
    }

    calcularInventarioOptimo(){
        let {demanda, costoDePreparacion, costoDeAlmacenamiento} = this.state;
        return (Math.sqrt((2*Number(costoDePreparacion)*Number(demanda))/(Number(costoDeAlmacenamiento)))); //y*
    }

    calcularLongitud(){
        let {demanda, costoDePreparacion, costoDeAlmacenamiento} = this.state;
        let inventario = this.calcularInventarioOptimo();//y*
        return (inventario/Number(demanda)); //n
    }

    calcularPuntoDeReorden(){
        let {demanda, costoDePreparacion, costoDeAlmacenamiento,tiempoDeEntrega} = this.state;
        let inventario = this.calcularInventarioOptimo();//y*
        let duracionCicloDePedido = this.calcularLongitud();//to*
        if(tiempoDeEntrega > duracionCicloDePedido)
        {//para politica 1
            let numeroEntero = Math.trunc(tiempoDeEntrega/duracionCicloDePedido);//n
            let tiempoEfectivoDeEntrega= tiempoDeEntrega- numeroEntero* duracionCicloDePedido;//Lc
            //return puntoDeReorden= tiempoEfectivoDeEntrega * demanda;//punto de reorden
        }else{
            //para politica 2
            return tiempoDeEntrega;
        }
    }


    //El orden es el siguiente
    //Calculas y*
    //Despues el punto de reorden
    //Despues pones la politica que te toco (pueden ser 2 proximo commit te subo si queres los metodos que te definan)
    //y por ultimo el costo del inventario
    render() { 
        let {demanda, costoDePreparacion, costoDeAlmacenamiento} = this.state;
        //let costo = this.calcularCosto();
        let inventario = this.calcularInventarioOptimo();
        let longitud = this.calcularLongitud();
        
        return (
            <Container fluid className="App">
            <Row>
              <Col xs={12} md={8} className="my-4 mx-auto">
                <Jumbotron>
                    <Col>
                        <h1>Cargar el modelo</h1>                   
                    </Col>
                   
                    <Col> 
                        <InputGroup id={"demanda"} key={"demanda"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText name="demanda" id="demanda">
                                    {"D"}
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            className="input-demanda"
                            name={"demanda"}
                            placeholder="Ingresar la demanda"
                            aria-label="Demanda"
                            aria-describedby="demanda"
                            onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-1" id={"costoDePreparacion"} key={"costoDePreparacion"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText name="costoDePreparacion" id="costoDePreparacion">
                                    {"K"}
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"costoDePreparacion"}
                            placeholder="Ingresar el costo de preparacion/producción"
                            aria-label="costoDePreparacion"
                            aria-describedby="costoDePreparacion"
                            onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-1" id={"costoDeAlmacenamiento"} key={"costoDeAlmacenamiento"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText name="costoDeAlmacenamiento" id="costoDeAlmacenamiento">
                                    {"h"}
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"costoDeAlmacenamiento"}
                            placeholder="Ingresar el costo de almacenamiento"
                            aria-label="costoDePreparacion"
                            aria-describedby="costoDePreparacion"
                            onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-1" id={"tiempoDeEntrega"} key={"tiempoDeEntrega"}>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText name="tiempoDeEntrega" id="tiempoDeEntrega">
                                {"L"}
                            </InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"tiempoDeEntrega"}
                            placeholder="Ingresar el tiempo de entrega."
                            aria-label="tiempoDeEntrega"
                            aria-describedby="tiempoDeEntrega"
                            onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </Col>


                    <Col>
                        <h6>Tu demanda es: {demanda}</h6>
                        <h6>Tu costo de preparacion es: ${costoDePreparacion}</h6>
                        <h6>Tu costo de almacenamiento es: ${costoDeAlmacenamiento}</h6>
                        <h6>El tiempo de entrega es: ${this.state.tiempoDeEntrega}</h6>
                        <h4>Cantidad economica de pedido y*= {inventario}</h4>
                        <h4>Longitud del ciclo t0*= {longitud}</h4>
                    </Col>

                    <Row className="btn-volver justify-content-center">
                        <Link to='./'><Button>Volver</Button></Link>
                        <Button className="btn-Calcular" color="success">Calcular</Button>
                    </Row>
                    <Row>
                        
                    </Row>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
      }



}

export default modelStockSimple;