import React, { Component } from 'react';
import api from '../../service/api'

class CreateCashDay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: "",
            valorDay: 0,
            date: "",
        }
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    async handleSignIn(e) {
        e.preventDefault()
        const {date, valorDay} = this.state
        const newCash = {
                "valorDay": valorDay,
                "created": date
        }
        if(!date || !valorDay || date.split('-')[2] > new Date().getDate()) {
            this.setState({error: 'Verifique os dados'})
        } 
        else {
            try {
                await api.post("/cashRegister", newCash)
                alert('Salvo com sucesso')
                window.location.reload()
            } catch (error) {
                this.setState({
                    error: 'Erro ao salvar verifique os dados'
                })
            }
        }
    }
    render() {
        return (
            <>
                    <form className="p-3 rounded">
                        <h4 className="text-center text-primary"><i className="fas fa-cash-register"></i></h4>
                        {this.state.error && <p className="error text-center">{this.state.error}</p>}
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                id="inputEmail"
                                aria-describedby="cashRegisterHelp"
                                required="required"
                                onChange={e => this.setState({ date: e.target.value })} />
                            <small id="CashRegisterHelp" className="form-text">Data única, apenas um registro por dia</small>
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Digite o valor final do caixa"
                                required="required"
                                pattern="[0-9]+$"
                                onChange={e => this.setState({ valorDay: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-block btn-custom" onClick={this.handleSignIn}>Cadastrar</button>
                    </form>
            </>
        )
    }
}

export default CreateCashDay