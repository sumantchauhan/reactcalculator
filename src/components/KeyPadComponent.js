import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className= "button">
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }  
                    name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="C" onClick={e => this.props.onClick(e.target.name)}>Clear</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button 
                    className={`${this.props.darkTheme ? 'darkTheme' : ''} 
                    ${this.props.lightTheme ? 'lightTheme' : ''}` }
                    name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
