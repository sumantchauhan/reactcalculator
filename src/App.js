import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            isDarkTheme:false,
            isLightTheme:false
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    toggleDarkTheme = () => {
        this.setState({isDarkTheme:true,isLightTheme:false});
    }

    toggleLightTheme = () => {
        this.setState({isDarkTheme:false,isLightTheme:true});
    }

    render() {
        return (
            <div className={`body ${this.state.isDarkTheme ? "darkBody" : "whiteBody"}`}>
                <div className="calculator-body">
                    <button className="themebtn" onClick={this.toggleLightTheme}>Light Theme</button>
                    <button className="themebtn" onClick={this.toggleDarkTheme}>Dark Theme</button>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent 
                        onClick={this.onClick} 
                        darkTheme={this.state.isDarkTheme} 
                        lightTheme={this.state.isLightTheme}/>
                </div>
            </div>
        );
    }
}

export default App;
