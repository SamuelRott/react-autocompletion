import React  from "react";
import debounce from "lodash/debounce";


class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}

	//  is called onChange of input value
	//  Set the state to the given value
	handleChange = (event) => {
		this.setState({value: event.target.value});
		this.waitForFetch();
	}

	// wait 1 seconde after last key stroke before fetching api
	// use lodash debounce function
	waitForFetch = debounce(() => {
		this.getApi(this.state.value);
	}, 1000)

	// fetch api with the input value as query value, return an array of radio4000 channels
	getApi(value) {
		return fetch(`https://api.radio4000.com/v1/channels?title.icontains=${value}`)
			.then(res => res.json())
			.then( console.log);
	}

	render() {

		return (

			<form className="Form">
				<input
					className="Searchfield"
					onChange={this.handleChange}
					value={this.state.value}/>
			</form>

		);
	}
}


export default ( AutoComplete );
