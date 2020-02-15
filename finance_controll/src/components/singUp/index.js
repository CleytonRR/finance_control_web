import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "./style.css"

export default function singUp() {
  return (
    <div className="box align-self-lg-center">
        <form className="p-3 rounded">
            <h4 className="text-center text-primary"><i class="fas fa-user-circle"></i></h4>
            <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Digite seu email" />
                <small id="emailHelp" className="form-text">Email único, não compartilhe</small>
            </div>

            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Digite sua senha"/>
            </div>

            <div className="form-group">
                <input type="password" className="form-control" id="inputPassword" placeholder="Confirme sua senha"/>
            </div>
            <button type="submit" className="btn btn-block btn-custom">Sign up</button>
        </form>
        <span className="tip">Já possui cadastro? <a href="#" className="sign-in">Sign in</a></span>
    </div>
  );
}
