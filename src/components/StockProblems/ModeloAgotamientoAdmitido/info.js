import React from "react";
import {Button, Container, Row, Col, Card,CardText,CardTitle, Jumbotron} from "reactstrap";
import {Link} from 'react-router-dom';
import '../index.css'
import MathJax from "react-mathjax"



const info = () => {
    return(
    <Container fluid className="App">
      <Row>
        <Col xs={12} md={6} className="mx-auto my-5">
          <Jumbotron>
            <Row className="justify-content-center">
                <div>
                    <h2>Demanda constante con agotamiento o simple con escasez</h2>
                </div>
            </Row>
            
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary" >
                    <Row className="justify-content-center">
                        <h5><b>Hipotesis</b></h5>
                    </Row>
                    <ul className='lista'>
                        <li>No tenemos en cuenta si contamos o no con los recursos financieros</li>
                        <li>No hay inflasión</li>
                        <li>Demanda constante y conocida.</li>
                        <li>Resposición instantánea.</li>
                        <li>Costo unitario de almacenamiento por unidad de tiempo 𝑐1, constante.</li>
                        <li>Costo unitario de agotamiento por unidad de tiempo 𝑐2, constante.</li>
                        <li>Costo de preparacion 𝑘, constante.</li>
                        <li>Costo unitario de producto 𝑏, constante.</li>
                        <li>No existen otros costos.</li>
                        <li>No existen restricciones.</li>
                        <li>Al comienzo de cada periodo hay pedidos insatisfechos.</li>
                    </ul>
                </Card>
            </Row>
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary">
                <Row className="justify-content-center">
                        <h5><b>Formulas</b></h5>
                </Row>
                        
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Costo Total De Preparacion = \\frac{D}{q}*K"} />
                    </div>
                </MathJax.Provider>
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Costo Total Del Producto = b*D"} />
                    </div>
                </MathJax.Provider>
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Costo Total De Almacenamiento = \\frac{1}{2}*s^2*\\frac{T}{q}*c1"} />
                    </div>
                </MathJax.Provider>
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Costo De Agotamiento = \\frac{1}{2}*\\frac{T}{q}*(q-s)^2*c2"} />
                    </div>
                </MathJax.Provider>
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Costo Total Esperado = \\frac{D}{q}*K + b*D + \\frac{1}{2}*s^2*\\frac{T}{q}*c1 +\\frac{1}{2}*\\frac{T}{q}*(q-s)^2*c2"} />
                    </div>
                </MathJax.Provider>    
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Costo Total Esperado Optimo =  b*D + \\sqrt{2*T*D*K*c1} * \\sqrt{\\frac{c2}{c1+c2}}"} />
                    </div>
                </MathJax.Provider>    
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"Cantidad Pendiente Optima = q_{0}-s_{0} "} />
                    </div>
                </MathJax.Provider>
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"q_{0} = \\sqrt{\\frac{2*K*D}{T*c1}} * \\sqrt{\\frac{c1+c2}{c2}} "} />
                    </div>
                </MathJax.Provider>
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"s_{0} = \\frac{c2*}{c1+c2} * q_{0} = \\sqrt{\\frac{2*K*D}{T*c1}} * \\sqrt{\\frac{c2}{c1+c2}}"} />
                    </div>
                </MathJax.Provider>    
                <MathJax.Provider>
                    <div>
                        <MathJax.Node formula={"To = \\sqrt{\\frac{2*K*T}{D*c1}} * \\sqrt{\\frac{c1+c2}{c2}}"} />
                    </div>
                </MathJax.Provider>    
                </Card>
            </Row>
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary">
                    <Row className="justify-content-center">
                        <h5><b>Variables</b></h5>
                    </Row>
                    <ul className='lista'>
                        <li><b>D: </b>Demanda</li>
                        <li><b>K: </b>Costo de preparacion</li>
                        <li><b>c1: </b>Costo de almacenamiento</li>
                        <li><b>c2: </b>Costo de agotamiento</li>
                        <li><b>b: </b>Costo unitario de producto</li>
                        <li><b>s: </b>Stock Real Almacenado</li>
                    </ul>
                </Card>
            </Row>
            <Row className="justify-content-left">
                <Card body outline color="secondary">
                    <CardTitle><b>Bibliografia</b></CardTitle>
                    <CardText>Claudio L. R. Sturla</CardText>
                </Card>
            </Row>
            
            
            <Row className="btn-volver justify-content-center">
                <Link to='/StockProblems'><Button>Volver</Button></Link>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    )
    };
export default info;