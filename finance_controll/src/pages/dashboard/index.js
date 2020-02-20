import React, { Component } from 'react';
import CreateCashDay from '../../components/createCashDay/index'
import Graph from '../../components/graph/index'

export default class Dashboard extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <CreateCashDay />
                </div>
                <div className="col-lg-6">
                    <Graph />
                </div>
            </div>
        </div>
    )
  }
}
