import React from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../service/api'
import { Redirect } from 'react-router-dom'

import "./style.css"

export default class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dados: [],
            quantify: 30,
            erro: ""
        }
        this.data = ""
    }

    mountGraph() {
        // eslint-disable-next-line
        const valorDayEnoughTrue = this.state.dados.map(item => {
            if (item.enough) {
                return item.valorDay
            }
        })
        // eslint-disable-next-line
        const valorDayEnoughFalse = this.state.dados.map(item => {
            if (!item.enough) {
                return item.valorDay
            }
        })
        valorDayEnoughTrue.push(0)
        valorDayEnoughFalse.push(0)


        const labels = this.state.dados.map(item => {
            return `${new Date(item.created).getDate() + 1}/${new Date(item.created).getMonth() + 1}`
        })

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'valor de caixa suficiente',
                    borderColor: '#1c5253',
                    borderWidth: 1,
                    hoverBackgroundColor: '#1c5253',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: valorDayEnoughTrue,
                    backgroundColor: "#3FAF55"
                }, {
                    label: "valor de caixa Insuficiente",
                    backgroundColor: "#B6174B",
                    data: valorDayEnoughFalse
                }
            ]
        };

        return data
    }
    async getDados(num = 0) {
        try {
            const response = await api.get(`/cashRegister/${num}`)
            this.setState({
                dados: response.data
            })
        } catch (error) {
            alert('Sua sessão expirou logue novamente!')
            this.setState({
                erro: 1
            })
        }
    }

    componentDidMount() {
        this.getDados(this.state.quantify)
    }
    render() {
        return (
            <>
                <div className="boxGraph" align="center">
                    {this.state.erro === 1 && <Redirect  to={{pathname: "/login"}} />}
                    <h5 className="text-center">Resultados dos ultimos {this.state.quantify} dias</h5>
                    <Bar
                        className="boxGraph"
                        data={this.mountGraph()}
                        width={60}
                        height={10}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </>
        );
    }
}