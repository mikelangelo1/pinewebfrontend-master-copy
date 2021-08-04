import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// import { setCurrentUser } from '../../../redux/user/user.actions';
import { register } from '../../../redux/actions/auth';
import PropTypes from 'prop-types';
import instance from '../../../axiosConfig'

import 'react-toastify/dist/ReactToastify.css';
import "./CreateAccount.css";
import Logo from "../Logo.png";
import { propTypes } from 'react-bootstrap/esm/Image';


const SuccessfulSignUp = ({ register, isAuthenticated }) => {
  useEffect(() => {
    instance.get('/roles').then((res) => {
      console.log(res.data[0].id)
      // setRole_id(res.data)
    })
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
    password2: '',
  });
  const [passwordShown, setPasswordShown] = useState(false)
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [emailAddress, setEmailAddress] = useState("");
  const [registerAs, setRegisterAs] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("")
  const [accountSubtype, setAccountSubtype] = useState(["As a business", "As an individual (personal)"])
  const [isChecked, setIsChecked] = useState(false);
  // const [password, setPassword] = useState("");

  const { firstName, lastName, emailAddress, phoneNumber, password, password2 } = formData;
  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const AddAccountSubtype = accountSubtype.map(AddAccountSubtype => AddAccountSubtype)

  const handleRegisterAsChange = (e) => {
    setRegisterAs(e.target.value);
  }

  const [role_id, setRole_id] = useState('')

  const handleAccountSubtype = (e) => {
    setRole_id(accountSubtype[e.target.value])
  }


  const onSubmit = async (e) => {
    let name = firstName + lastName
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Please enter a password with 6 or more characters")
    }
    if (password !== password2) {
      toast.error("Password do not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

    } else {
      register({ name, emailAddress, password, phoneNumber, role_id });
    }
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // } 

  return (
    <>
      <div className="container mt-3">
        <div className="row px-4">
          <div className="column-1">
            <div className="px-4 clap">
              <img src={Logo} width={30} height={30} alt="Logo" className="img-thumbnail" />
            </div>
            <h2 className="px-4 trust">Trust us to always <span className="text-warning">deliver</span></h2>
            <p className=" px-4 truck"> A platform where truck owners/logistics companies or transporters can have direct access to companies and individuals that want to move their goods to different  states in Nigeria.</p>
            <p className=" px-4 africa">© 2021 Pine Africa. All rights reserved.</p>
          </div>



          <div className="column-2 px-4">
            <h4 className="text-center mt-5">Create your Pine account</h4>
            <p className="text-center text-secondary">Curabitur aliquet quam id dui posuere blandit.</p>

            <div className="container">
              <div className="px-5">
                <form className="px-4 mt-5" onSubmit={onSubmit}>
                  <div style={{ display: 'flex' }}>
                    <div className="form-group" style={{ width: '47%', paddingBottom: '40px' }}>
                      <input
                        type="text"
                        className="form-control ty"
                        placeholder="First Name"
                        onChange={onChangeHandler}
                        name="firstName"
                        value={firstName}
                      />
                    </div>

                    <div style={{ width: "6%" }}></div>

                    <div className="form-group" style={{ width: '47%', paddingBottom: '40px' }}>
                      <input
                        type="text"
                        className="form-control ty"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={onChangeHandler}
                      />
                    </div>

                  </div>


                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control ty"
                      id="inputAddress"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      onChange={onChangeHandler}
                      value={phoneNumber}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control tzy"
                      id="inputAddress2"
                      placeholder="Email Address"
                      onChange={onChangeHandler}
                      name="emailAddress"
                      value={emailAddress} />
                  </div>

                  <div className="form-group" style={{ display: 'flex' }}>
                    <div style={{ width: '47%', backgroundColor: '#F8F9FA', padding: '10px', borderRadius: '8px' }}>

                      <input type="radio"
                        value="Truck Owner"
                        onChange={handleRegisterAsChange}
                        style={{ marginTop: '2px' }}
                        name="register_as" />
                      <label for="Truck Owner" style={{ fontWeight: 'bold', fontSize: '14px', paddingLeft: '12.92px', paddingTop: '2px' }}> I'm a truck owner</label>
                    </div>
                    <div style={{ width: '6%' }}></div>
                    <div style={{ width: '47%', backgroundColor: '#F8F9FA', padding: '10px', borderRadius: '8px' }}>
                      <input
                        type="radio"
                        value="Shipper"
                        onChange={handleRegisterAsChange}
                        style={{ marginTop: '2px' }}
                        name="register_as" />
                      <label for="Shipper" style={{ fontWeight: 'bold', fontSize: '14px', paddingLeft: '12.92px' }}> I'm a shipper</label>
                    </div>

                  </div>

                  <div className="form-group">
                    <select
                      className="form-control tzy"
                      onChange={e => handleAccountSubtype(e)}

                    >
                      {AddAccountSubtype.map((index, key) => <option key={key}>{index}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control ty"
                      // id="inputAddress2"
                      placeholder="Enter password"
                      onChange={onChangeHandler}
                      name="password"
                      value={password}
                      />
                  </div>
                  <div className="form-group">
                    <input 
                      type="password" 
                      className="form-control ty" 
                      // id="inputAddress2" 
                      placeholder="Confirm password" 
                      onChange={onChangeHandler}
                      name="password2"
                      value={password2} />
                  </div>

                  <div className="form-group" style={{ display: 'flex' }}>
                    <div style={{ width: '5%', marginTop: '2px' }}>
                      <input type="checkbox" id="t&c" name="terms_and_conditions" value="Terms and Conditions" checked={isChecked} onChange={handleOnChange} />
                    </div>

                    <div style={{ width: '95%', marginTop: '0px' }}>
                      I agree to Pine’s <b><a href="#" style={{ color: 'black', textDecoration: 'underline' }} >Terms & conditions</a></b> and <b><a href="#" style={{ color: 'black', textDecoration: 'underline' }}>Policy</a></b>
                    </div>

                  </div>


                  <button type="submit" className="btn btn-warning btn-lg btn-block"><b style={{ fontSize: '14px', letterSpacing: '0.004em', lineHeight: '22px', color: '#081A38' }}>Create account</b></button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

SuccessfulSignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: propTypes.bool
}

const mapStateToProp = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProp, { register })(SuccessfulSignUp);
