import React from 'react';
import "./HomePage.css";
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';

 class HomePage extends React.Component{
    constructor(props)
        { 
            super(props);
            this.state = {text: ''};
        }
        

    ChangeHandler(event) 
        {
            this.setState({ text: event.target.value });
        };

        
    render(){
        return(
            <div className="wiki-container">
                <header> Crypto Wiki </header>
                <input type="text" onKeyUp={this.ChangeHandler.bind(this)}  className="inputField" placeholder="Enter The Crypto Currency Name" /> &nbsp;
                <Router>
                    <Link to="/CoinInfo"><button className="btn" onClick={this.clickHandler}>Get Info About Coin</button><br/><br/></Link>
                </Router>
                
                <h4>Search For a Coin</h4>
            </div>
        );
    };
};


export default HomePage;

