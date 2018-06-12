import { createClass } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import Calendar from 'react-icons/lib/fa/calendar'



export const GymDayCount = createClass ({

	getDefaultProps() {

		return {
			total: 50,
			weights: 5,
			cardio: 2,
			goal: 75	
		}
	},

		percentToDecimal (decimal)
		{
			return ((decimal * 100) + '%')
		},

		calcGoalProgress(total,goal) 
		{
			return this.percentToDecimal(total/goal)
		}, 

		render () {

			return(

			<div className="gym-day-count">
				<div className="total-days">
				<span>{this.props.total}</span>
				<Calendar/>
					<span>days</span>
				</div>

				<div className="weight-days">
				<span>{this.props.weights}</span>
					<span>days</span>
				</div>

				<div className="cardio-days">
				<span>{this.props.cardio}</span>
				<Terrain/>
					<span>days</span>
				</div>
				<div >
				<span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
				</div>
			
			</div>
		)
	}
})
