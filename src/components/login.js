import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Reg from './reg.js';

function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <Routes>
              <Route path="/" element={
                <>
                  <h3>Вход</h3>
                  <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Email
                      </label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Пароль
                      </label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                          checked
                        />
                        <label className="form-check-label" htmlFor="form1Example3">
                          Запомнить меня
                        </label>
                      </div>
                      <a href="#!">Забыл пароль?</a>
                      <Link to="/Reg" className="nav-link">
                        <p>Регистрация</p>
                      </Link>
                    </div>

                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Войти
                    </button>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        или
                      </p>
                    </div>

                    <a
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: '#3b5998' }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f me-2"></i>
                    </a>
                    <a
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: '#55acee' }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter me-2"></i>
                    </a>
                  </form>
                </>
              } />
              <Route path="/Reg" element={<Reg />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
