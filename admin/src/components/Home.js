import React, { Component } from 'react'
import '../components/design.css';


export default class Home extends Component {
    render() {
        return (
            <div className="background" style={{backgroundImage:"url(./bgm1.jpg)"}}>
            <h2 className="head" style={{position:"absolute",left:"43%" ,top:"5%", color:"red"}}> HOME PAGE</h2>
            <div class="container">
                 <div class="row">
                      <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                             <div class="col-lg-12 login-form">
                               <form onSubmit={this.handleSubmit}>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">PLANT MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">PLANTER MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">SEED MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">FERTILZER MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">GARDENDECOR MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">ORDER MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">CUSTOMER MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">ORDER MODULE</button>
                                 </div>
                                 <div class="form-group">
                                 <button className="btn btn-primary btn-block" type="submit">PAYMENT MODULE</button>
                                 </div>
                              <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                </div>
                                <div class="col-lg-6 login-btm login-button">
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
