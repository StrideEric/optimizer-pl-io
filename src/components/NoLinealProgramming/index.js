import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col, UncontrolledTooltip} from "reactstrap";
import './index.css'

import {BsFillInfoSquareFill} from "react-icons/bs"



const NoLinealProgramming = () => {   
  return(
    <Container fluid className="App">
      <Row>
        <Col xs={12} md={6} className="mx-auto my-5">
          <Jumbotron>
            <Row className="justify-content-center">
                <div className="text-center">
                    <h2>Problemas de Programacion NO Lineal</h2>
                    <h4>¿Qué tipos de problema desea resolver?</h4>
                </div>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button-convexa'>Programación convexa</UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-convexa'> Programación convexa</Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-convexa'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-convexa" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"/NoLinealProgramming/ProgramacionCuadratica"}>
                    <UncontrolledTooltip target='button-cuadratica'>Programación cuadrática</UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-cuadratica'> Programación cuadrática</Button>
                </Link>
                <Link to={"/NoLinealProgramming/ProgramacionCuadratica/info.js"} >
                  <UncontrolledTooltip target='info-cuadratica'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-cuadratica" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button-geometrica'>Programación geométrica</UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-geometrica'> Programación geométrica</Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-geometrica'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-geometrica" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button-estocastica'>Programación estocástica </UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-estocastica'> Programación estocástica </Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-estocastica'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-estocastica" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button-combinaciones'>Método de combinaciones </UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-combinaciones'> Método de combinaciones </Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-combinaciones'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-combinaciones" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="btn-volver justify-content-center">
                <Link to='/home'><Button>Volver</Button></Link>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    )
    };
export default NoLinealProgramming;