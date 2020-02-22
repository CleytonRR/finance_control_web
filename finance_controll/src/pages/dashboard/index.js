import React, { Component } from 'react';
import CreateCashDay from '../../components/createCashDay/index'
import Graph from '../../components/graph/index'
import {logout} from '../../service/auth'
import {Link} from 'react-router-dom'

import "./style.css"

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-warning" onClick={e => logout()}>
                        <Link to="/"><i class="fas fa-sign-out-alt"></i>Sair</Link>
                    </button>
                </div>
                <h3 className="text-center">
                    Você pode cadastrar o registro do dia e ver o resultado dos ultimos 30 dias
                </h3>
                <div className="d-flex justify-content-center">
                    <div className="row custom-widt mt-5">
                        <div className="col-lg-6">
                            <CreateCashDay />
                        </div>
                        <div className="col-lg-6">
                            <Graph />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
