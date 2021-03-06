import React from 'react';
import { Link } from 'react-router-dom'
import { Fade, Flip } from "react-reveal"

import graph from '../../assets/image/graph.png'
import newCashRegister from '../../assets/image/newCashRegister.png'
import "./styles.css"

export default function Main() {
    return (
        <>
            <div className="container">
                {/* Menu */}
                <nav className="navbar navbar-expand-lg navbar-dark color-navbar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav mr-auto mx-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i>Logar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/singUp" className="nav-link"><i className="fas fa-user-plus"></i>Novo cadastro</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Fim menu */}

                {/* Header */}
                <header className="d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="font-weight-bolder text-center  display-3">Finance control</h1>
                        <p className="text-center">Controle financeira para pequenas empresas</p>
                    </div>
                </header>

                {/* Beneficios */}
                <Flip top>
                    <section className="section-tics">
                        <div className="row no-gutters mt-2">
                            <div className="col-md-4 benefits d-flex justify-content-center align-items-center">
                                <div className="inner d-flex justify-content-center align-items-center">
                                    <div>
                                        <h3 className="text-center"><i className="fas fa-business-time"></i></h3>
                                        <p className="text-center">Economia de tempo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 benefits d-flex justify-content-center align-items-center">
                                <div className="inner d-flex justify-content-center align-items-center">
                                    <div>
                                        <h3 className="text-center"><i className="fas fa-chart-bar"></i></h3>
                                        <p className="text-center">Resultado com visualização simples</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 benefits d-flex justify-content-center align-items-center">
                                <div className="inner d-flex justify-content-center align-items-center">
                                    <div>
                                        <h3 className="text-center"><i className="fas fa-calculator"></i></h3>
                                        <p className="text-center">controle financeiro aprimorado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Flip>
                {/* Fim beneficios */}
                <div className="container">
                    {/* Funções */}
                    <section className="detail">
                        <Fade left>
                            <div className="row no-gutters mt-2 d-flex align-items-center justify-content-around">
                                <div className="col-lg-7">
                                    <img className="img-fluid ml-5" src={graph} alt="Visualização em gráficos" />
                                </div>
                                <div className="col-lg-5 detail-text d-flex justify-content-center align-items-center">
                                    <div>
                                        <h1 className="text-center detail-text">Gráfico com os resultados dos ultimos 30 dias</h1>
                                        <p className="text-center detail-text">Por meio do gráfico você ver o desempenho da sua empresa nos ultimos 30 dias, de uma maneira simples!</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </section>
                    <section className="detail">
                        <Fade left>
                            <div className="row no-gutters mt-2 d-flex align-items-center justify-content-around">
                                <div className="col-lg-7">
                                    <img className="img-fluid ml-5" src={newCashRegister} alt="Formulário para a criação de um novo registro de caixa" />
                                </div>
                                <div className="col-lg-5 detail-text d-flex justify-content-center align-items-center">
                                    <div>
                                        <h1 className="text-center detail-text">Um cadastro por dia</h1>
                                        <p className="text-center detail-text">Quando você fechar o caixa, você deve cadastra-lo na plataforma, isso garante um maior controle!</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </section>
                    {/* Fim funções */}

                    {/* Cadastra-se */}
                    <section className="sign-up d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-center">Gostou? faça um teste</h3>
                        <button className="mt-2 btn btn-primary">
                            <Link to="/singUp" className="btn-signUp">Cadatra-se</Link>
                        </button>
                    </section>
                    {/* Fim cadastro */}

                    {/* Footer */}
                    <footer className="d-flex flex-column align-items-center justify-content-center">
                        <p className="text-center"><i className="far fa-copyright"></i> Finance control, 2020</p>
                        <small>O sistema é uma implentação didática e não deve ser utilizado como uma ferramenta de uso constante, tendo em vista que está hospedado com recursos limitados.</small>
                    </footer>
                    {/* Footer */}
                </div>
            </div>
        </>
    );
}
