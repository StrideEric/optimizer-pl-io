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
				<li>Restriccion original</li>
                                 <Collapse isOpen={collapseHipotesis} onEntered={onEnteredHipotesis} onExited={onExitedHipotesis}> 
                    		<MathJax.Provider>
                        	<div>
                            		<MathJax.Node formula={"P\\{\\sum_{j=1}^n\E\\{a_{ij}\\}*x_{j} \\leq b_{i} \\}\\geq 1-\\alpha_{i}"} />
                        	</div>
                    		</MathJax.Provider>
                                <li>Restriccion transformada</li>
				<MathJax.Provider>
                        	<div>
                            		<MathJax.Node formula={"\\sum_{j=1}^n\E\\{a_{ij}\\}*x_{j}+K_{\\alpha_{i}}*Y_{i} \\leq b_{i}"} />
                        	</div>
                    		</MathJax.Provider>
				<MathJax.Provider>
                        	<div>
                            		<MathJax.Node formula={"\\sum_{j=1}^n\Var\\{a_{ij}\\}*x_{j}^2-y_{i}^2"} />
                        	</div>
                    		</MathJax.Provider>
                    		
                </Collapse>   
                            </ul>
			    <li>Segundo Caso</li>
                            <ul>
                            	<li>Solo bi es normal con media E(bi) y varianza _var(bi) </li>
                                <li>Restriccion original</li>
                            </ul>
			    <MathJax.Provider>
                        	<div>
                            		<MathJax.Node formula={"P\\{b_{i} \\geq \\sum_{j=1}^n\E\\{a_{ij}\\}*x_{j}   \\}\\geq \\alpha_{i}"} />
                        	</div>
                    	     </MathJax.Provider>
                              <ul>
                            	<li>Restriccion transformada</li>
                            </ul>
				
				<MathJax.Provider>
                        	<div>
                            <MathJax.Node formula={"\\sum_{j=1}^n\a_{ij}*x_{j} \\leq E\\{b_{i}\\}+K_{\\alpha_{i}}*\\sqrt{Var\\{b_{i}}\\}"} />
                        	</div>
                    	    </MathJax.Provider>
                            <li>Tercer Caso</li>
                            <ul>
                            	<li>Todas las aij y bi son variables normales y aleatorias</li>
                                <li>Restriccion original</li>
                            </ul>
			    <MathJax.Provider>
                        	<div>
                            		<MathJax.Node formula={"\\sum_{j=1}^n\a_{ij}*x_{j} \\leq b_{i} "} />
                        	</div>
                    	    </MathJax.Provider>
			    <ul>
                            	<li>Restriccion transformada</li>
                            </ul>
			    <MathJax.Provider>
                        	<div>
                            		<MathJax.Node formula={"\\sum_{j=1}^n\a_{ij}*x_{j} - b_{i} \\leq 0 "} />
                        	</div>
                    	    </MathJax.Provider>
			    <ul>
                            	<li>Dado que las aij y las bi son normales además de la sumatoria, la estocástica se reduce al caso 1 y se trata de una forma similar</li>
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
                            <MathJax.Node formula={"E\\{h_{i}\\}= \\sum_{j=1}^n\E\\{a_{ij}\\}*x_{j}"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Var\\{h_{i}\\} = X^{T}*Di*X"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"h_{i} = \\sum_{j=1}^n\a_{ij}*x_{j}"} />
                        </div>
                    </MathJax.Provider>
                     
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"D_{i} = \\begin{bmatrix}a & b \\ c & d \\end{bmatrix}"} />
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
                            <li><b>Var: </b>Varianza</li>
                            <li><b>E: </b>Media aritmética</li>
                            <li><b>Di: </b>Matriz de covarianza iésima</li>
                            <li><b>K: </b>Valor normal estándar</li>
                            <li><b>α:</b>Nivel de significación</li>
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
