import React, { Component } from 'react'

export default class App extends Component {
    state = {
        theme: 'theme1'
    }

    onThemeClick = (e) => {
        this.setState({
            theme: e.target.name
        })
    }

    render() {
        console.log(this.state.theme)
        return (
            <div>
                <div className="buttons">
                    <button name="theme1" onClick={this.onThemeClick}>Theme 1</button>
                    <button name="theme2" onClick={this.onThemeClick}>Theme 2</button>
                    <button name="theme3" onClick={this.onThemeClick}>Theme 3</button>
                </div>
                <div id="register-panel" className={this.state.theme}>
                    <h1 style={{textAlign: 'center', marginBottom: '35px', paddingTop: '25px'}}>Registration Panel</h1>
                    <div className="first-name">
                        <input style={{textAlign: 'center'}} type="text" placeholder="First Name" />
                    </div>
                    <div className="last-name">
                        <input style={{textAlign: 'center'}} type="text" placeholder="Last Name"/>
                    </div>
                    <div className="forms">
                        <div className="form">
                            <input style={{marginTop: '35px', textAlign: 'center'}} type="text" placeholder="Password" />
                        </div>
                        <div className="form">
                            <input style={{textAlign: 'center'}} type="text" placeholder="Repeat Password"/>
                        </div>
                        <div className="form">
                            <input style={{textAlign: 'center'}} type="text" placeholder="Your Email"/>
                        </div>
                        <div className="form">
                            <input style={{textAlign: 'center'}} type="text" placeholder="Security Question"/>
                        </div>
                        <div className="form">
                            <input style={{textAlign: 'center'}} type="text" placeholder="Your Answer"/>
                        </div>
                        <div style={{display: 'inline-block', marginLeft: '250px', marginTop: '25px'}}>
                            <label class="container">
                            <input type="radio" checked="checked" name="radio"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div style={{display: 'inline-block',marginLeft: '100px'}}>
                            <label class="container">
                            <input type="radio" name="radio"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        <div className="register-btn">
                            <button>Register</button>
                        </div>
                        <div className="styling-bar"></div>
                        <div className="genders">
                            <p>Male</p>
                            <p style={{marginLeft: '95px'}}>Female</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
