import React, {useState} from "react";
import {Button, Container, Row, Col, Card, CardText, CardTitle, Jumbotron, Collapse} from "reactstrap";
import {Link} from 'react-router-dom';
import '../index.css'
import MathJax from "react-mathjax"



const Info = () => {

    //DEFINIMOS ESTOS ESTADOS PARA MANEJAR LOS COLLAPSE
    //Para controlar el collapse de Hipotesis
    const [collapseHipotesis, setCollapseHipotesis] = useState(false);
    const [statusHipotesis, setStatusHipotesis] = useState('+');
    const onEnteredHipotesis = () => setStatusHipotesis('-');
    const onExitedHipotesis = () => setStatusHipotesis('+');
    const toggleHipotesis = () => setCollapseHipotesis(!collapseHipotesis);

    //Para controlar el collapse de Formulas
    const [collapseFormulas, setCollapseFormulas] = useState(false);
    const [statusFormulas, setStatusFormulas] = useState('+');
    const onEnteredFormulas = () => setStatusFormulas('-');
    const onExitedFormulas = () => setStatusFormulas('+');
    const toggleFormulas = () => setCollapseFormulas(!collapseFormulas);

    //Para controlar el collapse de Variables
    const [collapseVariables, setCollapseVariables] = useState(false);
    const [statusVariables, setStatusVariables] = useState('+');
    const onEnteredVariables = () => setStatusVariables('-');
    const onExitedVariables = () => setStatusVariables('+');
    const toggleVariables = () => setCollapseVariables(!collapseVariables);


    return(
    <Container fluid className="App">
      <Row>
        <Col xs={12} md={6} className="mx-auto my-5">
          <Jumbotron>
            <Row className="justify-content-center">
                <div>
                    <h2>Programacion Estocástica</h2><br></br>
                </div>
            </Row>
            
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary" >
                    <Row className="justify-content-center" onClick={toggleHipotesis} style={{cursor:"pointer"}}>
                        <h5><b>Casos {statusHipotesis}</b></h5>
                    </Row>
                    <Collapse isOpen={collapseHipotesis} onEntered={onEnteredHipotesis} onExited={onExitedHipotesis}>
                        <ul className='lista'>
                            <li>Primer Caso</li>
                            <ul>
                            	<li>Solo aij es aleatoria para toda i y toda j</li>
                            </ul>
			    <li>Segundo Caso</li>
                            <ul>
                            	<li>Solo bi es normal con media E(bi) y varianza _var(bi) </li>
                            </ul>
                            <li>Tercer Caso</li>
                            <ul>
                            	<li>Todas las aij y bi son variables normales y aleatorias</li>
                            </ul>
                        </ul>
                    </Collapse>
                </Card>
            </Row>
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary">
                <Row className="justify-content-center" onClick={toggleFormulas} style={{cursor:"pointer"}}>
                    <h5><b>Fórmulas {statusFormulas}</b></h5>
                </Row>

                <Collapse isOpen={collapseFormulas} onEntered={onEnteredFormulas} onExited={onExitedFormulas}> 
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Media = Sum(E(aij)*xj)"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Varianza(hi) = X**T*Di*X"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"hi = Sum(aij*Xj)"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Costo Total Esperado = \\frac{D}{q}*K + b*D + \\frac{1}{2}*q*T*c1 "} />
                        </div>
                    </MathJax.Provider>    
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Costo Total Esperado Optimo =  b*D + \\sqrt{2*T*D*K*c1} "} />
                        </div>
                    </MathJax.Provider>    
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"q_{0} = \\sqrt{\\frac{2*K*D}{T*c1}} "} />
                        </div>
                    </MathJax.Provider>    
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"To = \\frac{T}{n_{0}} = \\frac{T*q_{0}}{D} = \\sqrt{\\frac{2*K*T}{D*c1}} "} />
                        </div>
                    </MathJax.Provider>
                </Collapse>    
                </Card>
            </Row>
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary">
                    <Row className="justify-content-center" onClick={toggleVariables} style={{cursor:"pointer"}}>
                        <h5><b>Variables {statusVariables}</b></h5>
                    </Row>

                    <Collapse isOpen={collapseVariables} onEntered={onEnteredVariables} onExited={onExitedVariables}>
                        <ul className='text-left'>
                            <li><b>_var: </b>Varianza</li>
                            <li><b>E: </b>Media aritmética</li>
                            <li><b>Di: </b>Matriz de covarianza iésima</li>
                            <li><b>b: </b>Costo Unitario del Producto</li>
                            <li><b>q: </b>Lote Optimo</li>
                            <li><b>t0: </b>Tiempo que dura el lote optimo antes de agotarse</li>
                            <li><b>CTPrep: </b>Costo Total de Preparación</li>
                            <li><b>CTProd: </b>Costo Total propio del producto</li>
                            <li><b>CTA: </b>Costo Total de Almacenamiento</li>
                            <li><b>CTE: </b>Costo Total Esperado</li>
                        </ul>
                    </Collapse>
                </Card>
            </Row>
            <Row className="justify-content-left">
                <Card body outline color="secondary">
                    <CardTitle><b>Bibliografía</b></CardTitle>
                    <CardText>Hamdy A. Taha</CardText>
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
export default Info;
