import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, withRouter } from 'react-router-dom'
import validatorPassword from '../../util/checkPassword'
import api from '../../service/api'
import { login } from '../../service/auth'

import "./style.css"

class SingUp extends Component {
    state = {
        email: "",
        expenditure: "",
        password: "",
        confirmPassword: "",
        erro: ""
    }

    handleSignUp = async e => {
        e.preventDefault()
        const { email, expenditure, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            this.setState({ erro: "As senhas precisam ser iguais" })
        }

        if (!validatorPassword.testePass(password)) {
            this.setState({ erro: "A senha precisa ter 8 digitos, uma letra maiscula, um caracter especial e um número" })
        }

        try {
            await api.post("/user", { email, password, expenditure })
            alert("Cadastro feito com sucesso")
            const response = await api.post("/login", { email, password })
            login(response.data.token)
            this.props.history.push("/dashboard")
        } catch (error) {
            this.setState({ erro: "Erro ao cadastrar usuário, verifique email e senha" })
        }
    }
    render() {
        return (
            <div className="box align-self-lg-center">
                <form className="p-3 rounded">
                    <h4 className="text-center text-primary"><i class="fas fa-user-circle"></i></h4>
                    {this.state.erro && <p className="text-center erroMessage">{this.state.erro}</p>}
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            onChange={e => this.setState({ email: e.target.value })}
                            aria-describedby="emailHelp"
                            required="required"
                            placeholder="Digite seu email" />
                        <small id="emailHelp" className="form-text">Email único, não compartilhe</small>
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            id="inputExpenditure"
                            onChange={e => this.setState({ expenditure: e.target.value })}
                            placeholder="Digite o custo fixo de sua empresa"
                            required="required"
                            pattern="[0-9]+$"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            required="required"
                            onChange={e => this.setState({ password: e.target.value })}
                            placeholder="Digite sua senha" />
                        <small className="form-text">A senha deve possuir no mínimo 8 caracteres, uma letra maiscula, um número e um caracter especial</small>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            required="required"
                            onChange={e => this.setState({ confirmPassword: e.target.value })}
                            placeholder="Confirme sua senha" />
                    </div>
                    <button type="submit" className="btn btn-block btn-custom" onClick={this.handleSignUp}>Cadastrar</button>
                </form>
                <span className="tip">Já possui cadastro? <Link to="/login"> Sign in</Link></span>
            </div>
        )
    }
}

export default withRouter(SingUp)