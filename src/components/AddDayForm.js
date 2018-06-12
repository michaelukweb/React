import { PropTypes, Component } from 'react'

const londonLocations  = [
	
	"Moorgate", 
	"Piccadiliy", 
	"Oxford Circus",
	"Clapham",
	"Covent Garden",
	"Bank",
	"Liverpool Street",
	"South London",
	"East London",
	"North London",
	"West London"

]


class Autocomplete extends Component {


	get value() {
		return this.refs.inputLocation.value
	}

	set value(inputValue) {
		this.refs.inputLocation.value = inputValue
	}

	render () {
		return (
			<div>
				<input ref="inputLocation"
					   type="text" 
					   list="london-location" />
				<datalist id="london-location">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

export const AddDayForm = ({ location, date, weights, cardio, onNewDay }) => {

		let _location, _date, _weights, _cardio
		const submit = (e) => {
		e.preventDefault()
		onNewDay ({
			location: _location.value,
			date: _date.value,
			weights: _weights.checked,
			cardio: _cardio.checked
		})

		_location.value = ''
		_date.value = ''
		_weights.checked = false
		_cardio.checked = false
	
		}

		return (
			<form onSubmit={submit} className="add-day-form">

				<label htmlFor="location">Location Name</label>
				<Autocomplete options={londonLocations}
					   ref={input => _location = input}/>

				<label htmlFor="date">Date</label>
				<input id="date" 
					   type="date" 
					   required 
					   defaultValue={date}
					   ref={input => _date = input}/>

				<div>
					<input id="weights" 
						   type="checkbox" 
						   defaultChecked={weights}	
						   ref={input => _weights = input}/>
					<label htmlFor="weights">Weights Day</label>
				</div>

				<div>	
					<input id="cardio" 
						   type="checkbox"
						   defaultChecked={cardio} 
						   ref={input => _cardio = input}/>
					<label htmlFor="cardio">
					Cardio Day
					</label>
				</div>
				<button>Add Day</button>
			</form>
		)
}



AddDayForm.defaultProps = {
	location: "Moorgate",
	date: "2018-02-12",
	weights: true,
	cardio: false
}


AddDayForm.propTypes = {
	location: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	weights: PropTypes.bool.isRequired,
	cardio: PropTypes.bool.isRequired
}




