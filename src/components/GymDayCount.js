import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import Calendar from 'react-icons/lib/fa/calendar'
import {PropTypes} from 'react'

const percentToDecimal = (decimal) => 
{
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total,goal) => 
{
	return percentToDecimal(total/goal)
}

	
export const GymDayCount = ({total=70, weights=20,cardio=10, goal=100}) => (

			<div className="gym-day-count">
				<div className="total-days">
				<span>{total}</span>
				<Calendar/>
					<span>days</span>
				</div>

				<div className="weight-days">
				<span>{weights}</span>
					<span>days</span>
				</div>

				<div className="cardio-days">
				<span>{cardio}</span>
				<Terrain/>
					<span>days</span>
				</div>
				<div >
				<span>{calcGoalProgress(total, goal)}</span>
				</div>
			
			</div>
		)

GymDayCount.propTypes = {
	total: PropTypes.number,
	weights: PropTypes.number,
	cardio: PropTypes.number,
	goal: PropTypes.number
}