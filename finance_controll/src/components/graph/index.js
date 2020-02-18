import React from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../service/api'

import "./style.css"

export default class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dados: [],
            quantify: 1
        }
        this.data = ""
        this.handleClickDates = this.handleClickDates.bind(this)
    }

    mountGraph() {
        const valorDay = this.state.dados.map(item => {
            return item.valorDay
        })
        valorDay.push(0)

        const labels = this.state.dados.map(item => {
            return new Date(item.created).getDay()
        })

        const color = this.state.dados.map(item => {
            if (item.enough) {
                return "#3FAF55"
            } else {
                return "#B6174B"
            }
        })

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'valor de caixa suficiente',
                    backgroundColor: '#1c5253',
                    borderColor: '#1c5253',
                    borderWidth: 1,
                    hoverBackgroundColor: '#1c5253',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: valorDay,
                    backgroundColor: color
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
            this.mountGraph()
        } catch (error) {
            console.log(error)
        }
    }

    handleClickDates(e) {
        console.log(this.state.quantify)
        e.preventDefault()
        this.setState({
            quantify: 7
        })
    }

    componentDidMount() {
        this.getDados(this.state.quantify)
    }
    render() {
        return (
            <>
                <div className="boxGraph">
                    <button className="btn btn-priamary" onClick={this.handleClickDates}>7</button>
                    <h2 className="text-center">Resultados dos ultimos 7 dias</h2>
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