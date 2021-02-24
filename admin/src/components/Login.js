import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/design.css';



import * as actions from "../actions/actions"

class Login extends Component {

    constructor() {
        super();
        this.state = {
            adminName: null,
            adminPassword: null
        }
    }

    valueChangeHandler = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    validateAuthDetails = () => {
        if (!this.state.adminName || !this.state.adminPassword) {
            return false;
        }
        return true;
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (!this.validateAuthDetails()) {
            alert("Login details are required");
        }

        const authBody = this.state;

        try {
            this.props.getLogin(authBody);
        }
        catch (error) {
            console.log(error.message)
        }

    }

    render() {

        if (this.props.message) {
            return <Redirect to='/home' />
        }


        return (

            <div className="background" style={{backgroundImage:"url(./bg.jpg)"}}>
            <div class="container">
                 <div class="row">
                      <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                             <div class="col-lg-12 login-key">
                                  <i class="fa fa-key" aria-hidden="true"></i>
                              </div>
                             <div class="col-lg-12 login-title">
                                  ADMIN PANEL
                             </div>
    
                             
                             <div class="col-lg-12 login-form">
                               <form onSubmit={this.handleSubmit}>
                                 <div class="form-group">
                                   <label class="form-control-label">USERNAME</label>

                                     <input type="text" class="form-control" placeholder="user name" name="adminName"
                                       onChange={this.valueChangeHandler} />
                                 </div>
                                 <div class="form-group">
                                 <label class="form-control-label">PASSWORD</label>
                                     <input type="password" class="form-control" placeholder="password" name="adminPassword"
                                         onChange={this.valueChangeHandler} />
                                    </div>

                              <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                </div>
                                <div class="col-lg-6 login-btm login-button">
                                <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
            </div>
             </div>       

        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminData: state.adminData,
        message: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLogin: (payLoad) => dispatch(actions.getLogin(payLoad)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
