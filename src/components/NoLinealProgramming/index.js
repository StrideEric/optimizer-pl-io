import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button, Jumbotron, Container, Row, Col, UncontrolledTooltip} from "reactstrap";
import './index.css'

import {BsFillInfoSquareFill} from "react-icons/bs"



const StockProblems = () => {   
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
                    <UncontrolledTooltip target='button'>Programación convexa</UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-'> Programación convexa</Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button'>Programación cuadrática</UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-'> Programación cuadrática</Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button'>Programación geométrica</UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-'> Programación geométrica</Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button'>Programación estocástica </UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-'> Programación estocástica </Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3 mx-auto">
              <Col>
                 <Link to={"carpeta"} >
                    <UncontrolledTooltip target='button'>Método de combinaciones </UncontrolledTooltip>
                    <Button size='lg' outline color="success" id='button-'> Método de combinaciones </Button>
                </Link>
                <Link to={"js"} >
                  <UncontrolledTooltip target='info-'>Más Información</UncontrolledTooltip>
                  <BsFillInfoSquareFill id="info-" color='info' style={{color:'#17A2B8', marginLeft:10, fontSize:30}}></BsFillInfoSquareFill>
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
export default StockProblems;