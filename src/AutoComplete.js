import React  from "react";
import debounce from "lodash/debounce";
import map from "lodash/map";

class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			propositions: null
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
			.then( propositions => {
				this.setState({propositions});
			});
	}

	render() {

		const propositions = this.state.propositions;
		// create list of suggestions using lodash map function
		const teasers = map(propositions, (proposition) =>
			{
				return <option key={proposition.id+"key"} value={proposition.title}> {proposition.title} </option>;
			}
		)

		return (

			<form className="Form">
				<input
					className="Searchfield"
					onChange={this.handleChange}
					value={this.state.value}/>
				<select defaultValue="select a radio">
					<option disabled>select a radio</option>
					{teasers}
				</select>
			</form>

		);
	}
}


export default ( AutoComplete );
