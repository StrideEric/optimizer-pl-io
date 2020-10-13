import React from "react";
import { Button, Container, Row, Col, Card,Jumbotron} from "reactstrap";
import {InputGroupText,InputGroup, Input,InputGroupAddon,CardText, Table, FormGroup, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../index.css'
//import Graph from "../Graph";



class ProgramacionCuadratica extends React.Component{
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
/*
    //CALCULAR q0
    calcularLoteOptimo() {
        let {costoDePreparacion, demanda, costoDeAlmacenamiento} = this.state;
        let loteOptimo
        loteOptimo = (Math.sqrt((2*Number(costoDePreparacion)*Number(demanda))/(Number(costoDeAlmacenamiento))));
        
        if (loteOptimo>demanda){ //Si el q0 calculado es mas grande que la demanda entonces como lote optimo va la demanda
            this.setState({loteOptimo: demanda})
        }else{
            this.setState({loteOptimo})
        }
    }

    //CALCULAR t0
    calcularTiempoEntrePedidos(){
        let {costoDePreparacion, demanda, costoDeAlmacenamiento} = this.state
        this.setState({tiempoEntrePedidos: (Math.sqrt(2*Number(costoDePreparacion)/ ((Number(demanda))*(Number(costoDeAlmacenamiento))))) })
        

    }

    //CALCULAR COSTO DE PREPARACION TOTAL
    calcularCostoPreparacionTotal(){
        let {demanda, loteOptimo, costoDePreparacion} = this.state;
        this.setState({costoDePreparacionTotal: ((Number(demanda)/Number(loteOptimo))*Number(costoDePreparacion)) })
    }

    //CALCULAR COSTO DEL PRODUCTO TOTAL
    calcularCostoProductoTotal(){
        let {costoDeProducto, demanda} = this.state;
        this.setState({costoDeProductoTotal: (Number(costoDeProducto)*Number(demanda)) })
    }

    //CALCULAR COSTO TOTAL DE ALMACENAMIENTO
    calcularCostoAlmacenamientoTotal(){
        let {loteOptimo, costoDeAlmacenamiento} = this.state;
        this.setState({costoDeAlmacenamientoTotal: ((1/2)*Number(loteOptimo)*Number(costoDeAlmacenamiento)) })
    }

    //CALCULAR n
    calcularn(){
        let {demanda, loteOptimo} = this.state
        this.setState({ n: ( Number(demanda)/Number(loteOptimo) ) })
    }

    //CALCULAR CTE 
    calcularCTE(){
        let {costoDePreparacionTotal, costoDeProductoTotal, costoDeAlmacenamientoTotal} = this.state
        let sum = (Number(costoDePreparacionTotal) + Number(costoDeProductoTotal) + Number(costoDeAlmacenamientoTotal))
        this.setState({CTE: (Number(sum))})
    }

    //CALCULAR CTE OPTIMO
    calcularCTEoptimo(){
        let {costoDeProducto, costoDeAlmacenamiento, demanda, costoDePreparacion} = this.state
        let bD, raiz2TDKC1
        bD = (Number(costoDeProducto)*Number(demanda))
        raiz2TDKC1 = ( Math.sqrt(2*Number(demanda)*Number(costoDePreparacion)*Number(costoDeAlmacenamiento)) )
        console.log(bD,raiz2TDKC1)
        this.setState({CTEoptimo: (bD + raiz2TDKC1)})
        console.log(bD + raiz2TDKC1)
    }


    mostrarResultados = () => {
        
        let {demanda, costoDePreparacion, costoDeAlmacenamiento, costoDeProducto} = this.state;
        let combinacion1 = [demanda, costoDePreparacion, costoDeAlmacenamiento, costoDeProducto] //Cargamos un arreglo
        let control1 = combinacion1.every(caso => caso); //Si devuelve true es porque todos los elementos del arreglo estan cargados 
        
        if (control1){ //SI TODOS LOS CAMPOS ESTAN CARGADOS ENTONCES CALCULO TODO Y MUESTRO
            this.calcularLoteOptimo()
            this.calcularTiempoEntrePedidos()
        
            setTimeout(() => {
                this.calcularn()
                this.calcularCostoPreparacionTotal()
                this.calcularCostoProductoTotal()
                this.calcularCostoAlmacenamientoTotal()
                this.calcularCTE()
                this.calcularCTEoptimo()
            }, 1);

            this.setState({mostrarResultados: true})
            this.setState({incompleto: false})

        }else{
            this.setState({incompleto:true}) //PONGO A INCOMPLETO EN TRUE Y MUESTRO LA ALERTA DE COMPLETAR CAMPOS
        }
        
        
                 
    }
*/

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
                        <InputGroup className="mt-3" id={"matrices_z"} key={"matrices_z"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"Dimensiones de matriz C"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            type="number" min="1" max="4"
                            className="input-matriz_c"
                            name={"matriz_c_filas"}
                            value={matriz_c_filas}
                            placeholder="Filas"
                            aria-label="matriz_c_filas"
                            aria-describedby="matriz_c_filas"
                            onChange={this.handleInputChange}
                            />
                            <Input
                            type="number" min="1" max="4"
                            className="input-matriz_c"
                            name={"matriz_c_columnas"}
                            value={matriz_c_columnas}
                            placeholder="Columnas"
                            aria-label="matriz_c_columnas"
                            aria-describedby="matriz_c_columnas"
                            onChange={this.handleInputChange}
                            />
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"Dimensiones de la matriz D"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input
                            type="number" min="1" max="4"
                            className="input-matriz_d"
                            name={"matriz_d_filas"}
                            placeholder="Filas"
                            aria-label="matriz_d_filas"
                            aria-describedby="matriz_d_filas"
                            onChange={this.handleInputChange}
                            />
                            <Input
                            type="number" min="1" max="4"
                            className="input-matriz_d"
                            name={"matriz_d_columnas"}
                            placeholder="Columnas"
                            aria-label="matriz_d_columnas"
                            aria-describedby="matriz_d_columnas"
                            onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mt-3" id={"matriz_restriccion"} key={"matriz_restriccion"}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"Dimensiones de la matriz A"}</b></InputGroupText>
                            </InputGroupAddon>
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
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><b>{"¿Que desea hacer con Z?"}</b></InputGroupText>
                            </InputGroupAddon>
                            <Input type="select" name="select_z" id="select_z">
                                <option>Maximizar</option>
                                <option>Minimizar</option>
                            </Input>
                        </InputGroup>
                    </Col>
                    <Row className="btn-volver justify-content-center">
                        <Link to='/NoLinealProgramming'><Button>Volver</Button></Link>
                        <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                        <Link to='/NoLinealProgramming/ProgramacionCuadratica/result.js'><Button className="btn-siguiente" color="success" >Siguiente</Button></Link>
                    </Row>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
      }



}

export default ProgramacionCuadratica;