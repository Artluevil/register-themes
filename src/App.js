import React, { Component } from 'react'
import { GiAllSeeingEye } from "react-icons/gi";

export default class App extends Component {
    state = {
        theme: 'theme1'
    }

    onThemeClick = (e) => {
        this.setState({
            theme: e.target.name
        })
    }

    getStyleInput = () => {
        if(this.state.theme === 'theme1') {
            return 'themeInput1'
        }
        else if(this.state.theme === 'theme2') {
            return 'themeInput2'
        }
        else if (this.state.theme === 'theme3') {
            return 'themeInput3'
        }
    }

    getStyleButton = () => {
        if(this.state.theme === 'theme1') {
            return 'themeButton1'
        }
        else if(this.state.theme === 'theme2') {
            return 'themeButton2'
        }
        else if (this.state.theme === 'theme3') {
            return 'themeButton3'
        }
    }

    getBackground = () => {
        if(this.state.theme === 'theme1') {
            return 'background1'
        }
        else if(this.state.theme === 'theme2') {
            return 'background2'
        }
        else if (this.state.theme === 'theme3') {
            return 'background3'
        }
    }

    getIconColor= () => {
        if(this.state.theme === 'theme1') {
            return 'icon-color1'
        }
        else if(this.state.theme === 'theme2') {
            return 'icon-color2'
        }
        else if (this.state.theme === 'theme3') {
            return 'icon-color3'
        }
    }

    render() {
        console.log(this.state.theme)
        return (
            <div className={this.getBackground()}>
                <div className="buttons">
                    <button name="theme1" onClick={this.onThemeClick}></button>
                    <button name="theme2" onClick={this.onThemeClick}></button>
                    <button name="theme3" onClick={this.onThemeClick}></button>
                </div>
                <div id="register-panel" className={this.state.theme}>
                    <h1 style={{textAlign: 'center', marginBottom: '35px', paddingTop: '25px', fontWeight: '10px'}}>Registration Panel</h1>
                    <div className="first-name">
                        <input className={this.getStyleInput()} style={{textAlign: 'center'}} type="text" placeholder="First Name" />
                    </div>
                    <div className="last-name">
                        <input className={this.getStyleInput()} style={{textAlign: 'center'}} type="text" placeholder="Last Name"/>
                    </div>
                    <div className="forms">
                        <div className="form">
                            <input className={this.getStyleInput()} style={{marginTop: '35px', textAlign: 'center'}} type="text" placeholder="Password" />
                        </div>
                        <div className="form">
                            <input className={this.getStyleInput()} style={{textAlign: 'center'}} type="text" placeholder="Repeat Password"/>
                        </div>
                        <div className="form">
                            <input className={this.getStyleInput()} style={{textAlign: 'center'}} type="text" placeholder="Your Email"/>
                        </div>
                        <div className="form">
                            <input className={this.getStyleInput()} style={{textAlign: 'center'}} type="text" placeholder="Security Question"/>
                        </div>
                        <div className="form">
                            <input className={this.getStyleInput()} style={{textAlign: 'center'}} type="text" placeholder="Your Answer"/>
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
                            <button className={this.getStyleButton()}>Register</button>
                        </div>
                        <div className="styling-bar"></div>
                        <div className="genders">
                            <p>Male</p>
                            <p style={{marginLeft: '95px'}}>Female</p>
                        </div>
                        <div>
                            <i><GiAllSeeingEye id="icon" className={this.getIconColor()}/></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
