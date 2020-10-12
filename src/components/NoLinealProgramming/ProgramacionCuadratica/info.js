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
                    <h2>Programación Cuadratica</h2><br></br>
                </div>
            </Row>
            
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary" >
                    <Row className="justify-content-center" onClick={toggleHipotesis} style={{cursor:"pointer"}}>
                        <h5><b>Hipótesis {statusHipotesis}</b></h5>
                    </Row>
                    <Collapse isOpen={collapseHipotesis} onEntered={onEnteredHipotesis} onExited={onExitedHipotesis}>
                        <ul className='lista'>
                            <li>La siguiente función define una forma cuadrática. <MathJax.Provider><MathJax.Node formula={"X^{T}*D*X"}/></MathJax.Provider></li>
                            <li>Se supone que la matriz D es simetrica y negativa definida.</li>
                            <li>z es estrictamente concava. Por lo tanto, el espacio de soluciones es convexo.</li>
                            <li>X, C, D, A, b, λ, U son matrices.</li>
                            <ul>
                                <li>
                                    <MathJax.Provider>
                                            <MathJax.Node formula={
                                                String.raw`X=\begin{pmatrix}
                                                x_{11} & x_{12} & \dots & x_{1n} 
                                                \end{pmatrix}^{T}`
                                            } />
                                    </MathJax.Provider>                                   
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <MathJax.Provider>
                                            <MathJax.Node formula={
                                                String.raw`C=\begin{pmatrix}
                                                c_{11} & c_{12} & \dots & c_{1n} 
                                                \end{pmatrix}`
                                            } />
                                    </MathJax.Provider>                                   
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <MathJax.Provider>
                                            <MathJax.Node formula={
                                                String.raw`b=\begin{pmatrix}
                                                b_{11} & b_{12} & \dots & b_{1n} 
                                                \end{pmatrix}^{T}`
                                            } />
                                    </MathJax.Provider>                                   
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <MathJax.Provider>
                                        <div>
                                            <MathJax.Node formula={
                                                String.raw`A=\begin{pmatrix}
                                                a_{11} & a_{12} & \dots & a_{1n} \\ 
                                                a_{21} & a_{22} & \dots & a_{2n} \\ 
                                                \vdots & \vdots & \ddots & \vdots \\ 
                                                a_{m1} & a_{m2} & \dots & a_{mn}
                                                \end{pmatrix}`
                                            } />
                                        </div>
                                    </MathJax.Provider>                                   
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <MathJax.Provider>
                                        <div>
                                            <MathJax.Node formula={
                                                String.raw`D=\begin{pmatrix}
                                                d_{11} & d_{12} & \dots & d_{1n} \\ 
                                                d_{21} & d_{22} & \dots & d_{2n} \\ 
                                                \vdots & \vdots & \ddots & \vdots \\ 
                                                d_{m1} & d_{m2} & \dots & d_{mn}
                                                \end{pmatrix}`
                                            } />
                                        </div>
                                    </MathJax.Provider>                                   
                                </li>
                            </ul>
                            <ul>
                                <li>
                                <MathJax.Provider>
                                    <div>
                                        <MathJax.Node formula={
                                            String.raw`\lambda=\begin{pmatrix}
                                            \lambda_{11} & \lambda_{12} & \dots & \lambda_{1n} 
                                            \end{pmatrix}^{T}`
                                        } />
                                    </div>
                                </MathJax.Provider>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                <MathJax.Provider>
                                    <div>
                                        <MathJax.Node formula={
                                            String.raw`U=\begin{pmatrix}
                                            u_{11} & u_{12} & \dots & u_{1n} 
                                            \end{pmatrix}^{T}`
                                        }/>
                                    </div>
                                </MathJax.Provider>
                                </li>
                            </ul>
                            <li>
                                <MathJax.Provider>
                                    <div>
                                        <MathJax.Node formula={String.raw`A*X\leq b`} />
                                    </div>
                                </MathJax.Provider>
                            </li>
                            <li>
                                <MathJax.Provider>
                                    <div>
                                        <MathJax.Node formula={String.raw`X\geq0`}/>
                                    </div>
                                </MathJax.Provider>
                            </li>
                            
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
                            <MathJax.Node formula={"z=C*X+X^{T}*D*X"} />
                        </div>
                    </MathJax.Provider>

                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={
                                String.raw`G(X)=
                                \begin{pmatrix}A \\ -I \\ \end{pmatrix}X-
                                \begin{pmatrix}b \\ 0 \\ \end{pmatrix}
                                \leq0`
                            } />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={
                                String.raw`\triangledown z - (\lambda^{T},U^{T})*\triangledown G(X)=0`
                            } />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={
                                String.raw`\triangledown z = C+2*X^{T}*D`
                            } />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={
                                String.raw`\triangledown G(X)=
                                \begin{pmatrix}A \\ -I \\ \end{pmatrix}`
                            } />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={
                                String.raw`S=b-A*X \geq 0 `
                            } />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={
                                String.raw`\begin{pmatrix}
                                -2D & A^{T} & -I & 0 \\ A & 0 & 0 & I \\ 
                                \end{pmatrix}
                                \begin{pmatrix}
                                X \\ \lambda \\ U \\ S
                                \end{pmatrix} =
                                \begin{pmatrix}
                                C^{T} \\ b
                                \end{pmatrix}`
                            } />
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
                            <li><b> C: </b> Matriz 1 </li>
                            <li><b> D: </b> Matriz 2 </li>
                            <li><b> A: </b> Matriz 3 </li>
                            <li><b> b: </b> Numero </li>
                            <li><b> S: </b> Variables de holgura de las restricciones </li>
                            <li><b> λ: </b> Multiplicador de Lagrange </li>
                            <li><b> U: </b> Multiplicador de lagrange </li>
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
                <Link to='/NoLinealProgramming'><Button>Volver</Button></Link>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    )
    };
export default Info;