import React  from "react";

class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}

	render() {

		return (

			<form className="Form">
				<input
					className="Searchfield"
					value={this.state.value}/>
			</form>

		);
	}
}


export default ( AutoComplete );
