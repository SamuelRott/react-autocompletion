import React  from "react";

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
