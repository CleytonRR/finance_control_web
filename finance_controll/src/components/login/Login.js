import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link, withRouter} from 'react-router-dom'

import api from "../../service/api"
import "./style.css"

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  }

  handleSignIn = async e => {
    e.preventDefault()
    const {email, password} = this.state
    if(!email || !password) {
      this.setState({error: "Preencha todos os dados para logar"})
    } else {
      try {
        const response = await api.post("/login", {email, password})
        this.props.history.push("/singUp")
      } catch (err) {
        console.log(err)
        this.setState({error: "Email ou senha invalidos"})
      }
    }
  }
  render() {
    return (
      <div className="box align-self-lg-center">
        <form className="p-3 rounded">
          <h4 className="text-center text-primary"><i class="fas fa-user-circle"></i></h4>
          {this.state.error && <p className="error text-center">{this.state.error}</p>}
          <div className="form-group">
            <input 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            aria-describedby="emailHelp" 
            placeholder="Digite seu email" 
            onChange={e => this.setState({email: e.target.value})}/>
            <small id="emailHelp" className="form-text">Email único, não compartilhe</small>
          </div>

          <div className="form-group">
            <input 
            type="password" 
            className="form-control" 
            id="inputPassword" 
            placeholder="Digite sua senha" 
            onChange={e => this.setState({password: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-block btn-custom" onClick={this.handleSignIn}>Logar</button>
        </form>
        <span className="tip">Ainda não tem cadastro?<Link to="/singUp"> Cadastra-se</Link></span>
      </div>
    )
  }
}

export default withRouter(Login)