import React, { useState } from 'react'
import "./Login.css"
import Logo from "../Logo.png";
import clap from "../../clap.PNG";
import { withRouter, Redirect, Link } from 'react-router-dom';
import instance from '../../../axiosConfig';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import { setCurrentUser } from '../../../redux/user/user.actions';

// class Login extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//         username: '',
//         password: ''
//     }
// }
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  let passwordShown = false;

 const togglePasswordVisibility = e => {
    e.preventDefault();
    if (passwordShown) {
      passwordShown = false;
    } else {
      passwordShown = true;
    }
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //     const {username, password} = this.state;

  //     instance.post("/login", {username, password, token_name: 'web_app'}).then((res) => {
  //       let data = res.data;
  //       localStorage.setItem('access_token', data.token);
  //       localStorage.setItem('user', data.user);
  //       this.props.setCurrentUser(data.user);
  //       window.location = '/';
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  // }

  //   handleChange = event => {
  //     const {value, name} = event.target;
  //     this.setState({ [name]: value});
  // }

  return (
    <div class="App">
      <div class="container">
        <div class="border rounded shadow-lg my-30">
          <div class="row">
            <div class="col-md-5 d-none d-md-block d-lg-block">
              <div className="px-4">
                <img src={Logo} width={30} height={30} alt="Logo" className="img-thumbnail" />

              </div>
              <h2 className="px-4 trust">Trust us to always <span className="text-warning">deliver</span></h2>
              <p className=" px-4 truck"> A platform where truck owners/logistics companies or transporters can have direct access to companies and individuals that want to move their goods to different  states in Nigeria.</p>
              <p className=" px-4 africa">© 2021 Pine Africa. All rights reserved.</p>
            </div>

            <div class="col-md-7 bg-white text-center p-30">
              <div class="">
                <h4 class="mt-4 text-center">Welcome back to Pine</h4>
                <p class="text-secondary text-center f-16">Please, log in to your account to continue</p>
              </div>
              <div className="col-md-8 mx-auto">
                <form className="form mt-4" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="email" className="form-control border border-warning ty" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" placeholder="Email" onChange={handleChange} value={email} />
                  </div>
                  <div className="form-group">
                    <label for="InputPassword"></label>
                    <input type={passwordShown ? "text" : "password"} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" data-toggle="password" onChange={handleChange} value={password} />
                    <i onClick={togglePasswordVisibility} class="fas fa-eye eye"></i>

                  </div>

                  <div className="form">
                    <p className="form-check-label text-left pb-4"><span className="text-secondary">Forgot your password? </span> <a href="/"><b>Click here</b></a></p>
                  </div>
                  <button type="submit" className="btn btn-warning btn-block"><b>Log in</b></button>
                  <div className="ytt">
                    <p className="form-check-label text-center mt-3"><span className="text-secondary">Don't have an account? </span><a href="/register"><b>Click here</b></a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default withRouter(connect(null, mapDispatchToProps)(Login));  
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

