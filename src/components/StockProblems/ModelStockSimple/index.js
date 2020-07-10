import React from "react";
import { ButtonGroup, Button, Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Jumbotron, Dropdown, DropdownItem, ButtonDropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import {InputGroupText,InputGroup, Input,InputGroupAddon,PopoverBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../index.css'
import { Variable } from "javascript-lp-solver/src/expressions";


class modelStockSimple extends React.Component{
    constructor (props){
        super(props)
        this.state={
            demanda: null, //D
            costoDePreparacion: null, //K
            costoDeAlmacenamiento: null,//h
            tiempoDeEntrega:null,//L
            politica:null,// establece que politica usar
            unidadCostoDeAlmacenamiento:1, //ESTA NO ESTAMOS OCUPANDO POR EL MOMENTO
            unidadesAlmacenamiento: null,
            unidadesDemanda:null,
            cantidadEconomica:null,
            mostrarResultados: false,
            caso0: false,
            caso1: false,
            caso2: false,
            caso3: false,
            inputUpdated: false,
            incompleto: false,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.inputUpdated){
            this.setState({inputUpdated:false})
            this.controlarCasos();
        } 
    }

    
    handleInputChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
            inputUpdated: true,
        })
    }
    
    calcularInventarioOptimo(){
        let {demanda, costoDePreparacion, costoDeAlmacenamiento, unidadCostoDeAlmacenamiento} = this.state;
        return (Math.sqrt((2*Number(costoDePreparacion)*Number(demanda))/(Number(costoDeAlmacenamiento)*unidadCostoDeAlmacenamiento))); //y*
    }

    calcularCostoInventario()
    {
        let {demanda, costoDePreparacion, costoDeAlmacenamiento,unidadCostoDeAlmacenamiento} = this.state;
        let y = this.calcularInventarioOptimo();
        let promedioInventario = (y / 2);
        return ((costoDePreparacion/(y /demanda))+ (costoDeAlmacenamiento*unidadCostoDeAlmacenamiento*promedioInventario)); //TCL(y)
    }

    calcularLongitud(){
        let {demanda} = this.state;
        let inventario = this.calcularInventarioOptimo();//y*
        return (inventario/Number(demanda)); //to*
    }

    calcularPuntoDeReorden(){
        let {demanda,politica,tiempoDeEntrega} = this.state;
        let duracionCicloDePedido = this.calcularLongitud();//to*
        if(tiempoDeEntrega > duracionCicloDePedido){ //SI L > to*, calculamos Le
        //para politica 1 
            let n = Math.trunc(tiempoDeEntrega/duracionCicloDePedido);//n
            let tiempoEfectivoDeEntrega= tiempoDeEntrega - (n * duracionCicloDePedido);//Le
            return (tiempoEfectivoDeEntrega * demanda);//punto de reorden
        }else{
            //para politica 2

            return (tiempoDeEntrega * demanda); //punto de reorden en esta politica se calcula L*demanda
        }
    }

    
    controlarCasos = () => { //Con esta funcion vamos a controlar que datos nos ingresa el usuario para ver que calculamos
        this.controlarCaso0();
        this.setState({mostrarResultados:false})
    }

    controlarCaso0 = () =>{
        let {demanda, costoDePreparacion, costoDeAlmacenamiento, tiempoDeEntrega} = this.state;
        console.log(this.state)
        let camposAControlar = [demanda, costoDePreparacion, costoDeAlmacenamiento, tiempoDeEntrega]
        let caso0 = camposAControlar.every(campo => campo)

        console.log(camposAControlar)

        this.setState({caso0});  
    }
    
    calcularResultados = () => {
        let {caso0, caso1, caso2, caso3} = this.state;
        let casosAControlar = [caso0, caso1, caso2, caso3]
        let mostrarResultados = casosAControlar.some(caso => caso);
        let incompleto = !casosAControlar.some(caso => caso);
        this.setState({mostrarResultados, incompleto}) //Esto asigna mostrarResultados (la variable) a mostrarResultados el estado del objeto

    }


    //El orden es el siguiente
    //Calculas y*
    //Despues el punto de reorden
    //Despues pones la politica que te toco (pueden ser 2 proximo commit te subo si queres los metodos que te definan)
    //y por ultimo el costo del inventario
    //si la politica es true entonces la politica es :
    //Pedir {CalcularInventarioOptimo()} unidades cada {CalcularLongitud()} unidades de tiempo
    //sino
    //Pedir la cantidad {CalcularInventarioOptimo()} siempre que la cantidad de inventario baje de {CalcularPuntoDeReorden()} unidades
    render() { 
        let {demanda, costoDePreparacion, costoDeAlmacenamiento, tiempoDeEntrega,unidadCostoDeAlmacenamiento, incompleto} = this.state;
        let {caso0, caso1, caso2, caso3, mostrarResultados} = this.state;
        //let costo = this.calcularCosto();
        let inventario = this.calcularInventarioOptimo();
        let longitud = this.calcularLongitud();
        let TCU = this.calcularCostoInventario();
        let puntoDeReorden = this.calcularPuntoDeReorden();

        //AGREGAMOS ESTA FUNCION PARA CONTROLAR QUE DEPENDIENDO DEL TIPO DE POLITICA IMPRIMA UNA COSA O LA OTRA
        let controlarPolitica = a => (tiempoDeEntrega > longitud) ? 
        <h4>Pedir {inventario.toFixed(2)} {this.state.unidadesDemanda} cuando el inventario baje de {puntoDeReorden.toFixed(2)} {this.state.unidadesDemanda}</h4> : <h4>Pedir {inventario.toFixed(2)} {this.state.unidadesDemanda} cada {longitud.toFixed(2)} {this.state.unidadesAlmacenamiento}</h4>; 
        
              
        
        return (
            <Container fluid className="App"> 
            <Row>
              <Col xs={12} md={8} className="my-4 mx-auto">
                <Jumbotron>
                    <Col>
                        <h2>Modelo clasico con cantidad economica de pedido</h2><br></br>                   
                    </Col>
                    {/*<Col>
                    <div>
                        <div className="justify-content-center">
                            <div className="info-descarga">
                            <i class="fas fa-info-circle"></i>
                            <a>Las números decimales ingresar con . (Ejemplo: 0.02)</a>
                            </div>
                        </div>
                    </div>
                    </Col>*/}
                   
                    <Col> 
                        <InputGroup className="mt-3" id={"demanda"} key={"demanda"}>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"D"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            className="input-demanda"
                            name={"demanda"}
                            placeholder="Ingresar la demanda"
                            aria-label="Demanda"
                            aria-describedby="demanda"
                            onChange={this.handleInputChange}
                            />
                            <InputGroupAddon className="input-unidades" addonType="prepend">
                            <InputGroupText><b>{"Unidades"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            className="input-unidadesDemanda"
                            name={"unidadesDemanda"}
                            placeholder="Ingresar las unidades"
                            aria-label="UnidadDemanda"
                            aria-describedby="unidadDemanda"
                            onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-3" id={"costoDePreparacion"} key={"costoDePreparacion"}>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"K"}</b></InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>{"$"}</InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"costoDePreparacion"}
                            placeholder="Ingresar el costo por pedido"
                            aria-label="costoDePreparacion"
                            aria-describedby="costoDePreparacion"
                            onChange={this.handleInputChange}
                            />
                            
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-3" id={"costoDeAlmacenamiento"} key={"costoDeAlmacenamiento"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"h"}</b></InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText >{"$"}</InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"costoDeAlmacenamiento"}
                            placeholder="Ingresar el costo de almacenamiento"
                            aria-label="costoDePreparacion"
                            aria-describedby="costoDePreparacion"
                            onChange={this.handleInputChange}
                            />
                            
                            
                            <InputGroupAddon className="unidadesAlmacenamiento" addonType="prepend">
                                <InputGroupText><b>{"Unidades"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            className=""
                            name={"unidadesAlmacenamiento"}
                            placeholder="Ingresar las unidades de tiempo"
                            onChange={this.handleInputChange}
                            />
                        
                        
                         {/*<InputGroupAddon addonType="prepend">
                            <Input type="select" name={"unidadCostoDeAlmacenamiento"} 
                            id="unidadCostoDeAlmacenamiento"
                            onChange={this.handleInputChange}>
                                <option value="1" >Dia</option>
                                <option value="7">Semana</option>
                                <option value="30">Mes</option>
                                <option value="365">Año</option>
                            </Input>
                        </InputGroupAddon>*/} {/* ESTO DEJO COMENTADO PQ POR EL MOMENTO NO VAMOS OCUPAR */}
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-3" id={"tiempoDeEntrega"} key={"tiempoDeEntrega"}>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText name="tiempoDeEntrega" id="tiempoDeEntrega">
                                <b>{"L"}</b>
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
                        <InputGroup className="mt-3">
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"t0*"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"longitudCiclo"}
                            placeholder="Ingresar la longitud del ciclo."
                            onChange={this.handleInputChange}
                            />                        
                        </InputGroup>
                    </Col>

                    <Col>
                        <InputGroup className="mt-3">
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText><b>{"y*"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            name={"cantidadEconomica"}
                            placeholder="Ingresar la longitud del ciclo."
                            onChange={this.handleInputChange}
                            />                        
                        </InputGroup>
                    </Col>
                    
                    
                    {mostrarResultados && caso0 && (     
                    <Col>
                        <h4>TU CASO ES EL 0</h4>
                        <h6>Tu demanda es: {demanda}</h6>
                        <h6>Tu costo de preparacion es: ${costoDePreparacion}</h6>
                        <h6>Tu costo de almacenamiento es: ${costoDeAlmacenamiento}</h6>
                        <h6>El tiempo de entrega es: {this.state.tiempoDeEntrega}</h6>
                        <h4>Cantidad economica de pedido y*= {inventario.toFixed(2)} {this.state.unidadesDemanda}</h4>
                        <h4>Longitud del ciclo t0*= {longitud.toFixed(2)} {this.state.unidadesAlmacenamiento}</h4>
                        <h4>El costo de inventario TCU(y) es: ${TCU.toFixed(2)}</h4>
                        <h4>El punto de reorden es: {puntoDeReorden.toFixed(2)}</h4>
                        {controlarPolitica()}
                    </Col>)
                    }
                    {caso1 && <h4>TU CASO ES EL 1</h4>}
                    {caso2 && <h4>TU CASO ES EL 2</h4>}
                    {caso3 && <h4>TU CASO ES EL 3</h4>}
                       
                    {incompleto && <h1>INCOMPLETO</h1>}
                    
                    
                    <Row className="btn-volver justify-content-center">
                        <Link to='./'><Button>Volver</Button></Link>
                        <Button className="btn-Calcular" color="success" onClick={this.calcularResultados}>Calcular</Button>
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