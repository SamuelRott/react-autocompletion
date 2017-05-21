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

	}, 1000)

	

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
