import { Component } from 'react' 
import { GymDayList } from './GymDayList'
import { GymDayCount } from './GymDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {

		constructor (props) {

			super(props)
			this.state={

				allGymDays: 

			[

				{
					location: "Central London",
					date: "03/01/2018",
					weights: true,
					cardio: false

				}



			]
			}
			this.addDay = this.addDay.bind(this)
		}


		addDay(newDay) {
			this.setState({
				allGymDays: [
					...this.state.allGymDays,
					newDay
				]
			})
		}

		countDays(filter) {
		const { allGymDays } = this.state
		return allGymDays.filter(
			(day) => (filter) ? day[filter] : day).length

		}

		render() {

			return (

				<div className="app">

				<Menu />
				{(this.props.location.pathname === "/") ? 
					<GymDayCount total={this.countDays()} 
								 weights={this.countDays("weights")}
								 cardio={this.countDays("cardio")}
					/> : 

				(this.props.location.pathname === "/add-day") ?
				<AddDayForm onNewDay={this.addDay}/> : 
				<GymDayList days={this.state.allGymDays}
							filter={this.props.params.filter}/>
				}
					
					
				</div>
			)
		}



}