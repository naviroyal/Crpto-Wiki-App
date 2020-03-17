import React from 'react';
import "./CoinInfo.css";



 class CoinInfo extends React.Component{
 
	constructor(props)
		{  
			super(props);
			this.inputRef=React.createRef()
			this.state=
				{
					data:{},
					isLoaded:false
				}
		}


	ChangeHandler(event)
	 	{
    		this.setState({ text: event.target.value });
		};

		  
	componentDidMount()
		{
			this.inputRef.current.focus()

			fetch('https://jsonplaceholder.typicode.com/posts/2').then(res=>res.json()).then(
				(user) => ( this.setState({data:user,isLoaded:true}))
				);
		}


 	clickHandler = () => {
 		alert(this.inputRef.current.value)
 	}


	render(){
		return(
		<main className="wiki-container">
			<header> Crypto Wiki </header>
			<input type="text" ref={this.inputRef} onKeyUp={this.ChangeHandler.bind(this)} className="inputField" placeholder="Enter The Crypto Currency Name" /> &nbsp;
			<button className="btn" onClick={this.clickHandler}>Get Info About Coin</button><br/><br/>
			<h4>Search For a Coin</h4>
			<section align="center" className="frameset">
				<section className="frames">
					<section  className="heading"> {this.state.text} </section>
					<section className="info-top">
						
						<section className="row">
							{this.state.isLoaded?this.state.data.name:'Loading Data. . . .'}	
						</section>
						{this.state.isLoaded?this.state.data.id:'Loading Data. . . .'}
					</section>
					<section className="info-bottom">
					{this.state.isLoaded?this.state.data.symbol:'Loading Data. . . .'}

					</section>
				</section>
			</section>
		</main>);
	};
};


export default CoinInfo;

